<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>{{$title}}</title>
    <!-- Custom fonts for this template-->
    <link rel="icon" type="image/x-icon" href="https://atlantisbpo.com/public/assets/images/symbol - 1.svg">
    <link href="{{asset('public/assets/admin/vendor/fontawesome-free/css/all.min.css')}}" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
    <!-- Custom styles for this template-->
    <link href="{{asset('public/assets/admin/css/sb-admin-2.min.css')}}" rel="stylesheet">
    @yield("header_scripts")
</head>

<body id="page-top">

<!-- Page Wrapper -->
<div id="wrapper">
    @include('admin.template.partials.sidebar')
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
           @include('admin.template.partials.header')
            <!-- Begin Page Content -->
            <div class="container-fluid">
                <!-- Page Heading -->
                @yield("content")
            </div>
            <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->
        @include('admin.template.partials.footer')
    </div>
    <!-- End of Content Wrapper -->
</div>
<!-- End of Page Wrapper -->

<!-- Scroll to Top Button-->
<a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
</a>

<!-- Bootstrap core JavaScript-->
<script src="{{asset('public/assets/admin/vendor/jquery/jquery.min.js')}}"></script>
<script src="{{asset('public/assets/admin/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
<!-- Core plugin JavaScript-->
<script src="{{asset('public/assets/admin/vendor/jquery-easing/jquery.easing.min.js')}}"></script>
<!-- Custom scripts for all pages-->
<script src="{{asset('public/assets/admin/js/sb-admin-2.min.js')}}"></script>
<script src="{{asset('public/assets/js/sweetalert.min.js')}}"></script>
<script src="{{asset('public/assets/js/ajax.js')}}"></script>
@yield("footer_scripts")

</body>

</html>
