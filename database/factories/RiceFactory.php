<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rice>
 */
class RiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'variety' => "RC1",
            'current_stock' => $this->faker->numberBetween(5, 20),
            'price' => $this->faker->numberBetween(50, 100)
        ];
    }
}
