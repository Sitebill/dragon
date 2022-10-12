<?php

namespace Sitebill\Dragon\Eloquent\Casts;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Sitebill\Dragon\Eloquent\ValueObjects\SelectBox as SelectBoxValueObject;


class PrimaryKey implements CastsAttributes
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
        return new \Sitebill\Dragon\Eloquent\ValueObjects\PrimaryKey($model, $key, $value, $attributes);
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
