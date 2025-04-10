<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DepartmentResource\Pages;
use App\Filament\Resources\DepartmentResource\RelationManagers;
use App\Models\Department;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;

class DepartmentResource extends Resource
{
    protected static ?string $model = Department::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

     protected static ?string $navigationLabel = 'Departement';
    protected static ?string $navigationGroup = 'Departement';


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('titre')
                ->live(debounce: 500) // Optional: debounce for better performance while typing
                    ->afterStateUpdated(fn ($state, $set) => $set('slug', Str::slug($state))) // Automatically generate slug
                 
                    ->maxLength(255)
                ->required(),
                Forms\Components\TextInput::make('slug')
                ->unique(ignoreRecord: true) 
                   ->required()
                   ->maxLength(255),
                Forms\Components\TextInput::make('nom')
                ->label('Nom de Chef de Departement  ')

                    ->required()
                  ,
                  
                       Forms\Components\TextInput::make('role')
                       ->required()
                       ->maxLength(255),
                Forms\Components\FileUpload::make('image')
                ->columnSpanFull()

                    ->image()
                    ->required(),
              
                Forms\Components\FileUpload::make('images')->multiple()                 
                   ->columnSpanFull()

                    ->image()->required(),
                Forms\Components\RichEditor::make('apropos')
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('titre'),
                // Optional: debounce for better performance while typing
                Tables\Columns\TextColumn::make('slug'),

               
                Tables\Columns\ImageColumn::make('image'),
                Tables\Columns\TextColumn::make('nom')
                ->searchable(),
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
            'index' => Pages\ListDepartments::route('/'),
            'create' => Pages\CreateDepartment::route('/create'),
            'edit' => Pages\EditDepartment::route('/{record}/edit'),
        ];
    }
}
