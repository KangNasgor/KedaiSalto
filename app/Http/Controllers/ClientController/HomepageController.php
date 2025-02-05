<?php

namespace App\Http\Controllers\ClientController;
use Auth;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class HomepageController extends Controller{
    public function index(){
        return Inertia::render('homepage');
    }
}