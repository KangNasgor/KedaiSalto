<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index(){
        return Inertia::render('login');
    }
    public function login(Request $req){
        $user = User::where('email', $req->input('email'))->first();
        if(!$user){
            return redirect()->route('login')->with('message', 'Akun tidak ditemukan.');
        }
        else{
            if(Auth::guard('user')->attempt(['email' => $req->input('email'), 'password' => $req->input('password')])){
                Auth::login($user);
                return redirect()->route('homepage');
            }
            else{
                return redirect()->route('login')->with('message', 'Invalid Credentials');
            }
        }
    }
}
