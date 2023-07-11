<?php
namespace Sitebill\Dragon\Collections;


use Illuminate\Support\Collection;

class UploadsCollection
{
    private Collection $collection;

    public function __construct ($srcString = '')
    {
        if ( $srcString != '' ) {
            $uns = unserialize($srcString);
            if ( !is_array($uns)) {
                throw new \Exception('Undefined array in uploads srcString');
            }
            $collection = collect($uns);
            $this->collection = $collection->mapInto(\Sitebill\Dragon\Types\Uploads::class);
        }
    }

    /**
     * @return Collection
     */
    public function getCollection(): Collection
    {
        return $this->collection;
    }

    /**
     * @param Collection $collection
     */
    public function setCollection(Collection $collection): void
    {
        $this->collection = $collection;
    }
}
