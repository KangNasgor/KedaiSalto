<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ClientController\CartController;
use App\Http\Controllers\ClientController\ProductController;

Route::middleware(['web'])->get('/user/login/check', function(){
    if(Auth::guard('user')->check()){
        return response()->json([
            'loggedIn' => true,
            'user' => Auth::guard('user')->user(),
        ]);
    }
    else{
        return response()->json([
            'loggedIn' => false,
        ]);
    }
});

Route::get('/user/product/search/{query}',  [ProductController::class, 'searchProduct']);

Route::post('/user/cart/store', [CartController::class, 'storeCart']);
Route::post('/user/order', [CartController::class, 'order']);
Route::put('/user/cart/update', [CartController::class, 'updateQuantity']);
Route::post('/user/cart/checkout', [CartController::class, 'checkout']);
