<?php

namespace Sitebill\Dragon\app\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Config extends Model
{


    protected $table = 'config';
    protected $primaryKey = 'id';
    protected $fillable = ['value'];

    private static $config_array;

    public static function getConfig(string $key)
    {
        if ( empty(self::$config_array) ) {
            self::initConfig();
        }
        if ( !empty(self::$config_array[$key]) ) {
            return self::$config_array[$key]['value'];
        }
        return null;
    }

    private static function initConfig () {
        $rows = DB::table('config')->get();
        if ($rows) {
            foreach ( $rows->all() as $item ) {
                self::$config_array[$item->config_key] = (array)$item;
            }
        }
    }

}
