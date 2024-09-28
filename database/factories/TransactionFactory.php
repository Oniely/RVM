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
            "rice_id" => Rice::inRandomOrder()->first()->id,
            "payment_method" => $this->faker->randomElement(['GCASH', 'CASH']),
            'price' => $this->faker->numberBetween(50, 100)
        ];
    }
}
