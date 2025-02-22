<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Cart_item;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function index()
    {
        return Inertia::render('login');
    }
    public function login(Request $req)
    {
        $user = User::where('email', $req->input('email'))->first();
        if (!$user) {
            return redirect()->route('login')->with('message', 'Akun tidak ditemukan.');
        } else {
            $data = Cache::get('guest_cart_data');
            if (Auth::guard('user')->attempt(['email' => $req->input('email'), 'password' => $req->input('password')])) {
                if (!empty($data)) {
                    $user = Auth::guard('user')->user();
                    $cart = Cart::firstOrCreate([
                        'user_id' => $user['id'],
                    ], [
                        'created_at' => now(),
                    ]);
                    $cartItem = Cart_item::updateOrCreate([
                        'product_id' => $data['product_id'],
                        'cart_id' => $cart->id,
                        'quantity' => $data['quantity'],
                    ], [
                        'created_at' => now(),
                    ]);
                    $cartItem->save();
                    Cache::delete('guest_cart_data');
                    return response()->json([
                        'session_data' => $data,
                        'redirect_url' => url('/user/cart'),
                    ]);
                }
                return response()->json([
                    'session_data' => session('guestCartData'),
                ], 200);
            }
            return response()->json([
                'message' => 'Kredensial salah',
            ], 401);
        }
    }
}
