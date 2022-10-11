<?php

namespace Sitebill\Dragon\Eloquent\ValueObjects;

class SelectBox
{
    public $select_data = ['new' => 'Новая', 'old' => 'Старая'];
    public $value;

    public function __construct( $value )
    {
        $this->value = $value;
    }
}
