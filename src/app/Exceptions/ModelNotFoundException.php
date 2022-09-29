<?php

namespace Sitebill\Dragon\app\Exceptions;

class ModelNotFoundException extends DragonExceptions
{
    public function __construct($model_namet)
    {
        parent::__construct(
            "Unable to find model [{$model_namet}]"
        );
    }
}
