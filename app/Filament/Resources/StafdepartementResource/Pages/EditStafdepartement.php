<?php

namespace App\Filament\Resources\StafdepartementResource\Pages;

use App\Filament\Resources\StafdepartementResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditStafdepartement extends EditRecord
{
    protected static string $resource = StafdepartementResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
