<?php

namespace Sitebill\Dragon\Eloquent;
use Illuminate\Database\Eloquent\Model;

class Table extends Model
{
    protected $table = 'table';
    protected $primaryKey = 'table_id';

    /**
     * Get the columns for the table.
     */
    public function columns()
    {
        return $this->hasMany(Column::class, 'table_id', 'table_id');
    }
}
