<?php

namespace App\Filament\Resources\CimitiereResource\Pages;

use App\Filament\Resources\CimitiereResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListCimitieres extends ListRecords
{
    protected static string $resource = CimitiereResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
