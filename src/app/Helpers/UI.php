<?php
namespace Sitebill\Dragon\app\Helpers;

class UI {
    private static $dist_dir = __DIR__.'/../../../angular/dist/dragon';
    private static $angular_dist_files;

    public static function load_dist_files_list() {
        $result = array();
        if (is_dir(self::$dist_dir)) {
            if ($dh = opendir(self::$dist_dir)) {
                while (($item = readdir($dh)) !== false) {
                    if (is_file(self::$dist_dir . '/' . $item) and ! preg_match('/^\./', $item)) {
                        $result['dist_files'][] = $item;
                        if ( !in_array($item, array('index.php', 'install.php', '.htaccess', 'favicon.ico', 'index.html', '3rdpartylicenses.txt')) ) {
                            list($prefix, $random, $extension) = explode('.', $item);
                            $result['dist_files_prefixes'][$prefix] = $item;
                        }
                    }
                }
                closedir($dh);
            }
        }
        return $result;
    }

    public static function get_angular_file ( $prefix ) {
        if ( empty(self::$angular_dist_files) ) {
            self::$angular_dist_files = self::load_dist_files_list();
        }
        if (!empty(self::$angular_dist_files['dist_files_prefixes'][$prefix])) {
            return self::$angular_dist_files['dist_files_prefixes'][$prefix];
        }
        return '';
    }


    public static function update_root_dist_files () {
        $dist_files_all = self::load_dist_files_list();
        $dist_files = $dist_files_all['dist_files'];
        self::link_dist_files_to_root($dist_files);
    }

    public static function link_dist_files_to_root ($dist_files) {
        $rs = '';
        if ( is_array($dist_files) ) {
            foreach ($dist_files as $file) {
                if ( $file != 'index.html' and !file_exists(public_path().'/'.$file) ) {
                    if ( symlink(self::$dist_dir.'/'.$file, public_path().'/'.$file) ) {
                        $rs .= 'symlink created successfully: '.$file.'<br>'."\n";
                    } else {
                        $rs .= 'symlink create failed: '.$file.'<br>'."\n";
                    }
                }
            }
        }
        return $rs;
    }

    private function remove_file ( $file ) {
        if ( unlink($file) ) {
            $rs = 'removed successfully: '.$file.'<br>'."\n";
        } else {
            $rs = 'remove failed: '.$file.'<br>'."\n";
        }
        return $rs;
    }

    function delete_dist_files ( $dist_files ) {
        $rs = '';
        if ( is_array($dist_files) ) {
            foreach ($dist_files as $file) {
                if ( $file != 'index.html' ) {
                    if ( is_link(public_path().'/'.$file) ) {
                        $rs .= $this->remove_file(public_path().'/'.$file);
                    }
                    if ( is_file(self::$dist_dir.'/'.$file) ) {
                        $rs .= $this->remove_file(self::$dist_dir.'/'.$file);
                    }
                }
            }
        }
        return $rs;
    }

}
