<?php

namespace App\Http\Controllers\ClientController;

use Inertia\Inertia;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function index(){
        $order = Order::where('user_id', Auth::guard('user')->user()->getAuthIdentifier())->first();
        return Inertia::render('order', compact('order'));
    }
}
