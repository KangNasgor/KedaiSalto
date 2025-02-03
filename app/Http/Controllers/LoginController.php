<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function loginView(){
        return Inertia::render('login');
    }
}
