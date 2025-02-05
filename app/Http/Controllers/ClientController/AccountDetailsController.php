<?php

namespace App\Http\Controllers\ClientController;
use Auth;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class AccountDetailsController extends Controller{
    public function accountView(){
        if(Auth::check()){
            $user = Auth::user();
            return Inertia::render('account', compact('user'));
        }
        else{
            return Inertia::render('guestaccount');
        }
    }
}
