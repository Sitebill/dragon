<?php

namespace Sitebill\Dragon\Eloquent;
use Illuminate\Database\Eloquent\Model as BaseModel;
use Sitebill\Dragon\Eloquent\Traits\AnyModel;


abstract class Model extends BaseModel
{
    use AnyModel;
}
