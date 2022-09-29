<?php

namespace Sitebill\Dragon\app\Http\Controllers\API\Traits;

use Sitebill\Dragon\app\Exceptions\DragonExceptions;

trait ErrorReporting
{
    protected function exceptionToJsonResponse ( DragonExceptions $e) {
        $response['exception'] = get_class($e); // Reflection might be better here
        $response['message'] = $e->getMessage();
        $response['trace'] = $e->getTrace();
        return response()->json(['success' => false, 'error' => $response]);
    }
}
