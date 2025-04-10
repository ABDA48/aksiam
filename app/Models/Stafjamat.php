<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stafjamat extends Model
{
    protected $fillable = ['nom','image','role','jamat_id']; // Add other fields as necessary

    public function jamat()
    {
        return $this->belongsTo(Jamats::class);
    }
}
