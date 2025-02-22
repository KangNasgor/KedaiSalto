<?php

use Illuminate\Support\Facades\Route;

// Controller import
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ClientController\AccountDetailsController;
use App\Http\Controllers\ClientController\ProductController;
use App\Http\Controllers\ClientController\HomepageController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ClientController\CartController;
use App\Http\Controllers\ClientController\OrderController;
use App\Http\Controllers\ClientController\PaymentProofController;

// Front End
Route::get('/', [HomepageController::class, 'index'])->name('homepage');
Route::get('/user/account', [AccountDetailsController::class, 'accountView']);
Route::get('/user/register', [RegisterController::class, 'index'])->name('register');
Route::post('/user/register/store', [RegisterController::class, 'register']);
Route::get('/user/logout', function(){
    Auth::guard('user')->logout();
    return redirect()->route('login');
});
Route::controller(LoginController::class)->group(function(){
    Route::get('/user/login',  'index')->name('login');
    Route::post('/user/login/store', 'login');
});
Route::controller(ProductController::class)->group(function(){
    Route::get('/user/product',  'productView');
});

Route::controller(CartController::class)->group(function(){
    Route::get('/user/cart', 'index')->name('user-cart');
});

Route::get('/user/order', [OrderController::class, 'index']);

Route::post('/user/payment/store', [PaymentProofController::class, 'store']);

Route::put('/user/account/edit', [AccountDetailsController::class, 'editAccount']);

