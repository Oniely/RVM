<?php

namespace Database\Factories;

use App\Models\Rice;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
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
            "payment_method" => $this->faker->randomElement(['GCASH', 'CASH']),
            'price' => null
        ];
    }

    public function forRice($rice) {
        return $this->state(function (array $attributes) use ($rice) {
            return [
                'rice_id' => $rice->id,
                'rice_name' => $rice->name,
                'rice_variety' => $rice->variety,
                'price' => $rice->price
            ];
        });
    }
}
