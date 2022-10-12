<?php

namespace Sitebill\Dragon\Eloquent;

use \Illuminate\Database\Eloquent\Model;
use Sitebill\Dragon\Helpers\LegacyHelper;

class Column extends Model
{
    protected $table = 'columns';
    protected $primaryKey = 'columns_id';

    /**
     * Get the post that owns the comment.
     */
    public function table()
    {
        return $this->belongsTo(Table::class, 'table_id', 'table_id');
    }

    public function select_data ()
    {
        if ( $this->select_data != '' ) {
            return LegacyHelper::unserializeSelectData($this->select_data);
        }
        return [];
    }
}
