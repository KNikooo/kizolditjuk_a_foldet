<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bejegyzes;

class BejegyzesController extends Controller
{
    public function index(){
        $bejegyzesek = response()->json(Bejegyzes::with('tevekenyseg')->get());
        return $bejegyzesek;
    }

    public function osztaly($id){
        $bejegyzesek = response()->json(Bejegyzes::with('tevekenyseg')->where('osztaly_id',$id)->get());
        return $bejegyzesek;
    }

    public function store(Request $request){
        $bejegyzesek = new Bejegyzes();
        $bejegyzesek->tevekenyseg_id=$request->tevekenyseg_id;
        $bejegyzesek->osztaly_id=$request->osztaly_id;
        $bejegyzesek->allapot=0;
        $bejegyzesek->save();

        return Bejegyzes::find($bejegyzesek->id);
    }
}
