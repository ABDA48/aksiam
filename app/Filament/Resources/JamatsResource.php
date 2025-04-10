<?php

namespace App\Filament\Resources;

use App\Filament\Resources\JamatsResource\Pages;
use App\Filament\Resources\JamatsResource\RelationManagers;
use App\Models\Jamats;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;

class JamatsResource extends Resource
{
    protected static ?string $model = Jamats::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

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
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
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
            'index' => Pages\ListJamats::route('/'),
            'create' => Pages\CreateJamats::route('/create'),
            'edit' => Pages\EditJamats::route('/{record}/edit'),
        ];
    }
}
