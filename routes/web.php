<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\TransactionController;
use App\Models\Rice;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        $stocks = Rice::all();

        return Inertia::render('Dashboard', [
            'stocks' => $stocks
        ]);
    })->name('dashboard');

    Route::get('/notification', function () {
        return Inertia::render('Notification');
    })->name('notification');

    Route::resource('stock', StockController::class);
    Route::resource('transactions', TransactionController::class);
    Route::patch('/stock/{stock}/release', [StockController::class, 'releaseStock'])->name('stock.release');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
