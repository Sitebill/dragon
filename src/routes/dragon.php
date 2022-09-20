<?php
use Illuminate\Support\Facades\Route;

Route::group([
    'namespace' => 'Sitebill\Dragon\app\Http\Controllers\Admin',
    'prefix' => config('sitebill.dragon.admin_prefix', 'dragon'),
    'middleware' => ['web'],
], function () {
    Route::get('', 'EntityController@index')->name('dragon.entity.index');
    Route::get('models', 'EntityController@modelsEditor')->name('dragon.entity.models-editor');
});


