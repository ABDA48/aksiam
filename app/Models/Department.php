<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $fillable = ['nom', 'image', 'role','images','apropos','slug','titre'];
    public function stafdepartements()
    {
        return $this->hasMany(Stafdepartement::class);
    }
    public function actualites()
    {
        return $this->hasMany(Actualite::class);
    }

    protected $casts = [
        'images' => 'array', // Cast the 'images' column to an array
    ];

    public function members()
    {
        return $this->hasMany(Member::class);
    }
}
