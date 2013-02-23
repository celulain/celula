<?php

class AuthController extends Zend_Controller_Action
{

    public function init()
    {
        $this->_helper->layout()->setLayout('login');
    }

    /**
     * As index action of this controller does not have any purpose so it redirects for
     * login action.
     *
     * @access public
     * @return helper redirector
     * @author Andre Gonzaga
     *
     */
    public function indexAction()
    {
        return $this->_helper->redirector('login');
    }

    /**
     * Method responsible to authenticate in a system and redirect to right controller
     * (if it exists).
     * It shows a login's form and check if action has sent some request. So Zend_auth
     * tries to authenticate
     * with the email and password of user using SHA1 alghoritm encryption. Finally, if
     * login is valid
     * redirect to module responsible.
     * 
     * @access public
     * @return helper redirector
     * @author Andre Gonzaga
     *
     */
    public function loginAction()
    {
    	try{
        $this->_flashMessenger = $this->_helper->getHelper('FlashMessenger');
    	$this->view->messages = $this->_flashMessenger->getMessages();
    	$form = new Application_Form_Login();
    	$this->view->form = $form;
    	if ( $this->getRequest()->isPost() ) 
    	{
    		$data = $this->getRequest()->getPost();
    		if ( $form->isValid($data) ) 
    		{
    			$login = $form->getValue('login');
    			$password = $form->getValue('password');
    			$dbAdapter = Zend_Db_Table::getDefaultAdapter();
    			$authAdapter = new Zend_Auth_Adapter_DbTable($dbAdapter);
    			$authAdapter->setTableName('core_user_system')
    						->setIdentityColumn('login')
    						->setCredentialColumn('password')
    						->setCredentialTreatment('SHA1(?)');
    			$authAdapter->setIdentity($login)
    						->setCredential($password);
    			$auth = Zend_Auth::getInstance();
    			$result = $auth->authenticate($authAdapter);
    			if ( $result->isValid() ) 
    			{
    				$info = $authAdapter->getResultRowObject(null, 'password');
    				$authNamespace = new Zend_Session_Namespace('userInformation');
    				$authNamespace->email = $info->email;
    				$authNamespace->user_id = $info->user_id;
    				$authNamespace->login = strtolower($login);
    				
    				// get cell of leader
    				$cellUser = new Application_Model_DbTable_CellUser();
    				$user_cell = $cellUser->fetchRow($cellUser->select()->where("user_id = ?",$authNamespace->user_id)->where("role_id = ?",1));
    				if(count($user_cell))
    				{
    					$authNamespace->cell_id_leader = $user_cell->cell_id;
    				}
    				
					if($authNamespace->user_id == 1)
					{
						return $this->_helper->redirector->goToRoute( array('controller' => 'admin', 'action' => 'index'), null, true);
					}

				    $session = new Zend_Session_Namespace('lastRequest');
                    if (isset($session->lastRequestUri)) {
                        $this->_redirect($session->lastRequestUri);
                        return;
                    }
                    else
                    {
                        return $this->_helper->redirector->goToRoute( array('controller' => 'celula' , 'action' => 'frequencia'), null, true);
                    }

    			} 
    			else 
    			{
    				$this->_helper->FlashMessenger('Usuário ou senha inválidos!');
    				//$this->_redirect('/index');
    			}
    		} 
    		else 
    		{
    			$form->populate($data);
    		}
    	}
    	}catch(Zend_Exception $e){
    		echo $e->getMessage();
    	}
    }

    
    /**
     * 
     * Logout of system clearing identity of user.
     * 
     * @access public
     * @return helper redirector
     * @author Andre Gonzaga
     */
    public function logoutAction()
    {
        $auth = Zend_Auth::getInstance();
	    $auth->clearIdentity();
        session_destroy();
	    return $this->_redirect('/index');
    }


}





