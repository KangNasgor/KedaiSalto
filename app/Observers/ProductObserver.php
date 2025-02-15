<?php

namespace App\Observers;

use Illuminate\Support\Facades\Storage;
use App\Models\Product;

class ProductObserver
{
    /**
     * Handle the Product "created" event.
     */
    public function created(Product $Product): void
    {
        //
    }
    public function saved(Product $product): void{
        if($product->isDirty('image')){
            $oldImage = $product->getOriginal('image'); 
            if($oldImage !== null){
                Storage::disk('public')->delete($product->getOriginal('image'));
            }
        }
    }
    /**
     * Handle the Product "updated" event.
     */
    public function updated(Product $Product): void
    {
        //
    }

    /**
     * Handle the Product "deleted" event.
     */
    public function deleted(Product $product): void
    {
        if($product->image !== null && Storage::disk('public')->exists($product->image)){
            Storage::disk('public')->delete($product->image);
        }
    }

    /**
     * Handle the Product "restored" event.
     */
    public function restored(Product $Product): void
    {
        //
    }

    /**
     * Handle the Product "force deleted" event.
     */
    public function forceDeleted(Product $Product): void
    {
        //
    }
}
