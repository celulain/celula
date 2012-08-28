<?php

class Application_Model_Cell
{

	public function addMember($data)
	{
		$userId = $this->saveUserDetailed($data);
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
	
	public function saveUserDetailed($data)
	{
		$userDetailed = new Application_Model_DbTable_CoreUserDetailed();
		$name = explode(" ",$data['new_name']);
		$surname = $this->returnSurname($data['new_name']);
		$newUserDetailed = $userDetailed->createRow();
		$newUserDetailed->gender = $data['new_sex'];
		$newUserDetailed->name = $name[0];
		$newUserDetailed->surname = $surname;
		$newUserDetailed->nickname = $data['new_nick'];
		$newUserDetailed->birthday = $data['new_birthday'];
		return $newUserDetailed->save();
	}
	
	public function saveUserAddress($data,$userId)
	{
		$userAddress = new Application_Model_DbTable_CoreUserAddress();
		$newUserAddress = $userAddress->createRow();
		$newUserAddress->user_id = $userId;
		$newUserAddress->city_id = 0;
		$newUserAddress->save();
	}
	
	public function saveUserInformation($data,$userId)
	{
		$userInformation = new Application_Model_DbTable_CoreUserInformation();
		$newUserInformation = $userInformation->createRow();
		$newUserInformation->user_id = $userId;
		$newUserInformation->type = $data['baptized'];
		$newUserInformation->save();
	}
	
	public function saveCellUser($data,$userId)
	{
		$userCell = new Application_Model_DbTable_CellUser();
		$newUserCell = $userCell->createRow();
		$newUserCell->cell_id = $data['cell_id'];
		$newUserCell->user_id = $userId;
		$newUserCell->role_id = $data['role'];
		$newUserCell->date_start = new Zend_Db_Expr('NOW()');
		$newUserCell->save();
	}
}

