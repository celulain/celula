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
        // action body
    }

    public function presenceAction()
    {
        // action body
    }

    public function getmemberAction()
    {
        $this->_helper->layout()->setLayout('json');
	mysql_connect('localhost','root','[=celula]mysql');
        $search = mysql_real_escape_string($_GET['term']);
        $user = new Application_Model_DbTable_CoreUser();
        $select = $user->select()->setIntegrityCheck(false);
        $select ->from(array('u' => 'core_user'), array('id' => 'user_id','label' => 'CONCAT(name," ",surname)'))
                ->where('u.name LIKE ?', '%'.utf8_encode($search).'%')
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
     *
     *
     *
     *
     *
     *
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
     *
     *
     *
     *
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

    /**
     *   Action responsable to get members of cell on database.
     *   
     *   @access public
     *   @return boolean
     *
     *
     *
     *
     */
    public function getmemberscellAction()
    {
        $this->_helper->layout()->setLayout('json');
        $authNamespace = new Zend_Session_Namespace('userInformation');
        $search = mysql_real_escape_string($_GET['term']);
        $user = new Application_Model_DbTable_CoreUser();
        $select = $user->select()->setIntegrityCheck(false);
        $select ->from(array('u' => 'core_user'), array('id' => 'user_id','label' => 'CONCAT(name," ",surname)'))
                ->joinInner(array('cu' => 'cell_user'), 'cu.user_id=u.user_id')
                ->where('u.name LIKE ?', '%'.$search.'%')
                ->where('cu.cell_id = ?', $authNamespace->cell_id_leader)
                ->where('cu.role_id NOT IN (1,5)')
                ->limit(8);
        $rs = $user->fetchAll($select);   
        $aux = $rs->toArray();  
        echo Zend_Json::encode($aux);
    }

    /**
     *   Action responsable to insert a future leader of cell on database.
     *   
     *   @access public
     *   @return boolean
     *
     *
     *
     *
     */
    public function saveFutureLeaderAction()
    {
        $this->_helper->layout()->setLayout('json');
        if($this->getRequest()->isPost())
        {
            $data = $this->getRequest()->getPost();
            $cell = new Application_Model_Cell();
            echo $cell->insertNewFutureLeader($data['idFutureLeader']);
        }
    }

    /**
     *   Action responsable to insert a future host of cell on database.
     *   
     *   @access public
     *   @return boolean
     *
     *
     *
     *
     */
    public function saveFutureHostAction()
    {
        $this->_helper->layout()->setLayout('json');
        if($this->getRequest()->isPost())
        {
            $data = $this->getRequest()->getPost();
            $cell = new Application_Model_Cell();
            echo $cell->insertNewFutureHost($data['cell_id'],$data['futureHost']);
        }
    }

    /**
     *   Action responsable to insert a future host of cell on database.
     *   
     *   @access public
     *   @return boolean
     *
     *
     *
     *
     */
    public function futureHostAction()
    {
        $this->_helper->layout()->setLayout('json');
        if($this->getRequest()->isPost())
        {
            $data = $this->getRequest()->getPost();
            $cell = new Application_Model_Cell();
            echo $cell->saveFutureHost($data['id'],$data['data']);
        }
    }

    /**
     *   Action responsable to insert a number of goal of participants.
     *   
     *   @access public
     *   @return boolean
     *
     *
     *
     *
     */
    public function saveGoalParticipantsAction()
    {
        $this->_helper->layout()->setLayout('json');
        if($this->getRequest()->isPost())
        {
            $data = $this->getRequest()->getPost();
            $cell = new Application_Model_Cell();
            echo $cell->saveGoalParticipants($data['cell_id'],$data['goalParticipants']);
        }
    }

    public function removeParticipantCellAction()
    {
        // remove-participant-cell
        $this->_helper->layout()->setLayout('json');
        if($this->getRequest()->isPost())
        {
            $data = $this->getRequest()->getPost();
            $cell = new Application_Model_Cell();
            echo $cell->removeParticipant($data['cell_id'],$data['user_id']);
        }
        return 0;
    }


}



