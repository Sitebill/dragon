<?php

namespace Sitebill\Dragon\Eloquent\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Sitebill\Dragon\Eloquent\Column;
use Sitebill\Dragon\Eloquent\TableColumnsStorage;
use \Sitebill\Dragon\Eloquent\ValueObjects\SelectBox as SelectBoxValueObject;

class SelectBox implements CastsAttributes
{
    /**
     * Cast the given value.
     *
     * @param  \Sitebill\Dragon\Eloquent\Model  $model
     * @param  string  $key
     * @param  mixed  $value
     * @param  array  $attributes
     * @return SelectBoxValueObject
     */
    public function get($model, $key, $value, $attributes)
    {
        $table_builder = TableColumnsStorage::get($model->getTable());
        $table = $table_builder->first();
        return new \Sitebill\Dragon\Eloquent\ValueObjects\SelectBox($model, $key, $value, $attributes, $table->columns()->where('name', $key)->first());
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
