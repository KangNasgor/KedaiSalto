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
        $data = $req->validate([
            'email' => 'email|required',
            'password' => 'min:8|required',
            'notelp' => 'required',
            'address' => 'required',
            'name' => 'string|required'
        ]);
        if(User::where('email', $data['email'])->where('id', '!=', $data['id'])->first()){
            return response()->json([
                'message' => 'Email yang anda gunakan sudah terhubung pada akun lain.'
            ]);
        }

        if(User::where('notelp', $data['notelp'])->where('id', '!=', $data['id'])->first()){
            return response()->json([
                'message' => 'Nomor telepon yang anda gunakan sudah terhubung pada akun lain.'
            ]);
        }
        User::create([
            'email' => $data['email'],
            'name' => $data['name'],
            'notelp' => $data['notelp'],
            'address' => $data['address'],
            'password' => Hash::make($data['password']),
        ]);
        return redirect()->route('login');
    }
}