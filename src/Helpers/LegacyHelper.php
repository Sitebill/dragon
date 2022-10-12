<?php

namespace Sitebill\Dragon\Helpers;

class LegacyHelper
{
    public static function unserializeSelectData($str) {
        $ret = array();
        $matches = array();
        preg_match_all('/\{[^\}]+\}/', $str, $matches);
        if (count($matches) > 0) {
            foreach ($matches[0] as $v) {
                $v = str_replace(array('{', '}'), '', $v);
                $d = explode('~~', $v);
                $ret[trim($d[0])] = trim($d[1]);
            }
        }
        return $ret;
    }
    public static function serializeSelectData($select_data_array) {
        if ( !is_array($select_data_array) ) {
            return '';
        }
        $rs = '';
        foreach ( $select_data_array as $key => $value) {
            $rs .= '{'.$key.'~~'.$value.'}';
        }
        return $rs;
    }

}
