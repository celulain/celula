<?php

class CelulaController extends Zend_Controller_Action
{

    public function init()
    {
    	
    	$contextSwitch = $this->_helper->getHelper('contextSwitch');
    	$contextSwitch->addActionContexts(array(
    			'save'=> 'json',
    			'read'=> 'json'
    			))
    			->initContext();
    }

    public function indexAction()
    {
        // action body
    }

    public function frequenciaAction()
    {
    	$this->_helper->layout()->setLayout('layout');
    	$authNamespace = new Zend_Session_Namespace('userInformation');
        $cell = new Application_Model_DbTable_Cell();
    	$select = $cell->select()->setIntegrityCheck(false);
    	$select	->from(array('c' => 'cell'), array('cell_id'))
    			->joinInner(array('m' => 'cell_user'),'c.cell_id = m.cell_id', array('user_id') )
		    	->joinInner(array('mr' => 'cell_role') , 'm.role_id = mr.role_id', array('role'=>'name'))
		    	->joinInner(array('a' => 'core_user_detailed'),'m.user_id = a.user_id', array('name'=>'name','surname'=>'surname'))
		    	->joinInner(array('b' => 'core_user_information'),'m.user_id = b.user_id', array('type'))
		    	->where('c.cell_id = ?', $authNamespace->cell_id_leader);
    	$this->view->cell_id = $authNamespace->cell_id_leader;
    	$this->view->membersRows = $cell->fetchAll($select);
    }

    public function cadastroAction()
    {
    	$this->_helper->layout()->setLayout('layout');
    	try{
    	$authNamespace = new Zend_Session_Namespace('userInformation');
		$cellHost = new Application_Model_DbTable_CellHost();
		if($this->getRequest()->isPost())
		{
			$data = $this->getRequest()->getPost();
			$cellHostRow = $cellHost->fetchRow($cellHost->select()->where("cell_id = ?",$authNamespace->cell_id_leader));
			$cellHostRow->address = $data['address'];
			$cellHostRow->number = $data['number'];
			$cellHostRow->apartament = $data['apartament'];
			$cellHostRow->district = $data['district'];
			$cellHostRow->city = $data['city'];
			$cellHostRow->zip_code = $data['zip_code'];
			$cellHostRow->save();
		}
		$cellHost = $cellHost->fetchRow($cellHost->select()->where("cell_id = ?",$authNamespace->cell_id_leader));
		$this->view->cell_id = $authNamespace->cell_id_leader;
		$this->view->address = $cellHost->address;
		$this->view->number = $cellHost->number;
		$this->view->apartament = $cellHost->apartament;
		$this->view->district = $cellHost->district;
		$this->view->city = $cellHost->city;
		$this->view->zip_code = $cellHost->zip_code;
    	}catch(Zend_Exception $e){
    		echo $e->getMessage();
    	}
       
    }

    public function membrosAction()
    {
    	$this->_helper->layout()->setLayout('layout');
    	try{
    	$authNamespace = new Zend_Session_Namespace('userInformation');
    	$cellClass = new Application_Model_Cell();
    	if($this->getRequest()->isPost())
    	{
    		$data = $this->getRequest()->getPost();
    		if(isset($data['new_name']) && $data['new_name'] != "")
    		{
    			$cellClass->addMember($data);
    		}
    	}
    	
    	$cell = new Application_Model_DbTable_Cell();
    	$select = $cell->select()->setIntegrityCheck(false);
    	$select	->from(array('c' => 'cell'), array('cell_id'))
    			->joinInner(array('m' => 'cell_user'),'c.cell_id = m.cell_id', array('user_id') )
		    	->joinInner(array('mr' => 'cell_role') , 'm.role_id = mr.role_id', array('role'=>'name'))
		    	->joinInner(array('a' => 'core_user_detailed'),'m.user_id = a.user_id', array('name'=>'name','surname'=>'surname'))
		    	->joinInner(array('b' => 'core_user_information'),'m.user_id = b.user_id', array('type'))
		    	->where('c.cell_id = ?', $authNamespace->cell_id_leader);
    	$this->view->cell_id = $authNamespace->cell_id_leader;
    	$this->view->membersRows = $cell->fetchAll($select);
    	}catch(Zend_Exception $e){
    		echo $e->getMessage();
    	}
    	
    }

    public function perfilAction()
    {
        // action body
    }

    public function readAction()
    {
        $this->_helper->layout()->setLayout('json');
    }

    public function saveAction()
    {
        $this->_helper->layout()->setLayout('json');
    }


}















