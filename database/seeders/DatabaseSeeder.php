<?php

namespace Database\Seeders;

use App\Models\History;
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
            'password' => bcrypt('admin'),
        ]);

        // create 3 new rice stock
        $rices = Rice::factory()->count(3)->create();

        foreach ($rices as $rice) {
            // for each rice stock add a transaction related to each rice
            Transaction::factory()->count(5)->forRice($rice)->create();

            // for each rice stock add a history related to each rice
            History::factory()->count(1)->forRice($rice)->create();
        }
    }
}
