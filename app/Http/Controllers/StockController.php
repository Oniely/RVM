<?php

namespace App\Http\Controllers;

use App\Http\Requests\StockRequest;
use App\Http\Resources\HistoryResource;
use App\Http\Resources\StockResource;
use App\Models\History;
use App\Models\Rice;
use Illuminate\Http\Request;

class StockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stocks = Rice::all();
        $history = History::query()->orderBy('created_at', 'desc')->paginate(10);

        return inertia('Stock/Index', [
            'stocks' => StockResource::collection($stocks),
            'histories' => HistoryResource::collection($history)
        ]);
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
    public function store(StockRequest $request)
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
    public function update(StockRequest $request, $id)
    {
        $rice = Rice::findOrFail($id);

        $rice->update([
            'variety' => $request->variety,
            'current_stock' => $rice->current_stock + $request->add_stock
        ]);

        if ($request->add_stock > 0) {
            History::create([
                'rice_id' => $rice->id,
                'rice_name' => $rice->name,
                'rice_variety' => $rice->variety,
                'recent_activity' => 'RESTOCKED',
            ]);
        }

        return back()->with('success', 'Update Successful');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rice $rice)
    {
        return inertia('Stock/Destroy', []);
    }
}
