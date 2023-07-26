<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class EnsureLogin
{
    public function handle($request, Closure $next)
    {
//        if (Auth::user() === NULL) {
//            return redirect('admin/login');
//        }

        return $next($request);
    }

}
