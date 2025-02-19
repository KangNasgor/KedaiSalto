<?php

namespace App\Http\Controllers\ClientController;

use App\Http\Controllers\Controller;
use App\Models\Payment_proof;
use Illuminate\Http\Request;

class PaymentProofController extends Controller
{
    public function store(Request $req){
        $req->validate([
            'image' => 'file|required',
            'user_id' => 'string|required',
            'order_id' => 'integer|required',
        ]);

        $image = $req->file('image')->storeAs('proof/' . $req['order_id'] . '/' . $req['user_id'], $req['user_id'] . '.jpg', 'public');
        
        Payment_proof::create([
            'image' => $image,
            'order_id' => $req['order_id'],
            'created_at' => now(),
        ]);

        return response()->json([
            'message' => 'Success',
            'image' => $image
        ],200);
    }
}
