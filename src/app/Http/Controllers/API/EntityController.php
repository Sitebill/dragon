<?php

namespace Sitebill\Dragon\app\Http\Controllers\API;

use App\Http\Controllers\Controller;

class EntityController extends Controller
{
    public function test()
    {
        $test = [
            [
                "make" => "Porsche",
                "model" => "Boxter",
                "price" => 72000
            ],
            [
                "make" => "Porsche",
                "model" => "Boxter",
                "price" => 72000
            ],
        ];

        return response()->json(['success' => true, 'data' => $test]);
    }
}


