<?php

namespace Sitebill\Dragon\app\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    use HasFactory;
    protected $table = 'data';
    protected $primaryKey = 'id';
    public $timestamps = false;

}
