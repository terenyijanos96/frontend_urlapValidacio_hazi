<?php

use App\Models\Product;
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
        Schema::create('products', function (Blueprint $table) {
           
            $table->id();
            $table->string('producer');
            $table->string('productName');
            $table->integer('productPrice');
            $table->integer('stock');
            $table->timestamps();
        });

        Product::create([
            'producer' => 'Coca Cola',
            'productName' => 'Kóla üdítőital',
            'productPrice' => '400',
            'stock' => '500',
        ]);

        Product::create([
            'producer' => 'Unilever',
            'productName' => 'Ketchup',
            'productPrice' => '1099',
            'stock' => '150',
        ]);

        Product::create([
            'producer' => 'Nestlé',
            'productName' => 'Balaton szelet',
            'productPrice' => '169',
            'stock' => '400',
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
