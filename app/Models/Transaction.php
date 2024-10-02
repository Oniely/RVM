<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'rice_id',
        'rice_name',
        'rice_variety',
        'payment_method',
        'price'
    ];

    public function rice()
    {
        return $this->belongsTo(Rice::class);
    }
}
