<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    use HasFactory;

    protected $fillable = [
        'rice_id',
        'rice_name',
        'rice_variety',
        'recent_activity',
    ];

    public function rice()
    {
        return $this->belongsTo(Rice::class);
    }
}
