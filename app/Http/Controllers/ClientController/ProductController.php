<?php

namespace App\Http\Controllers\ClientController;
use App\Models\Product;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller{
    public function productView(){
        $makanan = Product::where('type', 'Food')->get();
        $minuman = Product::where('type', 'Drink')->get();
        return Inertia::render('product', compact('makanan', 'minuman'));
    }
    public function searchProduct($query){
        $productFood = Product::where('name', 'like', '%' . $query . '%')->get();
        return response()->json($productFood);
    }
}
