<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use Flowframe\Trend\Trend;
use Flowframe\Trend\TrendValue;
use App\Models\Product;

class ProductChart extends ChartWidget
{
    protected static ?string $heading = 'Chart';

    protected function getData(): array
    {
        $data = Trend::model(Product::class)->between(
            start: now()->subYear(),
            end: now(),
        )->perMonth()->count();

        return [
            'datasets' => [
                [
                    'label' => 'Products',
                    'data' => $data->map(fn (TrendValue $value) => $value->aggregate),
                ]
                ],
                'labels' => $data->map(fn (TrendValue $value) => $value->date),
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
