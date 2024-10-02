<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HistoryResource extends JsonResource
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
            'rice' => new StockResource($this->whenLoaded('rice')),
            'rice_name' => $this->rice_name,
            'rice_variety' => $this->rice_variety,
            'recent_activity' => $this->recent_activity,
            'created_at' => $this->created_at->format('m-d-y H:i'),
            'updated_at' => $this->updated_at->format('m-d-y H:i'),
        ];
    }
}
