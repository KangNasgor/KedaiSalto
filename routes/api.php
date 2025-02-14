<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController\ProductController;

Route::middleware(['web'])->get('/user/login/check', function(Request $req){
    if(Auth::guard('user')->check()){
        return response()->json(['loggedIn' => Auth::guard('user')->check()]);
    }
    else{
        return response()->json(['loggedIn' => false]);
    }
});

Route::get('/user/product/search/{query}',  [ProductController::class, 'searchProduct']);
