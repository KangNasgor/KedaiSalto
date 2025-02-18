<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use App\Models\User;
use Illuminate\Database\Eloquent\SoftDeletes;
use Filament\Support\Contracts\HasLabel;

class Product extends Model
{
    use SoftDeletes;
    public function order_item(){
        return $this->belongsTo(Order_item::class, 'product_id', 'id');
    }
}
