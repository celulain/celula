<?php

class Application_Model_Cell
{

	public function saveMember($data,$userId=0)
	{
		$userId = $this->saveUserDetailed($data,$userId);
		$this->saveUserAddress($data,$userId);
		$this->saveUserInformation($data,$userId);
		$this->saveCellUser($data,$userId);
	}
	
	public function returnSurname($completeName)
	{
		$name = explode(" ",$completeName);
		$surname = "";
		for($i=1;$i<count($name);$i++)
		{
			$surname .= $name[$i]." ";
		}
		return $surname;
	}
	
	public function saveUserDetailed($data,$userId=0)
	{
		$userDetailed = new Application_Model_DbTable_CoreUserDetailed();
		if($userId)
		{
			$newUserDetailed = $userDetailed->fetchRow($userDetailed->select()->where("user_id = ?",$userId));
			$newUserDetailed->user_id = $userId;
		}
		else 
			$newUserDetailed = $userDetailed->createRow();
		
		$name = explode(" ",$data['name']);
		$surname = $this->returnSurname($data['name']);
		$newUserDetailed->gender = $data['gender'];
		$newUserDetailed->name = $name[0];
		$newUserDetailed->surname = $surname;
		$newUserDetailed->nickname = $data['nickname'];
		if($data['birthday'] == '0000-00-00' || $data['birthday'] == '')
			$data['birthday'] = new Zend_Db_Expr('NULL');
		$newUserDetailed->birthday = $data['birthday'];
		return $newUserDetailed->save();
	}
	
	public function saveUserAddress($data,$userId)
	{
		$userAddress = new Application_Model_DbTable_CoreUserAddress();
		$userAddress = $userAddress->fetchRow($userAddress->select()->where("user_id = ?",$userId));
		if(!count($userAddress))
			$userAddress = $userAddress->createRow();
		$userAddress->user_id = $userId;
		$userAddress->city_id = 0;
		$userAddress->save();
	}
	
	public function saveUserInformation($data,$userId)
	{
		$userInformation = new Application_Model_DbTable_CoreUserInformation();
		$userInformation = $userInformation->fetchRow($userInformation->select()->where("user_id = ?",$userId));
		if(!count($userInformation))
			$userInformation = $userInformation->createRow();
		$userInformation->user_id = $userId;
		if($data['baptized'] == 1)
			$type = 1;
		else
			$type = 2;
		$userInformation->type = $type;
		$userInformation->baptized = $data['baptized'];
		$userInformation->save();
	}
	
	public function saveCellUser($data,$userId)
	{
		$userCell = new Application_Model_DbTable_CellUser();
		$userCell = $userCell->fetchRow($userCell->select()->where("user_id = ?",$userId));
		if(!count($userCell))
			$userCell = $userCell->createRow();
		$userCell->cell_id = $data['cell_id'];
		$userCell->user_id = $userId;
		$userCell->role_id = $data['position'];
		$userCell->date_start = new Zend_Db_Expr('NOW()');
		$userCell->save();
	}
	
	public function returnMembers($cellId)
	{
		$cell = new Application_Model_DbTable_Cell();
		$select = $cell->select()->setIntegrityCheck(false);
		$select	->from(array('c' => 'cell'), array('cell_id'))
				->joinInner(array('m' => 'cell_user'),'c.cell_id = m.cell_id', array('user_id','position'=>'role_id') )
				->joinInner(array('mr' => 'cell_role') , 'm.role_id = mr.role_id', array('role'=>'name'))
				->joinInner(array('a' => 'core_user_detailed'),'m.user_id = a.user_id', array('name'=>'name','surname'=>'surname'))
				->joinInner(array('b' => 'core_user_information'),'m.user_id = b.user_id', array('type','baptized'))
				->where('c.cell_id = ?', $cellId);
		return $cell->fetchAll($select);
	}
	
	public function returnGoalParticipants($cellId)
	{
		$goalParticipants = new Application_Model_DbTable_CellGoalParticipants();
		$goalParticipants = $goalParticipants->fetchRow($goalParticipants->select()->where("cell_id = ?",$cellId));
		return $goalParticipants->participants;
	}
	
	public function returnGoalActualParticipants($cellId)
	{
		$actualCell = new Application_Model_DbTable_CellUser();
		$actualCell = $actualCell->fetchAll($actualCell->select()->where("cell_id = ?",$cellId)->where("role_id != 3"));
		return count($actualCell);
	}
	
	public function returnDateMultiplication($cellId)
	{
		$multiplicationDate = new Application_Model_DbTable_CellGoalDateMultiplication();
		$multiplicationDate = $multiplicationDate->fetchRow($multiplicationDate->select()->where("cell_id = ?",$cellId));
		return $multiplicationDate->multiplication;
	}
	
	public function calculateDayMultiplication($multiplicationDate)
	{
		$now = time(); 
		$multiplication = strtotime($multiplicationDate);
		$datediff = $now - $multiplication;
		return (floor($datediff/(60*60*24))*-1);
	}
	
	public function calculateWeeks($multiplicationDate)
	{
		$now = time();
		$multiplication = strtotime($multiplicationDate);
		$datediff = $now - $multiplication;
		return (floor($datediff/648000)*-1);
	}
}

