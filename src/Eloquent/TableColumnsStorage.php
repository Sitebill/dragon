<?php

namespace Sitebill\Dragon\Eloquent;

class TableColumnsStorage
{
    private static $storage = [];
    public static function get ( $table_name )
    {
        if ( !isset(self::$storage[$table_name]) ) {
            $table = Table::where('name', $table_name)->with('columns');
            if ( $table ) {
                self::$storage[$table_name] = $table;
            } else {
                self::$storage[$table_name] = false;
            }
        }
        return self::$storage[$table_name];
    }
}
