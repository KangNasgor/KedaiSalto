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
            Stat::make('Stock Dimsum', Product::where('name', 'Dimsum')->value('stock')),
            Stat::make('Stock Mashed Potato', Product::where('name', 'Mashed Potato')->value('stock')),
            Stat::make('Stock Es Lumut', Product::where('name', 'Es Lumut')->value('stock')),
        ];
    }
}
