<?php

namespace Sitebill\Dragon\Eloquent;

use Exception;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Config;

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

        $this->table = $table;

        if (!Schema::hasTable($this->table)) {
            throw new Exception("The table you provided to the DynamicModel does not exists! Please create it first!");
        }
        $connection = Schema::getConnection();
        $table_name_with_prefix = $connection->getTablePrefix().$table;
        $table = $connection->getDoctrineSchemaManager()->listTableDetails($table_name_with_prefix);
        $primaryKeyName = $table->getPrimaryKey()->getColumns()[0];
        $primaryColumn = $connection->getDoctrineColumn($table_name_with_prefix, $primaryKeyName);

        $this->primaryKey = $primaryKeyName;
        $this->incrementing = $primaryColumn->getAutoincrement();
        $this->keyType = ($primaryColumn->getType()->getName() === 'string') ? 'string' : 'integer';
        $this->routeKeyName = $primaryColumn->getName();
    }
}
