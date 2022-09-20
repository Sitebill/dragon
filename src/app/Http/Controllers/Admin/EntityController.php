<?php

namespace Sitebill\Dragon\app\Http\Controllers\Admin;


use App\Http\Controllers\Controller;

class EntityController extends Controller
{
    public function index()
    {
        return view('dragon::entity.index');
    }

    public function modelsEditor()
    {
        return view('dragon::entity.models-editor');
    }
}
