<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cart_item extends Model
{
    protected $table = 'cart_items';
    public function cart(){
        return $this->belongsTo(Cart::class, 'cart_id', 'id');
    }
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
