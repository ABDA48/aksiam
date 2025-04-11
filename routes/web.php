<?php

use App\Models\Actualite;
 use App\Models\Cle;
use App\Models\Jamats;
use App\Models\Administrator;
use App\Models\Department;
use App\Models\Partenair;
use App\Models\Stafdepartement;
use App\Models\Stafjamat;
use App\Models\Trustee;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\TranslationController;
use App\Http\Controllers\AuthController;


Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::get('/api/translations', [TranslationController::class, 'getTranslations']);


Route::get('/', function () {
    
    $actualites = Actualite::orderBy('created_at', 'desc')->take(6)->get();

     $imagesSection = [
        [   "src"=> "images/img6.jpg", "alt"=> "Mosquée - Image 1" ],
        [   "src"=> "images/img1.jpg", "alt"=> "Mosquée - Image 2" ],
        [   "src"=> "images/img4.jpg", "alt"=> "Mosquée - Image 3" ],
        [   "src"=> "images/img5.jpg", "alt"=>"Mosquée - Image 4" ]
      ];

      $cles = Cle::whereNull('department_id')->whereNull('jamat_id')->get();


    return Inertia::render('Home',[ 
        "cles"=>$cles,
        "articles"=>$actualites,
    "imagesSection"=>$imagesSection
]);
});


Route::get('/actualités', function (Request $request) {
    $search = $request->query('search');
 $departments=Department::all();
    // Fetch categories from the database
 
    // Start the query for fetching articles, with eager loading of the categories
    $query = Actualite::with('department'); // Adjusted to correctly load the category relationship

    // Apply search filter if provided
    if ($search) {
        $query->where('titre', 'LIKE', "%{$search}%")
              ->orWhere('content', 'LIKE', "%{$search}%");
    }

    // Fetch articles with optional filters and order by latest
    $articles = $query->latest()->get();

    return Inertia::render('ActualitesList', [
        "articles" => $articles,
         "search" => $search,
         "departments"=>$departments
    ]);
});



Route::get('/actualités/{slug}', function ($slug) {
    // Fetch the article with its category based on the slug
    $article = Actualite::with('department')->where('slug', $slug)->first();

    if (!$article) {
        abort(404);
    }

    // Fetch related articles: same category but different slug
    $relatedArticles = Actualite::with('department')
        ->where('department_id', $article->department_id)
        ->where('slug', '!=', $slug)
        ->take(3)
        ->get();

    return Inertia::render('ArticlePage', [
        'article' => $article,
        'relatedArticles' => $relatedArticles
    ]);
});


Route::get('/administrator', function () {
     $administrators=Administrator::all();
     $trustes=Trustee::all();
     $partners=Partenair::all();
    return Inertia::render('Administrateur',[ 
        "administrators"=>$administrators,
        "trustes"=>$trustes,
        "partners"=>$partners
    ]);
});

Route::get('/department', function () {
      $departments=Department::all();
    return Inertia::render('Department',[
        "departments"=>$departments
     ]);
});

Route::get('/department/{slug}', function ($slug) {
    // Retrieve the department with the given slug along with its related actualites
    $department = Department::where('slug', $slug)
                            ->with('actualites')  // Eager load the related actualites
                            ->firstOrFail();
    $cles = Cle::where('department_id', $department->id)
                            ->whereNull('jamat_id')
                            ->get();
    $stafs=Stafdepartement::where('department_id',$department->id)->get();

    // Return the department and actualites data to the Inertia page
    return Inertia::render('DepartmentPage', [
        "cles"=>$cles,
        'department' => $department,
        'articles' => $department->actualites,
        "stafs"=>$stafs  // Pass actualites to the frontend
    ]);
});






Route::get('/jamats', function () {
      $jamats=Jamats::all();
    return Inertia::render('JamatsList',  ["jamats"=>$jamats]);
});


Route::get('/jamats/{slug}', function ($slug) {
    $jamat = Jamats::where('slug', $slug)
    ->with('actualites')
    ->firstOrFail(); 

    $cles = Cle::where('jamat_id', $jamat->id)
    ->whereNull('department_id')
    ->get();
    $stafs=Stafjamat::where('jamat_id',$jamat->id)->get();

    return Inertia::render('JamatsPage', ["jamat" => $jamat,'articles' => $jamat->actualites,"cles"=>$cles,"stafs"=>$stafs ]);
});



Route::get('/about', function () {
     
    return Inertia::render('Apropos',[ ]);
});

Route::get('/contact', function () {
     
    return Inertia::render('ContactPage',[ ]);
});
