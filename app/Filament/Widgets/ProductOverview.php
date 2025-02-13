<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use App\Models\Product;

class ProductOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Stock Dumpling', Product::where('name', 'Dumpling')->value('stock')),
            Stat::make('Stock Es Lumut', Product::where('name', 'Es Lumut')->value('stock')),
        ];
    }
}
