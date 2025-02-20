<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Session\DatabaseSessionHandler;

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
                    return response()->json([
                        'user' => $user
                    ], 200);
            }
            return response()->json([
                'message' => 'Kredensial salah'
            ], 401);
        }
    }
}
