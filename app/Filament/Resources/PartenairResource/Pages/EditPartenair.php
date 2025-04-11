<?php

namespace App\Filament\Resources\PartenairResource\Pages;

use App\Filament\Resources\PartenairResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPartenair extends EditRecord
{
    protected static string $resource = PartenairResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
