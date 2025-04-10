<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ActualiteResource\Pages;
use App\Filament\Resources\ActualiteResource\RelationManagers;
use App\Models\Actualite;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;

class ActualiteResource extends Resource
{
    protected static ?string $model = Actualite::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';
        protected static ?string $navigationLabel = 'Actualités';
        protected static ?string $navigationGroup = 'Actualités';
    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\FileUpload::make('featured_img')
                ->image()
                ->label('Featured Image')
                ->directory('photos')
                ->columnSpanFull()
                   ,
                Forms\Components\TextInput::make('titre')
                ->live(debounce: 500) // Optional: debounce for better performance while typing
                ->afterStateUpdated(fn ($state, $set) => $set('slug', Str::slug($state))) // Automatically generate slug
                
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('slug')
                 ->unique(ignoreRecord: true) 
                    ->required()
                    ->maxLength(255),
                Forms\Components\RichEditor::make('content')
                    ->required()
                    ->columnSpanFull(),
                
                Forms\Components\FileUpload::make('images')
                ->label('Gallery Images')
                ->image()
                ->multiple()
                ->directory('photos')
                    ->columnSpanFull(),
                Forms\Components\DatePicker::make('date')->format('d M Y')
                   ,
                Forms\Components\Toggle::make('published')
                    ->required(),
                Forms\Components\Select::make('jamat_id')
                ->relationship('jamat', 'titre')
                ->preload()
                ->label('Jamats'),
                    
                Forms\Components\Select::make('department_id')
                ->relationship('department', 'titre')
                ->preload()
                ->label('Department'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('titre')
                    ->searchable(),
                Tables\Columns\TextColumn::make('slug')
                    ->searchable(),
                Tables\Columns\ImageColumn::make('featured_img')
                    ->searchable(),
                Tables\Columns\TextColumn::make('date')
                    ->searchable(),
                Tables\Columns\IconColumn::make('published')
                    ->boolean(),
                Tables\Columns\TextColumn::make('jamat.titre')->sortable()->label('Jamat'),
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
            'index' => Pages\ListActualites::route('/'),
            'create' => Pages\CreateActualite::route('/create'),
            'edit' => Pages\EditActualite::route('/{record}/edit'),
        ];
    }
}
