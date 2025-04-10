<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Administrator extends Model
{
    protected $fillable=["image","nom","role","email","niveau"];
    

}
