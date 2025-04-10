<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('actualites', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
        $table->string('slug')->unique();
        $table->text('content');
        $table->string('featured_img')->nullable();
        $table->text('images')->nullable();
        $table->string('date')->nullable();
         $table->boolean('published')->default(false);
         $table->foreignId('jamat_id')->nullable()->constrained()->nullOnDelete();
         $table->foreignId('department_id')->nullable()->constrained()->nullOnDelete();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('actualites');
    }
};
