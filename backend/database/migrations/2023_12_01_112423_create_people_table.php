<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Person;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('people', function (Blueprint $table) {
            $table->id();
            $table->string('vezetekNev');
            $table->string('keresztNev');
            $table->smallInteger('szul');
            $table->timestamps();
        });
		
		Person::create([
			'vezetekNev' => 'Alig',
			'keresztNev' => 'Elek',
			'szul' => 1990
		]);
		
		Person::create([
			'vezetekNev' => 'Teszt',
			'keresztNev' => 'Elek',
			'szul' => 2000
		]);
		
		Person::create([
			'vezetekNev' => 'Mekk',
			'keresztNev' => 'Elek',
			'szul' => 2000
		]);
    }

    /**
     * Reverse the migrations.
     * 
     */
    public function down(): void
    {
        Schema::dropIfExists('people');
    }
};
