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
        Schema::create('cimitieres', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('ville')->nullable();
            $table->string('numero_tombe');
            $table->string('image')->nullable();
            $table->foreignId('jamat_id')->constrained()->cascadeOnDelete(); // Relation to Jamat
            $table->text('description')->nullable();
            $table->date('date_entered')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cimitieres');
    }
};
