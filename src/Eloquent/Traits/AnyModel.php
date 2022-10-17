<?php

namespace Sitebill\Dragon\Eloquent\Traits;

use Sitebill\Dragon\Eloquent\Casts\BaseCast;
use Sitebill\Dragon\Eloquent\DragonQueryBuilder;
use Sitebill\Dragon\Eloquent\TableColumnsStorage;

trait AnyModel
{
    public function newFromBuilder($attributes = [], $connection = null)
    {
        $columns = TableColumnsStorage::getColumns($this->getTable());
        if ( $columns ) {
            foreach ( $columns as $column ) {
                $this->setCast($column->name, BaseCast::class);
            }
        } else {
            foreach ($attributes as $key => $value) {
                $this->setCast($key, BaseCast::class);
            }
        }
        return parent::newFromBuilder($attributes, $connection);
    }

    public function setCast ( $attribute, $castClass  )
    {
        $this->casts[$attribute] = $castClass;
    }

    protected function newBaseQueryBuilder()
    {
        $connection = $this->getConnection();
        return new DragonQueryBuilder(
            $connection, $connection->getQueryGrammar(), $connection->getPostProcessor()
        );
    }

}
