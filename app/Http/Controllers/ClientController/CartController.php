<?php

namespace App\Http\Controllers\ClientController;

use App\Models\Cart;
use App\Models\Order;
use App\Models\Promo_code;
use Inertia\Inertia;
use App\Models\Cart_item;
use App\Models\Order_item;
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
            else{
                $cartItems = [];
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
                'updated_at' => now(),
            ]
        );
        $cartItem->increment('quantity', $data['quantity']);
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
        $data = $req->validate([
            'products' => 'required|array',
            'user_id' => 'required|integer',
            'price' => 'required|integer',
            'promo_code' => 'nullable|string',
        ]);
        $cart = Cart::where('user_id', $data['user_id'])->first();

        $price = $data['price'];

        if(!empty($data['promo_code'])){
            $promo = Promo_code::where('code', $data['promo_code'])->first();
            if($promo){
                $discount = $promo->discount / 100;
                $price -= $price * $discount;
            }
        }

        $order = Order::create([
            'user_id' => $data['user_id'],
            'price' => $price,
            'created_at' => now(),
        ]);

        foreach($data['products'] as $product){
            Order_item::create([
                'order_id' => $order->id,
                'product_id' => $product['product_id'],
                'quantity' => $product['quantity'],
                'user_id' => $data['user_id'],
                'created_at' => now(),
            ]);
        }

        if($cart){
            Cart_item::where('cart_id', $cart->id)->delete();
            $cart->delete();
        }

        return response()->json([
            'message' => $data
        ], 200);
    }
}
