<?php

class IndexController extends Zend_Controller_Action
{

    public function init()
    {
        $this->_helper->layout()->setLayout('landing');
    }

    public function indexAction()
    {
        // action body
    }


}

