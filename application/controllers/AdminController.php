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
        // action body
    }

    public function pastoresAction()
    {
        // action body
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
        // action body
    }

    public function editliderAction()
    {
        // action body
    }

    public function removeliderAction()
    {
        // action body
    }


}



























