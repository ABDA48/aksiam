<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Actualite extends Model
{
     

    protected $fillable = ['titre', 'slug', 'featured_img','date','content', 'images', 'category_id', 'published','jamat_id','department_id'];

    // Define the relationship with the Category model
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function department()
    {
        return $this->belongsTo(Department::class);
    }
    public function jamat()
    {
        return $this->belongsTo(Jamats::class,'jamat_id');
    }
    protected $casts = [
        'images' => 'array', // Cast the 'images' column to an array
    ];
}
