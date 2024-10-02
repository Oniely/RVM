<?php

namespace App\Http\Requests;

use App\Models\Rice;
use Illuminate\Foundation\Http\FormRequest;

class StockRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'variety' => 'required|string|max:255',
            'add_stock' => [
                'required',
                'integer',
                'min:0',
                'max:10',
                function ($attribute, $value, $fail) {
                    $rice = Rice::findOrFail($this->route('stock'));

                    if ($rice->current_stock + $value > $rice->full_stock) {
                        $fail('The total stock cannot exceed ' . $rice->full_stock . '.');
                    }
                },
            ],
        ];
    }
}
