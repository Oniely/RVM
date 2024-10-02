<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\History>
 */
class HistoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "rice_id" => null,
            'rice_name' => null,
            'rice_variety' => null,
            "recent_activity" => $this->faker->randomElement(['RESTOCKED', 'RELEASED']),
        ];
    }

    public function forRice($rice) {
        return $this->state(function (array $attributes) use ($rice) {
            return [
                'rice_id' => $rice->id,
                'rice_name' => $rice->name,
                'rice_variety' => $rice->variety,
            ];
        });
    }
}
