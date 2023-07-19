<?php
namespace Sitebill\Dragon\Types;

class Uploads
{
    public $normal;
    public $preview;
    public $type;
    public $mime;
    public $size;
    public $duration;
    public $remote;
    public $vk_video_id;
    public $vk_owner_id;
    public $vk_player;

    /**
     * @return mixed
     */
    public function getVkOwnerId()
    {
        return $this->vk_owner_id;
    }

    /**
     * @param mixed $vk_owner_id
     */
    public function setVkOwnerId($vk_owner_id): void
    {
        $this->vk_owner_id = $vk_owner_id;
    }

    /**
     * @return mixed
     */
    public function getVkPlayer()
    {
        return $this->vk_player;
    }

    /**
     * @param mixed $vk_player
     */
    public function setVkPlayer($vk_player): void
    {
        $this->vk_player = $vk_player;
    }

    /**
     * @return mixed
     */
    public function getVkVideoId()
    {
        return $this->vk_video_id;
    }

    /**
     * @param mixed $vk_video_id
     */
    public function setVkVideoId($vk_video_id): void
    {
        $this->vk_video_id = $vk_video_id;
    }

    public function __construct($srcArray)
    {
        $this->fromArray($srcArray);
    }

    /**
     * @return mixed
     */
    public function getNormal()
    {
        return $this->normal;
    }

    /**
     * @param mixed $normal
     */
    public function setNormal($normal)
    {
        $this->normal = $normal;
    }

    /**
     * @return mixed
     */
    public function getPreview()
    {
        return $this->preview;
    }

    /**
     * @param mixed $preview
     */
    public function setPreview($preview)
    {
        $this->preview = $preview;
    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param mixed $type
     */
    public function setType($type)
    {
        $this->type = $type;
    }

    /**
     * @return mixed
     */
    public function getMime()
    {
        return $this->mime;
    }

    /**
     * @param mixed $mime
     */
    public function setMime($mime)
    {
        $this->mime = $mime;
    }

    /**
     * @return mixed
     */
    public function getSize()
    {
        return $this->size;
    }

    /**
     * @param mixed $size
     */
    public function setSize($size)
    {
        $this->size = $size;
    }

    /**
     * @return mixed
     */
    public function getDuration()
    {
        return $this->duration;
    }

    /**
     * @param mixed $duration
     */
    public function setDuration($duration)
    {
        $this->duration = $duration;
    }

    /**
     * @return mixed
     */
    public function getRemote()
    {
        return $this->remote;
    }

    /**
     * @param mixed $remote
     */
    public function setRemote($remote)
    {
        $this->remote = $remote;
    }
    public function toArray() {
        return json_decode(json_encode($this), true);
    }

    public function fromArray ( $srcArray ) {

        if ( !is_array($srcArray) and !isset($srcArray['normal'])) {
            throw new \Exception('Undefined normal value in array');
        }
        $this->setNormal($srcArray['normal']);
        $this->setVkVideoId($srcArray['vk_video_id'] ?? null);
        $this->setVkOwnerId($srcArray['vk_owner_id'] ?? null);
        $this->setVkPlayer($srcArray['vk_player'] ?? null);

    }
}
