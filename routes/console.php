<?php

use App\Models\Payment_proof;
use Illuminate\Support\Facades\Schedule;
use Illuminate\Foundation\Inspiring;
use Carbon\Carbon;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

Schedule::call(function() {
    $oldImages = Payment_proof::where('created_at', '<', Carbon::now()->subDays(7))->get();

    foreach($oldImages as $img){
        if($img->image && Storage::exists($img->image)){
            Storage::delete($img->image);
        }
        $img->delete();
    }
})->daily();
