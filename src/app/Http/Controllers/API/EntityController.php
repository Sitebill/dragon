<?php
namespace Sitebill\Dragon\app\Http\Controllers\API;

use App\Http\Controllers\Controller;

class EntityController extends Controller
{
    public function test() {
        return response()->json(['success' => true, 'data' => 123]);
    }
}


