<?php

namespace App\Http\Controllers\ClientController;
use Auth;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class AccountDetailsController extends Controller{
    public function accountView(){
        if(Auth::check()){
            return Inertia::render('account');
        }
        else{
            return Inertia::render('guestaccount');
        }
    }
}
