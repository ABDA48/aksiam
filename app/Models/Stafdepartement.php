<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stafdepartement extends Model
{
    protected $fillable = ['nom','image','role','department_id']; // Add other fields as necessary

      public function department()
    {
        return $this->belongsTo(Department::class);
    }
    
}
