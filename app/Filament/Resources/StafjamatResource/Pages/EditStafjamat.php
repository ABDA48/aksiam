<?php

namespace App\Filament\Resources\StafjamatResource\Pages;

use App\Filament\Resources\StafjamatResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditStafjamat extends EditRecord
{
    protected static string $resource = StafjamatResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
