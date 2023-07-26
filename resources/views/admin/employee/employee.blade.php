@extends('admin.template.layout')
@section('header_scripts')
    <link href="{{asset('public/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css')}}" rel="stylesheet">
@endsection
@section('content')
    <div class="row">
        <div class="col-12" id="employee_form_ajax_view">
            <!-- Employee Form -->
            @include('admin.employee.partials.employee_form')
        </div>
        <div class="col-12">
            <!-- Employee List -->
            @include('admin.employee.partials.employee_list')
        </div>
    </div>
    <script>
        function toggle_employee_form(show){
            if(show){
                $('#employee_list_view').fadeOut("fast", function () {
                    $('#employee_form_view').fadeIn("slow")
                })
            } else {
                $('#employee_form_view').fadeOut("fast", function () {
                    $('#employee_list_view').fadeIn("slow")
                })
            }
        }
        function delete_employee(id) {
            swal({
                title: "Are you sure?",
                text: "Do you really want to delete this record? You will not be able to recover this.",
                icon: "warning",
                confirmButtonColor: "#DD6B55",
                buttons: [
                    'No, cancel it!',
                    'Yes, I am sure!'
                ],
                dangerMode: true,
            }).then(function(isConfirm) {
                if (isConfirm) {
                    let data = new FormData();
                    data.append('_token', '{{csrf_token()}}');
                    data.append('id', id);
                    let a = function () {
                        window.location.reload();
                    };
                    let arr = [a];
                    call_ajax_with_functions('', '{{route('delete_employee')}}', data, arr);
                }
            })
        }
        function edit_employee(id) {
            let data = new FormData();
            data.append('_token', '{{csrf_token()}}');
            data.append('id', id);
            let a = function () {
                toggle_employee_form(true);
            };
            let arr = [a];
            call_ajax_with_functions('employee_form_ajax_view', '{{route('get_employee')}}', data, arr);
        }
        function save_employee() {
            let data = new FormData($('#employee_form')[0]);
            let a = function () {
                window.location.reload();
            };
            let arr = [a];
            call_ajax_with_functions('', '{{route('save_employee')}}', data, arr);
        }
    </script>
@endsection
@section('footer_scripts')
    <script src="{{asset('public/assets/admin/vendor/datatables/jquery.dataTables.min.js')}}"></script>
    <script src="{{asset('public/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js')}}"></script>
    <script>
        $(document).ready(function() {
            $('#dataTable').DataTable();
        });
    </script>
@endsection
