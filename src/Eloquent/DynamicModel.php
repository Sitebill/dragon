<?php

namespace Sitebill\Dragon\Eloquent;

use Exception;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Schema;

/**
 * Thanks https://github.com/laracraft-tech/laravel-dynamic-model
 */
class DynamicModel extends Model
{
    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * Indicates if the model's ID is auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = true;

    public $timestamps = false;

    /**
     * The data type of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    protected $routeKeyName = 'id';

    public function getRouteKeyName()
    {
        return $this->routeKeyName;
    }

    protected $guarded = [];

    private static $schemaTable = [];

    /**
     * important! - attributes need to be passed,
     * cause of new instance generation inside laravel
     *
     * @param $attributes
     * @throws Exception
     */
    public function __construct($attributes = [])
    {
        parent::__construct($attributes);

        if (!$table = config('sitebill.dragon.current_table')) {
            throw new Exception("Seems like you called DynamicModel directly,
            please use service container: App::make(DynamicModel::class, ['table_name' => 'foo'])");
        }

        $this->table = strtolower($table);

        $schema = $this->getTableSchema($this->table);

        $this->primaryKey = $schema['primaryKeyName'];
        $this->incrementing = $schema['incrementing'];
        $this->keyType = $schema['keyType'];
        $this->routeKeyName = $schema['routeKeyName'];
    }

    private function getTableSchema ( $table ) {
        if ( !isset(self::$schemaTable[$table]) ) {

            self::$schemaTable = Cache::remember('schemaTable', 3600, function () {
                return $this->loadSchema();
            });

            // self::$schemaTable = $this->loadSchema();
        }
        if ( !isset(self::$schemaTable[$table]) ) {
            throw new Exception("The table you provided to the DynamicModel does not exists! Please create it first! table = ".$table);
        }
        TableColumnsStorage::setNativeColumns($table, $this->getTableColumns($table));
        return self::$schemaTable[$table];
    }

    public function getTableColumns ($table) {
        if ( isset(self::$schemaTable[$table]) ) {
            return self::$schemaTable[$table]['tableColumns'];
        }
        return [];
    }

    private function loadSchema () {
        $schemaTable = [];
        $connection = Schema::getConnection();
        $tables = $connection->getDoctrineSchemaManager()->listTableNames();
        foreach ($tables as $id => $table) {
            $tableNameWithoutPrefix = str_replace($connection->getTablePrefix(), '', $table);
            $table_details = $connection->getDoctrineSchemaManager()->listTableDetails($table);
            $table_columns = array_keys($connection->getDoctrineSchemaManager()->listTableColumns($table));
            if ( $table_details->getPrimaryKey() != null ) {
                $primaryKeyName = $table_details->getPrimaryKey()->getColumns()[0];
                $primaryColumn = $connection->getDoctrineColumn($table, $primaryKeyName);
                $incrementing = $primaryColumn->getAutoincrement();
                $keyType = ($primaryColumn->getType()->getName() === 'string') ? 'string' : 'integer';
                $routeKeyName = $primaryColumn->getName();
            } else {
                $primaryKeyName = null;
                $primaryColumn = null;
                $incrementing = null;
                $keyType = null;
                $routeKeyName = null;
            }

            $schemaTable[$tableNameWithoutPrefix] = [
                'tableNameWithoutPrefix' => $tableNameWithoutPrefix,
                'tableDetails' => $table_details,
                'incrementing' => $incrementing,
                'keyType' => $keyType,
                'primaryKeyName' => $primaryKeyName,
                'primaryColumn' => $primaryColumn,
                'routeKeyName' => $routeKeyName,
                'tableColumns' => $table_columns,
            ];
        }
        return $schemaTable;
    }
}
