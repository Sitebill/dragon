<?php

namespace Sitebill\Dragon\Helpers;

use Illuminate\Support\Facades\App;
use Sitebill\Dragon\Eloquent\DynamicModel;

class DragonHelper
{
    public static function getDynamicModel ( $table_name ) {
        return App::make(DynamicModel::class, ['table_name' => $table_name]);
    }
}
