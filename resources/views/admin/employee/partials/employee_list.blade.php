<div id="employee_list_view" class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary float-left">Employees List</h6>
        <button onclick="toggle_employee_form(true)" type="button" class="btn btn-primary float-right">Add Employee</button>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                <tr>
                    <th>Page</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Skills</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                @foreach($employee_list as $employee)
                    <tr>
                        <td>{{$employee->page}}</td>
                        <td>{{$employee->full_name}}</td>
                        <td>{{$employee->position}}</td>
                        <td>{{$employee->description}}</td>
                        <td><img height="100" width="100" class="img-thumbnail" src="{{asset('public/employee_images/'.$employee->image)}}" alt="image"></td>
                        <td>
                            <button type="button" title="Delete" onclick="delete_employee({{$employee->employee_id}})" class="btn btn-danger btn-circle">
                                <i class="fas fa-trash"></i>
                            </button>
                            <button type="button" title="Edit" onclick="edit_employee({{$employee->employee_id}})" class="btn btn-info btn-circle">
                                <i class="fas fa-edit"></i>
                            </button>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>

