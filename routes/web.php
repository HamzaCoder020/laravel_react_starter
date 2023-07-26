<?php

use App\Http\Middleware\EnsureLogin;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::group(['prefix'=>'admin'], function(){
    Route::get('/login', [App\Http\Controllers\UserController::class,'index'])->name('login');
    Route::post('/do_login', [App\Http\Controllers\UserController::class,'login'])->name('do_login');
    Route::middleware(EnsureLogin::class)->group(function () {
        Route::get('/employee', [App\Http\Controllers\AdminController::class, 'employees'])->name('employee');
        Route::post('/save_employee', [App\Http\Controllers\AdminController::class, 'save_employee'])->name('save_employee');
        Route::post('/get_employee', [App\Http\Controllers\AdminController::class, 'get_employee'])->name('get_employee');
        Route::post('/delete_employee', [App\Http\Controllers\AdminController::class, 'delete_employee'])->name('delete_employee');
    });
});


Route::view('/{path?}', 'react_base')
    ->where('path', '.*');

