<?php

namespace Sitebill\Dragon\Eloquent;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model as BaseModel;


abstract class Model extends BaseModel
{
    function toJson($options = 0)
    {
        return parent::toJson($options); // TODO: Change the autogenerated stub
    }

    public function setCast ( $attribute, $castClass  )
    {
        $this->casts[$attribute] = $castClass;
    }
}
