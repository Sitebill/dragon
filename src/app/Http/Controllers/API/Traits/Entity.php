<?php

namespace Sitebill\Dragon\app\Http\Controllers\API\Traits;

use Sitebill\Dragon\app\Exceptions\ModelNotFoundException;
use Sitebill\Dragon\app\Models\Table;
use Illuminate\Http\Request;

trait Entity
{
    protected Request $request;
    protected function init_custom_model_object($model_name) {
        $table = Table::where('name', $model_name)->first();
        throw_if(!$table, new ModelNotFoundException($model_name));

        dd($table);

    }

}
