<?php

namespace App\Http\Controllers\ClientController;

use App\Models\Order_item;
use App\Models\Payment_proof;
use Inertia\Inertia;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function index(){
        if(Auth::guard('user')->check()){
            $order = Order::with('user', 'promo_code')->where('user_id', Auth::guard('user')->user()->getAuthIdentifier())->get();
            if($order){
                $orderItem = Order_item::with('product')->whereIn('order_id', $order->pluck('id'))->get();
                $proof = Payment_proof::with('order')->whereIn('order_id', $order->pluck('id'))->get();
                return Inertia::render('order', compact('order', 'orderItem', 'proof'));
            }
            return Inertia::render('order');
        }
        return Inertia::render('order');
    }
}
