<?php

namespace Sitebill\Dragon\Eloquent;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Database\Query\Builder;
use Sitebill\Dragon\Eloquent\ValueObjects\SelectByQuery;

class DragonQueryBuilder extends Builder
{
    public function whereIntegerInRaw($column, $values, $boolean = 'and', $not = false)
    {
        $type = $not ? 'NotInRaw' : 'InRaw';

        if ($values instanceof Arrayable) {
            $values = $values->toArray();
        }

        foreach ($values as &$value) {
            if ( $value instanceof SelectByQuery ) {
                $value = (int) $value->value;
            } else {
                $value = (int) $value;
            }
        }

        $this->wheres[] = compact('type', 'column', 'values', 'boolean');

        return $this;
    }
}
