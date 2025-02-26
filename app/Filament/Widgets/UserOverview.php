<?php

namespace App\Filament\Widgets;

use App\Models\Order;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use App\Models\User;

class UserOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total User', User::count()),
            Stat::make('Sales Report', function(){
                $order = Order::where('paid', 'True')->get();
                $sales = 0;
                foreach($order as $item){
                    $sales += $item->discountedPrice ? $item->discountedPrice : $item->price;
                }

                return 'Rp' . $sales;
            }),
        ];
    }
}
