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
        $person->vezetekNev = $request->vezetekNev;
        $person->keresztNev = $request->keresztNev;
        $person->szul = $request->szul;
        $person->save();
    }
	
	public function destroy($id){
		Person::find($id)->delete();
		
	}
}
