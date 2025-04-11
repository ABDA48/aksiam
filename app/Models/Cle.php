<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cle extends Model
{
    protected $fillable = ["chiffre","title","subtitle","jamat_id","department_id"];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }
    public function jamat()
    {
        return $this->belongsTo(Jamats::class);
    }
}
