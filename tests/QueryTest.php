<?php
namespace Sitebill\Dragon\Tests;

class QueryTest extends TestCase
{

    public function testSetTable ()
    {
        $anyModel = new \Sitebill\Dragon\app\Models\AnyModel();
        $anyModel->setTable('data');
        $this->assertEquals('data', $anyModel->getTable());

    }

}
