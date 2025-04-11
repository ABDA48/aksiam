<?php

namespace App\Filament\Resources\PartenairResource\Pages;

use App\Filament\Resources\PartenairResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPartenairs extends ListRecords
{
    protected static string $resource = PartenairResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
