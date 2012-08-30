<?php

class AppController extends Zend_Controller_Action
{

    public function init()
    {
        $this->_helper->layout()->setLayout('app');
    }

    public function indexAction()
    {
        // action body
    }


}

