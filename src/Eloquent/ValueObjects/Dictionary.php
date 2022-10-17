<?php

namespace Sitebill\Dragon\Eloquent\ValueObjects;

class Dictionary
{
    public static $hash = [
        'primary_key' => PrimaryKey::class,
        'select_box' => SelectBox::class,
        'safe_string' => SafeString::class,
        'select_by_query' => SelectByQuery::class,
    ];

}
