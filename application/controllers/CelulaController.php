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
        $this->_helper->layout()->setLayout('app');
    }

    public function frequenciaAction()
    {
        try{
    	$this->_helper->layout()->setLayout('layout');
    	$authNamespace = new Zend_Session_Namespace('userInformation');
        $cell = new Application_Model_Cell();
        $this->view->formNoteCell = new Application_Form_Addnotecell();
     //    $this->view->membersRows = $cell->returnMembers($authNamespace->cell_id_leader);
     //    $this->view->dateMeetings = $cell->dateMeeting($authNamespace->cell_id_leader);
     //    $this->view->presenceMeeting = $cell->presenceMeeting($authNamespace->cell_id_leader);
     //    $this->view->goalParticipants = $cell->returnGoalParticipants($authNamespace->cell_id_leader);
     //    $this->view->actualParticipants = $cell->returnGoalActualParticipants($authNamespace->cell_id_leader);
     //    $dateMultiplication = $cell->returnDateMultiplication($authNamespace->cell_id_leader);
     //    $this->view->amountDays = $cell->calculateDayMultiplication($dateMultiplication);
     //    $date = explode("-",$dateMultiplication);
     //    $this->view->dateMultiplication = $date[2]."/".$date[1]."/".$date[0];
     //    $this->view->amountWeeks = $cell->calculateWeeks($dateMultiplication);
    	// $this->view->cell_id = $authNamespace->cell_id_leader;
    }catch(Zend_Exception $e){
        echo $e->getMessage();
    }
    }

    public function cadastroAction()
    {
    	$this->_helper->layout()->setLayout('layout');
    	try{
    	$authNamespace = new Zend_Session_Namespace('userInformation');
		$cellHost = new Application_Model_DbTable_CellHost();
		$cell = new Application_Model_Cell();
		$cellProfileForm = new Application_Form_CellProfile();
		if($this->getRequest()->isPost())
		{
			$data = $this->getRequest()->getPost();
			$cell->profileCell($data,$authNamespace->cell_id_leader);
		}
		$cellHost = $cellHost->fetchRow($cellHost->select()->where("cell_id = ?",$authNamespace->cell_id_leader));
		$values = array	(
							"cell_id" 		=> $authNamespace->cell_id_leader,
							"address" 		=> $cellHost->address,
							"number" 		=> $cellHost->number,
							"apartament" 	=> $cellHost->apartament,
							"district" 		=> $cellHost->district,
							"city" 			=> $cellHost->city,
							"zip_code" 		=> $cellHost->zip_code
						);
		$cellProfileForm->populate($values);
		$this->view->cellProfileForm = $cellProfileForm;
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
    	$newParticipantForm = new Application_Form_Participantes();
    	$newParticipantForm->setCellId($authNamespace->cell_id_leader);
    	if($this->getRequest()->isPost())
    	{
    		$data = $this->getRequest()->getPost();
    		if($newParticipantForm->isValid($data))
    		{
    			$cellClass->saveMember($data,$data['user_id']);
    			$newParticipantForm->reset();
    		}
    		else
    		{
    			if($newParticipantForm->isErrors())
    			{
    				echo "tem erros";
    				print_r($newParticipantForm->getMessages());
    				exit;
    			}
    		}
    	}
    	
    	$participantes = new Application_Model_Participantes();
    	$members = $participantes->retornaParticipantes($authNamespace->cell_id_leader);
    	$forms = $participantes->retornaForms($members);
    	$newParticipantForm->initForm();
    	$this->view->newParticipantForm = $newParticipantForm->returnForm();
    	$this->view->cell_id = $authNamespace->cell_id_leader;
    	$this->view->membersRows = $members;
    	$this->view->participantesForm = $forms;
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















