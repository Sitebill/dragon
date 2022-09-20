@extends('layouts.app', ['title' => 'Entity'])

@section('content')
    <link rel="stylesheet" href="{{Sitebill\Dragon\app\Helpers\UI::get_angular_file('styles')}}">


    <link rel="stylesheet" href="styles.d75b48ce90c4aeb7bcf5.css">
    <app-root></app-root>
    <script src="{{Sitebill\Dragon\app\Helpers\UI::get_angular_file('runtime')}}" defer></script>
    <script src="{{Sitebill\Dragon\app\Helpers\UI::get_angular_file('polyfills')}}" defer></script>
    <script src="{{Sitebill\Dragon\app\Helpers\UI::get_angular_file('main')}}" defer></script>

    sitebill.dragon.entity
@endsection
