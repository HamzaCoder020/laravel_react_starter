<div class="card mb-4" id="employee_form_view" style="display: none">
    <div class="card-header">
        Employee Form
    </div>
    <div class="card-body">
        <div class="col">
            <form class="row g-3 needs-validation user" id="employee_form" action="javascript:save_employee();">
                @csrf
                @if(isset($employee))
                    <input type="hidden" name="id" value="{{$employee->employee_id}}">
                @endif
                <div class="col-md-6">
                    <label for="validationCustom01" class="form-label">Page</label>
                    <select name="page" class="form-control form-control-user p-0">
                        <option value="" selected disabled>Please Select</option>
                        <option {{isset($employee) ? ($employee->page=='PHP' ? 'selected' : '' ) : ''}}>PHP</option>
                        <option {{isset($employee) ? ($employee->page=='ReactJS' ? 'selected' : '' ) : ''}}>ReactJS</option>
                        <option {{isset($employee) ? ($employee->page=='UI/UX' ? 'selected' : '' ) : ''}}>UI/UX</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom01" class="form-label">Full Name</label>
                    <input type="text" class="form-control form-control-user" name="full_name" placeholder="Full Name" value="{{isset($employee) ? $employee->full_name: ''}}" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom02" class="form-label">Position</label>
                    <input type="text" class="form-control form-control-user" name="position" value="{{isset($employee) ? $employee->position: ''}}" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-12">
                    <label for="validationCustom03" class="form-label">Employee Image</label>
                    <input type="file" class="form-control form-control-user" name="image" {{isset($employee) ? '' : 'required'}}>
                    <div class="invalid-feedback">
                        Please provide a valid file.
                    </div>
                </div>

                <div class="col-md-12">
                    <label for="validationCustom05" class="form-label">Description</label>
                    <textarea type="text" class="form-control" name="description"  rows="8" required>{{isset($employee) ? $employee->description: ''}}</textarea>
                    <div class="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary btn-user btn-block" style="width: 50%; margin: 25px auto;" type="submit">Submit Info</button>
                </div>
            </form>
        </div>
    </div>
</div>
