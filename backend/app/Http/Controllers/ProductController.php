<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = response()->json(Product::all());
        return $products;
    }

    public function show($id)
    {
        $product = response()->json(Product::find($id));
        return $product;
    }

    public function store(Request $request)
    {
        $product = new Product();
        $product->producer = $request->producer;
        $product->productName = $request->productName;
        $product->productPrice = $request->productPrice;
        $product->stock = $request->stock;
        $product->save();
    }

    public function update($id, Request $request)
    {
        $product = Product::find($id);
        $product->producer = $request->producer;
        $product->productName = $request->productName;
        $product->productPrice = $request->productPrice;
        $product->stock = $request->stock;
        $product->save();
    }

    public function destroy($id)
    {
        Product::find($id)->delete();
    }
}
