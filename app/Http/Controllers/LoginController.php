<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index(){
        return Inertia::render('login');
    }
    public function login(Request $req, Response $res){
        $user = User::where('email', $req->input('email'))->first();
        $statusCode = $res->getStatusCode();
        if(!$user){
            return redirect()->route('login')->with('message', 'Akun tidak ditemukan.');
        }
        else{
            if(Auth::guard('user')->attempt(['email' => $req->input('email'), 'password' => $req->input('password')])){
                $isLoggedIn = Auth::guard('user')->check() ? true : false;
                if($statusCode === 200){
                    return redirect()->route('homepage', compact('isLoggedIn'));
                }
                else{
                    return redirect()->route('login');
                }
            }
            else{
                return redirect()->route('login')->with('message', 'Invalid Credentials');
            }
        }
    }
}
