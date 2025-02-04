<?php

namespace App\Http\Controllers\ClientController;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class ProductController extends Controller{
    public function productView(){
        return Inertia::render('product');
    }
}