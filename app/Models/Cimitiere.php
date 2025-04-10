<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cimitiere extends Model
{
    protected $fillable=["nom","ville","numero_tombe","image","jamat_id","description","date_entered"];

    public function jamat()
    {
        return $this->belongsTo(Jamats::class);
    }
}
