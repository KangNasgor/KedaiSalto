<?php

use Illuminate\Support\Facades\Route;

// Controller import
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ClientController\AccountDetailsController;
use App\Http\Controllers\ClientController\ProductController;
use App\Http\Controllers\ClientController\HomepageController;
use App\Http\Controllers\RegisterController;

// Front End
Route::get('/', [HomepageController::class, 'index'])->name('homepage');
Route::get('/user/account', [AccountDetailsController::class, 'accountView']);
Route::get('/user/register', [RegisterController::class, 'index'])->name('register');
Route::post('/user/register/store', [RegisterController::class, 'register']);
Route::get('/user/product', [ProductController::class, 'productView']);

Route::controller(LoginController::class)->group(function(){
    Route::get('/user/login',  'index')->name('login');
    Route::post('/user/login/store', 'login');
});
// Back End