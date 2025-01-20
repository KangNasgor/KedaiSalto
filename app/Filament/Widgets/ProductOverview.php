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
            Stat::make('Total Food', Product::query()->where('type', 'food')->count()),
            Stat::make('Total Drink', Product::query()->where('type', 'drink')->count()),
        ];
    }
}
