<?php

namespace Sitebill\Dragon\Eloquent\Casts;

class Dictionary
{
    public static $hash = [
        'primary_key' => PrimaryKey::class,
        'select_box' => SelectBox::class,
        'safe_string' => SafeString::class,
    ];

}
