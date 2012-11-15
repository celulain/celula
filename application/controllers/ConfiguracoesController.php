<?php

class ConfiguracoesController extends Zend_Controller_Action
{

    public function init()
    {
        $this->_helper->layout()->setLayout('layout');
    }

    public function indexAction()
    {
        // action body
    }

    public function perfilAction()
    {
        $authNamespace = new Zend_Session_Namespace('userInformation');
        $userDetailed = new Application_Model_DbTable_CoreUserDetailed();
        if($this->getRequest()->isPost())
        {
        	$data = $this->getRequest()->getPost();
        	$user_detailed_row = $userDetailed->fetchRow($userDetailed->select()->where("user_id = ?",$authNamespace->user_id));
        	$user_detailed_row->name = $data['name'];
        	$user_detailed_row->surname = $data['surname'];
        	$user_detailed_row->gender = $data['gender'];
        	$user_detailed_row->birthday = $data['birthday'];
        	$user_detailed_row->nickname = $data['nickname'];
        	$user_detailed_row->save();
        }
        $row = $userDetailed->fetchRow($userDetailed->select()->where("user_id = ?",$authNamespace->user_id));
        $this->view->name = $row->name;
        $this->view->surname = $row->surname;
        $this->view->gender = $row->gender;
        $this->view->nickname = $row->nickname;
        $this->view->birthday = $row->birthday;
    }

    public function enderecoAction()
    {
        $authNamespace = new Zend_Session_Namespace('userInformation');
    	$userAddress = new Application_Model_DbTable_CoreUserAddress();
    	$user_row = $userAddress->fetchRow($userAddress->select()->where("user_id = ?",$authNamespace->user_id));
    	if($this->getRequest()->isPost())
        {
        	$data = $this->getRequest()->getPost();
        	$user_row->address = $data['address'];
        	$user_row->number = $data['number'];
        	$user_row->apartament = $data['apartament'];
        	$user_row->district = $data['district'];
        	$user_row->city_id = $data['city_id'];
        	$user_row->zip_code = $data['zip_code'];
        	$user_row->save();
        }
        $this->view->address = $user_row->address;
        $this->view->number = $user_row->number;
       	$this->view->apartament = $user_row->apartament;
        $this->view->district = $user_row->district;
        $this->view->city_id = $user_row->city_id;
        $this->view->zip_code = $user_row->zip_code;
    }

    public function contatoAction()
    {
    	$authNamespace = new Zend_Session_Namespace('userInformation');
    	$userAddress = new Application_Model_DbTable_CoreUserAddress();
    	$user_row = $userAddress->fetchRow($userAddress->select()->where("user_id = ?",$authNamespace->user_id));
    	if($this->getRequest()->isPost())
        {
        	$data = $this->getRequest()->getPost();
        	$user_row->phone = $data['phone'];
        	$user_row->save();
        }
        $this->view->phone = $user_row->phone;
    }

    public function senhaAction()
    {
        $authNamespace = new Zend_Session_Namespace('userInformation');
        $user = new Application_Model_DbTable_CoreUser();
        if($this->getRequest()->isPost())
        {
        	$data = $this->getRequest()->getPost();
        	$user_row = $user->fetchRow($user	->select()
        										->where("user_id = ?",$authNamespace->user_id)
        										->where("password = ?",sha1($data['old_password'])));
        	if($data['new_password'] == $data['confirm_password'])
        	{
	        	$user_row->password = sha1($data['new_password']);
	        	$user_row->save();
	        	$this->view->message = "ok";
        	}
        	else
        	{
        		$this->view->message = "failed";
        	}
        }
    }


}









