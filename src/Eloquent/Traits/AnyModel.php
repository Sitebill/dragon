<?php

namespace Sitebill\Dragon\Eloquent\Traits;

use Sitebill\Dragon\Eloquent\Casts\BaseCast;
use Sitebill\Dragon\Eloquent\DragonQueryBuilder;
use Sitebill\Dragon\Eloquent\TableColumnsStorage;

trait AnyModel
{
    public function newFromBuilder($attributes = [], $connection = null)
    {
        $columns = TableColumnsStorage::getColumns($this->getTable());
        $nativeColumns = TableColumnsStorage::getNativeColumns($this->getTable());
        if ( $columns ) {
            foreach ( $columns as $column ) {
                $nativeColumns = $this->unsetByValue($column->name, $nativeColumns);
                $this->setCast($column->name, BaseCast::class);
            }
        } else {
            foreach ($attributes as $key => $value) {
                $nativeColumns = $this->unsetByValue($key, $nativeColumns);
                $this->setCast($key, BaseCast::class);
            }
        }
        if ( is_array($nativeColumns) and count($nativeColumns) > 0 ) {
            foreach ($nativeColumns as $nativeKey) {
                $this->setCast($nativeKey, BaseCast::class);
            }
        }
        return parent::newFromBuilder($attributes, $connection);
    }

    private function unsetByValue ($del_val, $array) {
        if (($key = array_search($del_val, $array)) !== false) {
            unset($array[$key]);
        }
        return $array;
    }

    public function setCast ( $attribute, $castClass  )
    {
        $this->casts[$attribute] = $castClass;
    }

    protected function newBaseQueryBuilder()
    {
        $connection = $this->getConnection();
        return new DragonQueryBuilder(
            $connection, $connection->getQueryGrammar(), $connection->getPostProcessor()
        );
    }

}
