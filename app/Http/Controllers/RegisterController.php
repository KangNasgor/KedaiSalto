<?php

namespace App\Http\Controllers;

use Hash;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class RegisterController extends Controller
{
    public function index(){
        return Inertia::render('register');
    }
    public function register(Request $req){
        User::create([
            'email' => $req->input('email'),
            'name' => $req->input('name'),
            'notelp' => $req->input('notelp'),
            'password' => Hash::make($req->input('password')),
        ]);
        return redirect()->route('login');

    }
}