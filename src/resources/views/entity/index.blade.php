@extends('layouts.app', ['title' => 'Entity'])

@section('content')
    <div class="header bg-gradient-primary pb-8 pt-5 pt-md-8">
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <link rel="stylesheet" href="{{Sitebill\Dragon\app\Helpers\UI::get_angular_file('styles')}}">


                <app-root></app-root>
                <script src="{{Sitebill\Dragon\app\Helpers\UI::get_angular_file('runtime')}}" defer></script>
                <script src="{{Sitebill\Dragon\app\Helpers\UI::get_angular_file('polyfills')}}" defer></script>
                <script src="{{Sitebill\Dragon\app\Helpers\UI::get_angular_file('scripts')}}" defer></script>
                <script src="{{Sitebill\Dragon\app\Helpers\UI::get_angular_file('main')}}" defer></script>
            </div>
        </div>
    </div>
@endsection
