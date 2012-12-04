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

    public function presenceAction()
    {
        $this->_helper->layout()->setLayout('json');
        $db = Zend_Registry::get("db");
        $rs = $db->query(
                'SELECT 
                        cm.meeting_id,
                        cm.cell_id,
                        cm.date,
                        cmp.user_id,
                        cu.date_start,
                        cu.role_id,
                        cr.name,
                        IF(cud.nickname="",CONCAT(cud.name," ",cud.surname),cud.nickname) AS name_user
                FROM 
                        cell_meeting cm
                INNER JOIN
                        cell_meeting_presence cmp ON (cmp.meeting_id=cm.meeting_id) 
                INNER JOIN
                       cell_user cu ON (cu.user_id=cmp.user_id)
                INNER JOIN
                       cell_role cr ON (cu.role_id=cr.role_id)
                INNER JOIN
                       core_user_information cui ON (cui.user_id=cu.user_id)
                INNER JOIN
                       core_user_detailed cud ON (cud.user_id=cu.user_id)
                WHERE 
                        cm.cell_id=1
                ORDER BY
                        cm.date DESC'
            );

        $statusCode = '200';
        $statusMessage = 'Ok';
        $data = $rs->fetchAll();

        $return = array(
            'statusCode' => $statusCode,
            'statusMessage' => $statusMessage,
            'data' => $data
            );

        echo Zend_Json::encode($return);
    }

    public function getmemberAction()
    {
        $this->_helper->layout()->setLayout('json');
        $search = mysql_real_escape_string($_GET['term']);
        $user = new Application_Model_DbTable_CoreUser();
        $select = $user->select()->setIntegrityCheck(false);
        $select ->from(array('u' => 'core_user'), array('id' => 'user_id','label' => 'CONCAT(name," ",surname)'))
                ->where('u.name LIKE ?', '%'.$search.'%')
                ->limit(8);
        $rs = $user->fetchAll($select);   
        $aux = $rs->toArray();  
        echo Zend_Json::encode($aux);
    }


}











