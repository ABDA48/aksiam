<?php

namespace App\Filament\Resources\CleResource\Pages;

use App\Filament\Resources\CleResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListCles extends ListRecords
{
    protected static string $resource = CleResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
