<?php

namespace App\Filament\Resources\StafjamatResource\Pages;

use App\Filament\Resources\StafjamatResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListStafjamats extends ListRecords
{
    protected static string $resource = StafjamatResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
