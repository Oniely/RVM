<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StockResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'variety' => $this->variety,
            'price' => $this->price,
            'created_at' => $this->created_at->format('m-d-y H:i'),
            'updated_at' => $this->updated_at->format('m-d-y H:i'),
        ];
    }
}
