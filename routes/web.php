<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Controller import
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ClientController\AccountDetailsController;
use App\Http\Controllers\ClientController\ProductController;
use App\Http\Controllers\ClientController\HomepageController;

// Front End
Route::get('/', [HomepageController::class, 'index'])->name('homepage');
Route::get('/user/account', [AccountDetailsController::class, 'accountView']);
Route::get('/user/register', function(){
    return Inertia::render('register');
});
Route::get('/user/login', [LoginController::class, 'loginView']);
Route::get('/user/product', [ProductController::class, 'productView']);

// Back End