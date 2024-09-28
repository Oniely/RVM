<?php

namespace Database\Seeders;

use App\Models\Rice;
use App\Models\Transaction;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password'=> bcrypt('admin'),
        ]);

        Rice::factory()->count(3)->create();
        Transaction::factory()->count(10)->create();
    }
}
