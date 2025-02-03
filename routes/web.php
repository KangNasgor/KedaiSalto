<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Controller import
use App\Http\Controllers\LoginController;

// Front End
Route::get('/', function () {
    return Inertia::render('homepage');
});
Route::get('/account', function(){
    return Inertia::render('account');
});
Route::get('/user/register', function(){
    return Inertia::render('register');
});
Route::get('/user/login', [LoginController::class, 'loginView']);

// Back End