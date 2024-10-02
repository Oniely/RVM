<?php

namespace App\Http\Controllers;

use App\Models\History;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return 'index';
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return 'store';
    }

    /**
     * Display the specified resource.
     */
    public function show(History $history)
    {
        return 'show';
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, History $history)
    {
        return 'update';
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(History $history)
    {
        return 'destroy';
    }
}
