<?php

namespace Sitebill\Dragon\Eloquent\Traits;

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
                if ( isset(Dictionary::$hash[$column->type]) ) {
                    $this->setCast($column->name, Dictionary::$hash[$column->type]);
                } else {
                    $this->setCast($column->name, Dictionary::$hash['safe_string']);
                }
            }
        } else {
            foreach ($attributes as $key => $value) {
                $this->setCast($key, Dictionary::$hash['safe_string']);
            }
        }
        return parent::newFromBuilder($attributes, $connection);
    }

    public function setCast ( $attribute, $castClass  )
    {
        $this->casts[$attribute] = $castClass;
    }
}
