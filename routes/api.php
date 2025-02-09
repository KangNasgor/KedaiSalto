<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['web','auth:user'])->get('/test', function(Request $req){
    return response()->json(['loggedIn' => Auth::guard('user')->check()]);
});
