<?php

namespace App\Filament\Resources\OrderResource\Pages;

use App\Models\Order;
use Filament\Actions;
use Filament\Facades\Filament;
use Filament\Notifications\Notification;
use App\Filament\Resources\OrderResource;
use Filament\Resources\Pages\ListRecords;

class ListOrders extends ListRecords
{
    protected static string $resource = OrderResource::class;

    protected function getHeaderActions(): array
    {
        return [
            
        ];
    }
}
