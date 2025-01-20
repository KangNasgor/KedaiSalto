<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use App\Models\User;

class Product extends Model
{
    public function user(): HasOne{
        return $this->hasOne(User::class);
    }
}
