<?php

namespace App\Filament\Resources;

use App\Filament\Resources\StafdepartementResource\Pages;
use App\Filament\Resources\StafdepartementResource\RelationManagers;
use App\Models\Stafdepartement;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Infolists\Infolist;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\Group;

class StafdepartementResource extends Resource
{
    protected static ?string $model = Stafdepartement::class;

    protected static ?string $navigationIcon = 'heroicon-o-folder-plus';

    protected static ?string $navigationLabel = 'Stafs';
   protected static ?string $navigationGroup = 'Departement';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('nom')
                    ->required()
                    ->maxLength(255),
                Forms\Components\FileUpload::make('image')
                    ->image()
                    ->required(),
                Forms\Components\TextInput::make('role')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Select::make('department_id')
                ->relationship('department', 'titre')
                ->preload()
                ->label('Departement'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('nom')
                    ->searchable(),
                Tables\Columns\ImageColumn::make('image'),
                Tables\Columns\TextColumn::make('role')
                    ->searchable(),
                   
                    Tables\Columns\TextColumn::make('department.titre')->sortable()->label('Department'),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
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
                    \Filament\Infolists\Components\Section::make("Information le Staf")
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

                
                // Other fields
                
            ])
           
            ;
    }
    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListStafdepartements::route('/'),
            'create' => Pages\CreateStafdepartement::route('/create'),
            'edit' => Pages\EditStafdepartement::route('/{record}/edit'),
            'view' => Pages\ViewStafdepartement::route('/{record}'),
        ];
    }
}
