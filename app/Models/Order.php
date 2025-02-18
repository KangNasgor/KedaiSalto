<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use SoftDeletes;

    public function user(){
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    public function order_item(){
        return $this->belongsTo(Order_item::class, 'order_id', 'id');
    }
}
