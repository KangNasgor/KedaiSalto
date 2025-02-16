<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    public function order(Request $req){
        $data = $req->validate([
            'product_id' => 'required|integer',
            'user_id' => 'required|integer',
            'quantity' => 'required|integer|min:1'
        ]);


        return response()->json([
            'message' => 'Product order received!',
            'data' => $data
        ]);
    }
}
