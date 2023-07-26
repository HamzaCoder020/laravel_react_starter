<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="https://atlantisbpo.com/public/assets/images/symbol - 1.svg">
    <title>Atlantis Tech</title>
        {{--<link rel="stylesheet" href="public/build/assets/app-2cdf4e02.css">
        <link rel="stylesheet" href="public/build/assets/app-e40c0c45.css">--}}
    @vite(['resources/css/app.css'])
    @vite(['resources/css/queries.css'])
</head>

<body class="antialiased">
<div class="" id="app"></div>

@viteReactRefresh
@vite(['resources/js/app.jsx'])
{{--
<script type="module" src="public/build/assets/app-2e57fb87.js"></script>
--}}
</body>
</html>
