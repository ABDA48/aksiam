<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CleResource\Pages;
use App\Filament\Resources\CleResource\RelationManagers;
use App\Models\Cle;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CleResource extends Resource
{
    protected static ?string $model = Cle::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('chiffre')
                    ->required()
                    ->numeric(),
                Forms\Components\TextInput::make('title')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('subtitle')
                    ->required()
                    ->maxLength(255),
                    Forms\Components\Select::make('jamat_id')  
                    ->relationship('jamat', 'titre')
                    ->preload()
                    ->label('Jamats'),
                  
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
                Tables\Columns\TextColumn::make('chiffre')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('subtitle')
                    ->searchable(),
            
                    Tables\Columns\TextColumn::make('jamat.titre')->sortable()->label('Jamat'),
                    Tables\Columns\TextColumn::make('department.titre')->sortable()->label('Department'),
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
            'index' => Pages\ListCles::route('/'),
            'create' => Pages\CreateCle::route('/create'),
            'edit' => Pages\EditCle::route('/{record}/edit'),
        ];
    }
}
