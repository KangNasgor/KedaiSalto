<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    public function cart_item(){
        return $this->hasMany(Cart_item::class, 'cart_id', 'id');
    }
}
