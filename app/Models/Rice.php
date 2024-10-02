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
        'full_stock',
        'current_stock',
        'price',
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
