<?php

namespace App\Http\Controllers\ClientController;
use Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;


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
    public function editAccount(Request $req){
        $data = $req->validate([
            'id' => 'integer|required',
            'nama' => 'string|required',
            'email' => 'email|string|required',
            'notelp' => 'string|required',
            'password' => 'string|required',
        ]);

        $user = User::where('id', $data['id'])->first();

        if(User::where('email', $data['email'])->where('id', '!=', $data['id'])->first()){
            return response()->json([
                'message' => 'Email yang anda gunakan sudah terhubung pada akun lain.'
            ], 409);
        }

        if(User::where('notelp', $data['notelp'])->where('id', '!=', $data['id'])->first()){
            return response()->json([
                'message' => 'Nomor telepon yang anda gunakan sudah terhubung pada akun lain.'
            ], 409);
        }
        
        $user->update([
            'name' => $data['nama'],
            'address' => $req['address'] ?? null,
            'email' => $data['email'],
            'notelp' => $data['notelp'],
            'password' => Hash::make($data['password']),
        ]);

        $user->save();
        
        return response()->json([
            'message' => 'Success',
            'user' => $user
        ], 200);
    }
}
