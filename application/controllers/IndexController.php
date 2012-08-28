<?php

class IndexController extends Zend_Controller_Action
{

    public function init()
    {
        $this->_helper->layout()->setLayout('login');
    }

    public function indexAction()
    {
        // action body
    }


}

