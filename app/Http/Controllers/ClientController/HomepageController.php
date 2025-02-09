<?php

namespace App\Http\Controllers\ClientController;
use Auth;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomepageController extends Controller{
    public function index(Request $req){
        return Inertia::render('homepage');
    }
}