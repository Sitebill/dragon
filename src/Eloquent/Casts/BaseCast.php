<?php

namespace Sitebill\Dragon\Eloquent\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Sitebill\Dragon\Eloquent\TableColumnsStorage;
use Sitebill\Dragon\Eloquent\ValueObjects\BaseValueObject;
use Sitebill\Dragon\Eloquent\ValueObjects\Dictionary;
use Sitebill\Dragon\Eloquent\ValueObjects\PrimaryKey;
use Sitebill\Dragon\Eloquent\ValueObjects\SafeString;

class BaseCast implements CastsAttributes
{
    /**
     * Cast the given value.
     *
     * @param  \Sitebill\Dragon\Eloquent\Model  $model
     * @param  string  $key
     * @param  mixed  $value
     * @param  array  $attributes
     * @return BaseValueObject
     */
    public function get($model, $key, $value, $attributes)
    {
        return $this->instanceValueObjectClass($model, $key, $value, $attributes);
    }

    private function instanceValueObjectClass($model, $key, $value, $attributes)
    {
        $column = null;

        $columns = TableColumnsStorage::getColumns($model->getTable());
        if ( $columns ) {
            $column = $columns->filter(function ($value, $index) use ($key) {
                return $value->name == $key;
            })->first();
        }

        if ( $model->getKeyName() ==  $key) {
            return new PrimaryKey($model, $key, $value, $attributes, $column);
        }

        if ( isset($column) && isset(Dictionary::$hash[$column->type]) ) {
            $classInstance = new Dictionary::$hash[$column->type]($model, $key, $value, $attributes, $column);
        } elseif ( isset($column) ) {
            $classInstance = new SafeString($model, $key, $value, $attributes, $column);
        } else {
            $classInstance = new SafeString($model, $key, $value, $attributes);
        }
        return $classInstance;
    }



    /**
     * Prepare the given value for storage.
     *
     * @param  \Sitebill\Dragon\Eloquent\Model  $model
     * @param  string  $key
     * @param  string  $value
     * @param  array  $attributes
     * @return string
     */
    public function set($model, $key, $value, $attributes)
    {
        return $value;
    }

}
