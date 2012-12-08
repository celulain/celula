<?php

class AdminController extends Zend_Controller_Action
{

    public function init()
    {
        $this->_helper->layout()->setLayout('admin');
        $contextSwitch = $this->_helper->getHelper('contextSwitch');
        $contextSwitch->addActionContexts(array('return-cities'=> 'json'))
            ->initContext();
    }

    public function indexAction()
    {
        // action body
    }

    public function dadosAction()
    {
        $this->_flashMessenger = $this->_helper->getHelper('FlashMessenger');
        $this->view->messages = $this->_flashMessenger->getMessages();
        $form = new Application_Form_Addchurch();
        $this->view->formAddChurch = $form;
        if ( $this->getRequest()->isPost() ) 
        {
            $data = $this->getRequest()->getPost();
            if ( $form->isValid($data) ) 
            {
                $church = new Application_Model_Church();
                $church->updateData($data);
                $form->populate($data);
            }
            else
            {
                $this->_helper->FlashMessenger('Usuário ou senha inválidos!');
                $form->populate($data);
            }
        }
        $churchDb = new Application_Model_DbTable_Church();
        $rowset = $churchDb->find(1);
        if($rowset)
        {
            $row = $rowset->current();
            $form->populate($row->toArray());
        }
    }

    public function pastoresAction()
    {
        $this->_flashMessenger = $this->_helper->getHelper('FlashMessenger');
        $this->view->messages = $this->_flashMessenger->getMessages();
        $form = new Application_Form_AddPriest();
        $this->view->formPriest = $form;
        if ( $this->getRequest()->isPost() ) 
        {
            $data = $this->getRequest()->getPost();
            if ( $form->isValid($data) ) 
            {
                $church = new Application_Model_Church();
                $church->registerPriest($data);
                $form->reset();
            }
            else
            {
                $this->_helper->FlashMessenger('Usuário ou senha inválidos!');
                $form->populate($data);
            }
        }
    }

    public function addmembroAction()
    {
        $this->_flashMessenger = $this->_helper->getHelper('FlashMessenger');
        $this->view->messages = $this->_flashMessenger->getMessages();
        $form = new Application_Form_AddMember();
        $this->view->formAddMember = $form;
        if ( $this->getRequest()->isPost() ) 
        {
            $data = $this->getRequest()->getPost();
            if ( $form->isValid($data) ) 
            {
                $member = new Application_Model_Member();
                $member->newMember($data);
                $form->reset();
            }
            else
            {
                $this->_helper->FlashMessenger('Usuário ou senha inválidos!');
                $form->populate($data);
            }
        }
    }

    public function editmembroAction()
    {
        // action body
    }

    public function sistemaAction()
    {
        // action body
    }

    public function perfilAction()
    {
        // action body
    }

    public function licoesAction()
    {
        // action body
    }

    public function louvorAction()
    {
        // action body
    }

    public function dinamicasAction()
    {
        // action body
    }

    public function returnCitiesAction()
    {
        $this->_helper->layout()->setLayout('json');
        $cities = new Application_Model_DbTable_SysCity();
        $request = $this->getRequest();
        $select = $cities->select()->where('state = ?', $request->getParam('state'));
        $return = "";
        $flag = $cities->fetchAll($select);
        foreach ($flag as $c) 
        {
            $return .= "<option id='".$c->id."'>".utf8_encode($c->name)."</option>";
        }
        echo $return;
    }

    public function addliderAction()
    {
        $this->_flashMessenger = $this->_helper->getHelper('FlashMessenger');
        $this->view->messages = $this->_flashMessenger->getMessages();
        $form = new Application_Form_AddLeader();
        $this->view->formAddLeader = $form;
        if ( $this->getRequest()->isPost() ) 
        {
            $data = $this->getRequest()->getPost();
            if ( $form->isValid($data) ) 
            {
                $member = new Application_Model_Cell();
                $member->newLeader($data);
                $form->reset();
            }
            else
            {
                $this->_helper->FlashMessenger('Usuário ou senha inválidos!');
                $form->populate($data);
            }
        }
    }

    public function editliderAction()
    {
        // action body
    }

    public function removeliderAction()
    {
        // action body
    }

    public function hierarquiaAction()
    {
        $this->_flashMessenger = $this->_helper->getHelper('FlashMessenger');
        $this->view->messages = $this->_flashMessenger->getMessages();
        $form = new Application_Form_Hierarquia();
        $this->view->formHierarquia = $form;
        if ( $this->getRequest()->isPost() ) 
        {
            $data = $this->getRequest()->getPost();
            if ( $form->isValid($data) ) 
            {
                $church = new Application_Model_Church();
                $church->registerNewFunction($data);
                $form->reset();
            }
            else
            {
                $this->_helper->FlashMessenger('Usuário ou senha inválidos!');
                $form->populate($data);
            }
        }
    }


}

