<?php

namespace App\Filament\Resources\DepartmentResource\RelationManagers;

use App\Filament\Resources\StafdepartementResource;
use App\Models\Stafdepartement;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class StafdepartementsRelationManager extends RelationManager
{
    protected static string $relationship = 'stafdepartements';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('nom')
                    ->required()
                    ->maxLength(255),
                    Forms\Components\FileUpload::make('image')
                    ->required()
                    ->image(),
                    Forms\Components\TextInput::make('role')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Select::make('department_id')
                ->relationship('department', 'titre')
                ->preload()
                ->label('Departement')
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
            Tables\Columns\TextColumn::make('role')
                ->searchable(),
               
                Tables\Columns\TextColumn::make('department.titre')->sortable()->label('Department'),
                
            Tables\Columns\TextColumn::make('created_at')
                ->dateTime()
                ->sortable()
                ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
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
    public function isReadOnly(): bool
    {
        return false;
    }
}
