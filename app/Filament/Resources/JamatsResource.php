<?php

namespace App\Filament\Resources;

use App\Filament\Resources\JamatsResource\Pages;
use App\Filament\Resources\JamatsResource\RelationManagers;
use App\Filament\Resources\JamatsResource\RelationManagers\CimitieresRelationManager;
use App\Filament\Resources\JamatsResource\RelationManagers\MembersRelationManager;
use App\Models\Jamats;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Infolists\Components\Group;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;
use Filament\Infolists\Infolist;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Components\ImageEntry;
class JamatsResource extends Resource
{
    protected static ?string $model = Jamats::class;

    protected static ?string $navigationIcon = 'heroicon-o-bookmark-square';

    protected static ?string $navigationLabel = 'Jamats';
   protected static ?string $navigationGroup = 'Jamats';
    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('titre')
                ->live(debounce: 500) // Optional: debounce for better performance while typing
                    ->afterStateUpdated(fn ($state, $set) => $set('slug', Str::slug($state))) // Automatically generate slug
                 
                    ->maxLength(255)
                 ,
             
                    
                    Forms\Components\TextInput::make('slug')
                    ->required() ->unique(ignoreRecord: true) 
                    ->maxLength(255),
                    Forms\Components\TextInput::make('nom')
                    ->label('Nom de Chef de Jamats  ')
                    ->required(),
                Forms\Components\FileUpload::make('image')
                    ->image()
                    ->required(),
                Forms\Components\TextInput::make('role')
                    ->required()
                    ->maxLength(255),
                Forms\Components\FileUpload::make('images')
                    ->multiple()
                    ->image()
                    ->columnSpanFull(),
                Forms\Components\RichEditor::make('apropos')
                    ->columnSpanFull(),
            
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('titre')->searchable(),

                Tables\Columns\TextColumn::make('nom')
                    ->searchable(),
                Tables\Columns\ImageColumn::make('image'),
                Tables\Columns\TextColumn::make('role')
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('slug')
                    ->searchable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\ViewAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
    public static function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->schema([
                ImageEntry::make('image')
                        ->label('Image')
                        ->circular()
                        ->height(200)->columnSpan('full')->alignment('center'),
                Group::make([
                    'default' => 1,
                    'sm' => 2,
                    'md' => 3,
                    'lg' => 4,
                    'xl' => 6,
                    '2xl' => 8,
                ])->schema([
                    \Filament\Infolists\Components\Section::make("Information de Chef de department")
                    ->schema([
                    TextEntry::make('nom')
                        ->label('Nom')
                        ->badge()
                        ->color('success'),
     
                    TextEntry::make('role')
                        ->label('Rôle')
                        ->icon('heroicon-m-user-circle')
                        ->color('primary'),
                 ])->columns(2),
                 ])->columnSpanFull(),

                 \Filament\Infolists\Components\Section::make("Information de   department")
                 ->schema([ 
                    TextEntry::make('titre')
                    ->label('Titre')
                     ->columnSpanFull(),
    
                TextEntry::make('slug')
                    ->label('Slug')
                    ->copyable()
                    ->color('gray')
                     ->columnSpanFull(),

                 ]),
                // Other fields
                
            ])
           
            ;
    }

    public static function getRelations(): array
    {
        return [
            MembersRelationManager::class,CimitieresRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListJamats::route('/'),
            'create' => Pages\CreateJamats::route('/create'),
            'edit' => Pages\EditJamats::route('/{record}/edit'),
            'view' => Pages\ViewJamats::route('/{record}'),
        ];
    }
}
