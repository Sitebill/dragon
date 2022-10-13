<?php

namespace Sitebill\Dragon\Eloquent\Traits;

use Sitebill\Dragon\Eloquent\Casts\BaseCast;
use Sitebill\Dragon\Eloquent\Casts\Dictionary;
use Sitebill\Dragon\Eloquent\TableColumnsStorage;

trait AnyModel
{
    public function newFromBuilder($attributes = [], $connection = null)
    {
        $columns = TableColumnsStorage::getColumns($this->getTable());
        if ( $columns ) {
            foreach ( $columns as $column ) {
                if ( $column->type == 'primary_key' ) {
                    $this->primaryKey = $column->name;
                }
                $this->setCast($column->name, BaseCast::class);
            }
        } else {
            foreach ($attributes as $key => $value) {
                $this->setCast($key, BaseCast::class);
            }
        }
        return parent::newFromBuilder($attributes, $connection);
    }

    public function setCast ( $attribute, $castClass  )
    {
        $this->casts[$attribute] = $castClass;
    }
}
