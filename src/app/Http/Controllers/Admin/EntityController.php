<?php

namespace Sitebill\Dragon\app\Http\Controllers\Admin;


use App\Http\Controllers\Controller;
use Sitebill\Dragon\app\Helpers\UI;

class EntityController extends Controller
{
    public function index()
    {

        UI::update_root_dist_files();
        return view('dragon::entity.index');
    }

    public function modelsEditor()
    {
        return view('dragon::entity.models-editor');
    }
}
