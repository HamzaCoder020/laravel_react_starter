<?php

namespace App\Http\Controllers;


use App\Models\Employee;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function get_employee(Request $request)
    {
        $resource['employee_list'] = Employee::where([
            'status'=>1,
            'page'=>$request->page
        ])->get();
        return json_encode($resource);
    }
}
