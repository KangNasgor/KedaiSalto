<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Payment_proof extends Model
{
    use SoftDeletes;

    public function order(){
        return $this->belongsTo(Order::class, 'order_id', 'id');
    }
}
