<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('histories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('rice_id')->nullable()->constrained('rice')->onDelete('SET NULL')->onUpdate('CASCADE');
            $table->string('rice_name');
            $table->string('rice_variety');
            $table->enum('recent_activity', ['RESTOCKED', 'RELEASED']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('histories');
    }
};
