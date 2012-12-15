<?php

class Application_Model_Participantes
{

	public function retornaParticipantes($cellId)
	{
		$cell = new Application_Model_DbTable_Cell();
		$select = $cell->select()->setIntegrityCheck(false);
		$select	->from(array('c' => 'cell'), array('cell_id'))
				->joinInner(array('m' => 'cell_user'),'c.cell_id = m.cell_id', array('user_id','position' => 'role_id') )
				->joinInner(array('mr' => 'cell_role') , 'm.role_id = mr.role_id', array('role'=>'name'))
				->joinInner(array('a' => 'core_user'),'m.user_id = a.user_id', array('name','surname','gender','nickname','birthday' => 'DATE_FORMAT(birthday,"%d/%m/%Y")'))
				->joinInner(array('b' => 'core_user_information'),'m.user_id = b.user_id', array('type','baptized'))
				->where('c.cell_id = ?', $cellId);
		return $cell->fetchAll($select);
	}
	
	public function retornaForms($members)
	{
		$forms = array();
		foreach($members as $participantsData){
			$participantesForm = new Application_Form_Participantes();
			$participantesForm->setUserId($participantsData->user_id);
			$participantesForm->setUserName($participantsData->name." ".$participantsData->surname);
			$participantesForm->initForm($participantsData->user_id);
			$values = array (
					"cell_id"	=> $participantsData->cell_id,
					"name" 		=> $participantsData->name." ".$participantsData->surname,
					"user_id"	=> $participantsData->user_id,
					"nickname"	=> $participantsData->nickname,
					"gender"	=> $participantsData->gender,
					"birthday"	=> $participantsData->birthday,
					"baptized"	=> $participantsData->baptized,
					"position"	=> $participantsData->position
			);
			$participantesForm->populate($values);
			array_push($forms,$participantesForm);
		}
		return $forms;
	}
}

