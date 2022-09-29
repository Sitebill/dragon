<?php

namespace Sitebill\Dragon\app\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Sitebill\Dragon\app\Exceptions\DragonExceptions;
use Sitebill\Dragon\app\Http\Controllers\API\Traits\Entity;
use Sitebill\Dragon\app\Http\Controllers\API\Traits\ErrorReporting;

class EntityController extends Controller
{
    use Entity, ErrorReporting;

    public function test(Request $request)
    {
        $this->request = $request;
        $test = [
            [
                "make" => "Porsche",
                "model" => "Boxter",
                "price" => 72000
            ],
            [
                "make" => "Porsche",
                "model" => "Boxter",
                "price" => 72000
            ],
        ];
        try {
            $data = $this->_load_data('data');
            return response()->json(['success' => true, 'data' => $test]);
        } catch (DragonExceptions $e) {
            return $this->exceptionToJsonResponse($e);
        }

    }

    private function _load_data( ) {
        $model_name = $this->request->get('model_name');
        $primary_key = $this->request->get('primary_key');
        $key_value = $this->request->get('key_value');
        $entity_uri = $this->request->get('entity_uri');
        $ql_items = $this->request->get('ql_items');

        $model_object = $this->init_custom_model_object($model_name);
/*
        $user_id = $this->get_my_user_id();

        require_once (SITEBILL_DOCUMENT_ROOT . '/apps/system/lib/system/permission/permission.php' );
        $permission = new Permission();
        if (!$permission->get_access($user_id, $model_name, 'access') and !$permission->get_access($user_id, $model_name, 'view')) {
            $response = new API_Response('error', _e('Доступ запрещен'));
            return $this->json_string($response->get());
        }


        if ($model_object) {
            if ( !empty($entity_uri) ) {
                if ( $model_object->table_name == 'lang_words' ) {
                    $key_value = $model_object->get_id_by_filter('word_key', $entity_uri, array('lang_key' => 'ru'));
                } else {
                    $key_value = $model_object->get_id_by_filter('uri', $entity_uri);
                }
                $primary_key = $model_object->primary_key;
            }
            $data_array = @$model_object->load_by_id($key_value);
            if ( !empty($ql_items) ) {
                $sliced_result = $this->slice_model($model_object, $model_name, $primary_key, $data_array, $ql_items);
                $data_array = $sliced_result['model_data'];
                $model_object = $sliced_result['model_object'];
            }
            if ( $key_value == null and $model_name == 'data' and isset($data_array['user_id']) ) {
                $data_array['user_id']['value'] = $user_id;
            }
            $tabs = $this->extract_tabs($data_array);

            $ret = array(
                'state' => 'success',
                $primary_key => $key_value,
                'primary_key' => $primary_key,
                'table_name' => $model_object->table_name,
                'data' => $data_array,
                'tabs' => $tabs
            );
            return $this->json_string($ret);
        }
        return $this->request_failed('model not defined');
*/
    }

}


