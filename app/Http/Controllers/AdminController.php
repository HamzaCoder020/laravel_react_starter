<?php

namespace App\Http\Controllers;


use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class AdminController extends Controller
{
    public function login()
    {
       // echo "login page";
        return view("admin/login");
    }

    public function employees()
    {
        $data['title'] = 'Atlantis Tech - Employees';
        $data['page_title'] = 'Employees List';
        $data['employee_list'] = Employee::where('status',1)->get();
        return view("admin.employee.employee", $data);
    }

    public function get_employee(Request $request)
    {
        $data['employee'] = Employee::where('employee_id',$request->id)->first();
        return view("admin.employee.partials.employee_form", $data);
    }

    public function delete_employee(Request $request)
    {
        Employee::where('employee_id',$request->id)->update([
            'status'=>0,
        ]);
        $response['status'] = "Success";
        $response['result'] = "Deleted";
        return response()->json($response);
    }


    public function save_employee(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'full_name' => 'required',
            'page' => 'required',
            'position' => 'required',
            'image' => 'required',
            'description' => 'required',
        ]);
        if ($validator->passes()) {
            $data = array(
                'full_name' => $request->full_name,
                'page' => $request->page,
                'position' => $request->position,
                'description' => $request->description,
            );
            if($request->file('image')) {
                $file = $request->file('image');
                $user_image = time() . rand(1, 100) . '.' . $file->extension();
                $file->move(public_path('employee_images'), $user_image);
                $data['image'] = $user_image;
            }
            if(isset($request->id)){
                Employee::where('employee_id',$request->id)->update($data);
            } else {
                Employee::create($data);
            }
            $response['status'] = "Success";
            $response['result'] = "Added Successfully";
        } else {
            $response['status'] = "Failure!";
            $response['result'] = $validator->errors()->toJson();
        }
        return response()->json($response);
    }
}
