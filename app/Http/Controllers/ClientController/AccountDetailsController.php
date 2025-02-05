<?php

namespace App\Http\Controllers\ClientController;
use Auth;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class AccountDetailsController extends Controller{
    public function accountView(){
        if(Auth::guard('user')->check()){
            $user = Auth::guard('user')->user();
            return Inertia::render('account', compact('user'));
        }
        else{
            return Inertia::render('guestaccount');
        }
    }
}
