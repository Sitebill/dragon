<?php

namespace Sitebill\Dragon\Eloquent\ValueObjects;

use Sitebill\Dragon\Eloquent\Column;

class PrimaryKey extends BaseValueObject
{
    public function __construct($model, $key, $value, $attributes, Column $column = null)
    {
        parent::__construct($model, $key, $value, $attributes, $column);
        $this->type = 'primary_key';
    }
}
