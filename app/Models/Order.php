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
        return $this->hasMany(Order_item::class, 'order_id', 'id');
    }
    public function promo_code(){
        return $this->belongsTo(Promo_code::class, 'promo_code_id', 'id');
    }
    public function payment_proof(){
        return $this->hasOne(Payment_proof::class, 'payment_proof_id', 'id');
    }
}
