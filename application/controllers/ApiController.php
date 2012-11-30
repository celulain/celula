<?php

class ApiController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        // action body
    }

    public function subgoalsAction()
    {
        // Determina o layout
        $this->_helper->layout()->setLayout('json');

        // Parâmetros
        $params = $this->getRequest()->getParams();
        if ($params['id']) {
            $id = $params['id'];
        } else {
            $id = 0;
        }
        // Determina o método da requisição
        $method = $this->getRequest()->getMethod();


        // Copiado de CelulaController.php
        $authNamespace = new Zend_Session_Namespace('userInformation');
        $cell = new Application_Model_Cell();
        $dateMultiplication = $cell->returnDateMultiplication($authNamespace->cell_id_leader);

        // Retorno
        $statusCode = '200';
        $statusMessage = 'Ok';
        $data = array(
                'multiplicationDate' => $dateMultiplication
            );

        $json = array(
                'status' => $statusCode,
                'message' => $statusMessage,
                'data' => $data
            );
        // Retorno JSON do request
        echo Zend_Json::encode($json);
    }


}







