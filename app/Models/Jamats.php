<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Jamats extends Model
{
    protected $fillable = ['nom','image','role','images','apropos','slug','titre']; // Add other fields as necessary

    public function stafjamats()
    {
        return $this->hasMany(StafJamat::class);
    }
    public function actualites()
    {
        return $this->hasMany(Actualite::class,'jamat_id');
    }

    protected $casts = [
        'images' => 'array', // Cast the 'images' column to an array
    ];

    public function members()
    {
        return $this->hasMany(Member::class);
    }

    public function cimitieres()
    {
        return $this->hasMany(Cimitiere::class);
    }

    public function cles()
    {
        return $this->hasMany(Cle::class);
    }
}
