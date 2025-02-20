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
        if(User::where('email', $req['email'])->where('id', '!=', $req['id'])->first()){
            return response()->json([
                'message' => 'Email yang anda gunakan sudah terhubung pada akun lain.'
            ]);
        }

        if(User::where('notelp', $req['notelp'])->where('id', '!=', $req['id'])->first()){
            return response()->json([
                'message' => 'Nomor telepon yang anda gunakan sudah terhubung pada akun lain.'
            ]);
        }
        User::create([
            'email' => $req->input('email'),
            'name' => $req->input('name'),
            'notelp' => $req->input('notelp'),
            'password' => Hash::make($req->input('password')),
        ]);
        return redirect()->route('login');

    }
}