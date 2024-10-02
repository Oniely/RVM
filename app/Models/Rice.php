<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rice extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'variety',
        'price',
        'recent_activity'
    ];

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function histories()
    {
        return $this->hasMany(History::class);
    }
}
