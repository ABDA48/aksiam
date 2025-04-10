<?php

namespace App\Filament\Resources\StafdepartementResource\Pages;

use App\Filament\Resources\StafdepartementResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListStafdepartements extends ListRecords
{
    protected static string $resource = StafdepartementResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
