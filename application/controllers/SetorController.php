<?php

class SetorController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        // action body
    }

    public function celulasAction()
    {
        $authNamespace = new Zend_Session_Namespace('userInformation');
        $setor = new Application_Model_Setor();
        $this->view->cells = $setor->returnCells($authNamespace->user_id);
    }

    public function perfilAction()
    {
        // action body
    }


}





