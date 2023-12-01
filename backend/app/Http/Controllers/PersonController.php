<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{

    public function index(){
        return response()->json(Person::all());
    }

    public function show($id){
        return response()->json(Person::find($id));
    }

    public function store(Request $request){
        $person = new Person();
        $person->last_name = $request->last_name;
        $person->first_name = $request->first_name;
        $person->birth_year = $request->birth_year;
        $person->save();
    }
}
