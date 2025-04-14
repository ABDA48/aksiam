<?php

namespace App\Filament\Resources\JamatsResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class MembersRelationManager extends RelationManager
{
    protected static string $relationship = 'members';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('nom')
                ->required()
                ->maxLength(255),
            Forms\Components\TextInput::make('email')

                ->maxLength(255),
            Forms\Components\TextInput::make('telephone')
                 
                ->maxLength(255),
            Forms\Components\FileUpload::make('image')
                ->image()
                ->required(),
            Forms\Components\TextInput::make('ville')
                ->required()
                ->maxLength(255),
            Forms\Components\Select::make('jamat_id')  ->required()
            ->relationship('jamat', 'titre')
            ->preload()
            ->label('Jamats'),
          
            Forms\Components\Select::make('department_id')
            ->relationship('department', 'titre')
            ->preload()
            ->label('Departement'),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('nom')
            ->columns([
                Tables\Columns\TextColumn::make('nom')
                ->searchable(),
            Tables\Columns\ImageColumn::make('image'),
            Tables\Columns\TextColumn::make('ville')
                ->searchable(),
                Tables\Columns\TextColumn::make('jamat.titre')->sortable()->label('Jamat'),
                Tables\Columns\TextColumn::make('department.titre')->sortable()->label('Department'),

            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
    public function isReadOnly(): bool
    {
        return false;
    }
}
