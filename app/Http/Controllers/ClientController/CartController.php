<?php

namespace App\Http\Controllers\ClientController;

use App\Models\Cart;
use Inertia\Inertia;
use App\Models\Cart_item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function index()
    {
        if(Auth::guard('user')->check()){
            $cart = Cart::where('user_id', Auth::guard('user')->user()->getAuthIdentifier())->first();
            if($cart){
                $cartItems = Cart_item::with('product')->where('cart_id', $cart->id)->get();
    
                return Inertia::render('cart', compact('cartItems'));
            }
        }
        else{
            return Inertia::render('cart');
        }
    }
    public function storeCart(Request $req){
        $data = $req->validate([
            'user_id' => 'required|integer',
            'product_id' => 'required|integer',
            'quantity' => 'required|integer'
        ]);
        $cart = Cart::firstOrCreate(['user_id' => $data['user_id']], [
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $cartItem = Cart_item::updateOrCreate(
            [
                'product_id' => $data['product_id'],
                'cart_id' => $cart->id,
            ],
            [
                'quantity' => DB::raw('quantity +' . $data['quantity']),
                'updated_at' => now(),
            ]
        );
        $cartItem->save();

        return response()->json([
            'data' => $data
        ], 200);
    }

    public function updateQuantity(Request $req){
        $data = $req->validate([
            'quantities' => 'required|array'
        ]);
        
        foreach($data['quantities'] as $item_id => $quantity){
            $item = Cart_item::find($item_id);
            if($item){
                if($quantity > 0){
                    $item->update([
                        'quantity' => $quantity,
                    ]);
                }
                else{
                    $item->delete();
                }
            }
        }

        return response()->json(['message' => 'Data received']);
    }

    public function checkout(Request $req){

    }
}
