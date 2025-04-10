<?php

namespace App\Filament\Resources\JamatsResource\Pages;

use App\Filament\Resources\JamatsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditJamats extends EditRecord
{
    protected static string $resource = JamatsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
