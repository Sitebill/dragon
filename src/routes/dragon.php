<?php
use Illuminate\Support\Facades\Route;

Route::group([
    'namespace' => 'Sitebill\Dragon\app\Http\Controllers\Admin',
    'prefix' => config('sitebill.dragon.admin_prefix', 'dragon'),
    'middleware' => ['web', 'auth'],
], function () {
    Route::get('', 'EntityController@index')->name('dragon.entity.index');
    Route::get('models', 'EntityController@modelsEditor')->name('dragon.entity.models-editor');
});

Route::group([
    'namespace' => 'Sitebill\Dragon\app\Http\Controllers\API',
    'prefix' => config('sitebill.dragon.admin_prefix', 'dragon').'/api',
    'middleware' => ['web', 'dragon-cors'],
], function () {
    Route::get('entity', [\Sitebill\Dragon\app\Http\Controllers\API\EntityController::class, 'test'])->name('dragon.api.entity.test');
    Route::post('entity', [\Sitebill\Dragon\app\Http\Controllers\API\EntityController::class, 'test'])->name('dragon.api.entity.test');
});

