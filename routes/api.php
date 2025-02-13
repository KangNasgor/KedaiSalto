<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['web'])->get('/user/login/check', function(Request $req){
    if(Auth::guard('user')->check()){
        return response()->json(['loggedIn' => Auth::guard('user')->check()]);
    }
    else{
        return response()->json(['loggedIn' => false]);
    }
});
