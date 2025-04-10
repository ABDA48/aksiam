<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TranslationController extends Controller
{
    public function getTranslations(Request $request)
    {
        $language = $request->get('lang', 'en'); // Default to English if no language is provided

        $translations = [];

        $translations = json_decode(file_get_contents(resource_path("lang/{$language}.json")), true);
    
        return response()->json($translations);
    }
    
}
