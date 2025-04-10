<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $fillable = ['nom','image','ville','jamat_id','department_id','email','telephone']; // Add other fields as necessary

      public function department()
    {
        return $this->belongsTo(Department::class);
    }
    public function jamat()
    {
        return $this->belongsTo(Jamats::class);
    }
}
