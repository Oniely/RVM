<?php

namespace App\Http\Controllers;

use App\Models\Rice;
use Illuminate\Http\Request;

class StockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Stock/Index', []);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Stock/Create', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return inertia('Stock/Store', []);
    }

    /**
     * Display the specified resource.
     */
    public function show(Rice $rice)
    {
        return inertia('Stock/Show', []);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rice $rice)
    {
        return inertia('Stock/Edit', []);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rice $rice)
    {
        return inertia('Stock/Update', []);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rice $rice)
    {
        return inertia('Stock/Destroy', []);
    }
}
