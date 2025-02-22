<?php

namespace App\Providers;

use App\Models\Product;
use App\Observers\ProductObserver;
use Filament\Notifications\Livewire\DatabaseNotifications;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Model::unguard();
        Product::observe(ProductObserver::class);
    }
}
