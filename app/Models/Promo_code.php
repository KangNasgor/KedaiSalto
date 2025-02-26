<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Promo_code extends Model
{
    public function order(){
        return $this->hasMany(Promo_code::class, 'promo_code_id', 'id');
    }
}
