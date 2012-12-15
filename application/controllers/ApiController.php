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

    public function getparticipantsAction()
    {
        try{
            $authNamespace = new Zend_Session_Namespace('userInformation');
            $this->_helper->layout()->setLayout('json');
            $cell = new Application_Model_Cell();
            $data = $cell->getParticipants($authNamespace->cell_id_leader);
            $statusCode = '200';
            $statusMessage = 'Ok';
        }catch(Zend_Exception $e)
        {
            $statusCode = '400';
            $statusMessage = 'Error';
            $data = $e->getMessage();
        }
        $return = array(
                'statusCode' => $statusCode,
                'statusMessage' => $statusMessage,
                'data' => $data
                );

        echo Zend_Json::encode($return);
    }

    public function saveparticipantAction()
    {
        try{
            if($this->getRequest()->isPost())
            {
                $authNamespace = new Zend_Session_Namespace('userInformation');
                $this->_helper->layout()->setLayout('json');
                $data = $this->getRequest()->getPost();
                $cell = new Application_Model_Cell();
                $userId = $cell->saveMember($data,$data['userId']);
                $data = array("user_id" => $userId);
                $statusCode = '200';
                $statusMessage = 'Ok';
            }
        }catch(Zend_Exception $e)
        {
            $statusCode = '400';
            $statusMessage = 'Error';
            $data = $e->getMessage();
        }
        $return = array(
                'statusCode' => $statusCode,
                'statusMessage' => $statusMessage,
                'data' => $data
                );

        echo Zend_Json::encode($return);
    }

    public function reunioesAction()
    {
        $this->_helper->layout()->setLayout('json');
        $request = $this->getRequest();
        $params = $request->getParams();
        $method = $request->getMethod();
        $paramsPut = '';
        if($request->isPut())
        {
            $rawBody = $request->getRawBody();
            parse_str($rawBody, $paramsPut);
        }
        $meeting = new Application_Model_Meeting();
        $data = $meeting->returnMeetings($method,$params,$paramsPut);
        $statusCode = '200';
        $statusMessage = 'Ok';
        $return = array(
                'statusCode' => $statusCode,
                'statusMessage' => $statusMessage,
                'data' => $data
                );

        echo Zend_Json::encode($return);
    }

    public function cellAction()
    {
        try{
        $this->_helper->layout()->setLayout('json');
        $cell = new Application_Model_Cell();
        $request = $this->getRequest();
        $params = $request->getParams();
        $data = $cell->getProfileCell($params['cell_id']);
        $statusCode = '200';
        $statusMessage = 'Ok';
        $return = array(
                    'statusCode' => $statusCode,
                    'statusMessage' => $statusMessage,
                    'data'  => $data
                    );
        echo Zend_Json::encode($return);
    }catch(Zend_Exception $e){
        echo $e->getMessage();
    }
    }

    public function suggestionsAction()
    {
        $this->_helper->layout()->setLayout('json');
        if($this->getRequest()->isPost())
        {
            $authNamespace = new Zend_Session_Namespace('userInformation');
            $this->_helper->layout()->setLayout('json');
            $data = $this->getRequest()->getPost();
            $suggestions = new Application_Model_DbTable_CoreSuggestions();
            $newRow = $suggestions->createRow();
            $newRow->user_id = $data['user_id'];
            $newRow->suggestion = $data['suggestion'];
            $newRow->date = new Zend_Db_Expr('NOW()');
            $newRow->save();
            $statusCode = '200';
            $statusMessage = 'Ok';
        }
        else
        {
            $statusCode = '400';
            $statusMessage = 'Bad Request';
        }
        $return = array(
                    'statusCode' => $statusCode,
                    'statusMessage' => $statusMessage,
                    );
        echo Zend_Json::encode($return);
    }

    /**
     *   Action responsable to save a multiplication date of cell on database.
     *   
     *   @access public
     *   @return boolean
     */
    public function dateMultiplicationAction()
    {
        $this->_helper->layout()->setLayout('json');
        if($this->getRequest()->isPost())
        {
            $data = $this->getRequest()->getPost();
            $cell = new Application_Model_Cell();
            $dataFormat = explode("/",$data['dateMultiplication']);
            $data['dateMultiplication'] = $dataFormat[2]."-".$dataFormat[1]."-".$dataFormat[0];
            echo $cell->saveDateMultiplication($data['cell_id'],$data['dateMultiplication']);
        }
    }

    /**
     *   Action responsable to save a future leader of cell on database.
     *   
     *   @access public
     *   @return boolean
     */
    public function futureLeaderAction()
    {
        $this->_helper->layout()->setLayout('json');
        if($this->getRequest()->isPost())
        {
            $data = $this->getRequest()->getPost();
            $cell = new Application_Model_Cell();
            echo $cell->saveFutureLeaders($data['cell_id'],$data['data']);
        }
    }


}

























