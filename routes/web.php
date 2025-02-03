<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('homepage');
});
Route::get('/account', function(){
    return Inertia::render('account');
});
