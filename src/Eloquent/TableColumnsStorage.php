<?php

namespace Sitebill\Dragon\Eloquent;

class TableColumnsStorage
{
    private static $storage = [];
    private static $storageColumns = [];
    private static $storageNativeColumns = [];

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

    public static function setNativeColumns ( $table_name, $columns ) {
        self::$storageNativeColumns[$table_name] = $columns;
    }

    public static function getNativeColumns ( $table_name ) {
        if ( isset(self::$storageNativeColumns[$table_name]) ) {
            return self::$storageNativeColumns[$table_name];
        }
        return [];
    }

    public static function getColumns ( $table_name )
    {
        if ( !isset(self::$storageColumns[$table_name]) ) {
            $table = Table::where('name', $table_name)->with('columns')->first();
            if ( isset($table->columns) ) {
                self::$storageColumns[$table_name] = $table->columns;
            } else {
                self::$storageColumns[$table_name] = false;
            }
        }
        return self::$storageColumns[$table_name];
    }

}
