<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateTevekenysegsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tevekenysegs', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('tevekenyseg_nev',100);
            $table->integer('pontszam');
        });

        DB::table('tevekenysegs')->insert([
            ['tevekenyseg_nev' => "kerékpárral jöttem iskolába", 'pontszam' => 2],
            ['tevekenyseg_nev' => "rollerrel jöttem iskolába", 'pontszam' => 3],
            ['tevekenyseg_nev' => "10 km-t gyalogoltam buszozás helyett", 'pontszam' => 3],
            ['tevekenyseg_nev' => "ültettem fát ", 'pontszam' => 5],
            ['tevekenyseg_nev' => "ültettem virágot", 'pontszam' => 4],
            ['tevekenyseg_nev' => "ültettem egyéb növényt", 'pontszam' => 4],
            ['tevekenyseg_nev' => "kevesebb vizet használtam a fürdéshez", 'pontszam' => 3],
            ['tevekenyseg_nev' => "összeszedtem a szemetet egy közterületen, erdőben, stb", 'pontszam' => 3],
            ['tevekenyseg_nev' => "tartós szatyorba vásároltam, nem nylonba", 'pontszam' => 5]
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tevekenysegs');
    }
}
