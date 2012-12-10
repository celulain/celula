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
		$userAddressRow = $userAddress->fetchRow($userAddress->select()->where("user_id = ?",$userId));
		if(!count($userAddressRow))
		{
			$newUserAddress = $userAddress->createRow();
			$newUserAddress->user_id = $userId;
			$newUserAddress->city_id = 2700;
			$newUserAddress->save();
		}
		else
		{
			$userAddressRow->user_id = $userId;
			$userAddressRow->city_id = 2700;
			$userAddressRow->save();
		}	
	}
	
	public function saveUserInformation($data,$userId)
	{
		$userInformation = new Application_Model_DbTable_CoreUserInformation();
		$userInformationRow = $userInformation->fetchRow($userInformation->select()->where("user_id = ?",$userId));
		if(!count($userInformationRow))
		{
			$newUserInformation = $userInformation->createRow();
			$newUserInformation->user_id = $userId;
			if($data['baptized'] == 1)
				$type = 1;
			else
				$type = 2;
			$newUserInformation->type = $type;
			if(!isset($data['baptized']) || $data['baptized'] == '')
				$data['baptized'] = 3;
			$newUserInformation->baptized = $data['baptized'];
			$newUserInformation->save();
		}
		else
		{
			$userInformationRow->user_id = $userId;
			if($data['baptized'] == 1)
				$type = 1;
			else
				$type = 2;
			$userInformationRow->type = $type;
			if(!isset($data['baptized']) || $data['baptized'] == '')
				$data['baptized'] = 3;
			$userInformationRow->baptized = $data['baptized'];
			$userInformationRow->save();
		}
	}
	
	public function saveCellUser($data,$userId)
	{
		$userCell = new Application_Model_DbTable_CellUser();
		$userCellRow = $userCell->fetchRow($userCell->select()->where("user_id = ?",$userId));
		if(!count($userCellRow))
		{
			$newUserCell = $userCell->createRow();
			$newUserCell->cell_id = $data['cell_id'];
			$newUserCell->user_id = $userId;
			if(isset($data['position']) || $data['position'] == '')
				$data['position'] = 3;
			$newUserCell->role_id = $data['position'];
			$newUserCell->date_start = new Zend_Db_Expr('NOW()');
			$newUserCell->save();
		}
		else
		{
			$userCellRow->cell_id = $data['cell_id'];
			$userCellRow->user_id = $userId;
			if(isset($data['position']) || $data['position'] == '')
				$data['position'] = 3;
			$userCellRow->role_id = $data['position'];
			$userCellRow->date_start = new Zend_Db_Expr('NOW()');
			$userCellRow->save();
		}
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
	
	public function profileCell($data,$cellId)
	{
		$cellHost = new Application_Model_DbTable_CellHost();
		$cellHostRow = $cellHost->fetchRow($cellHost->select()->where("cell_id = ?",$cellId));
		if(!count($cellHostRow))
		{
			$newCellHost = $cellHost->createRow();
			$newCellHost->address = $data['address'];
			$newCellHost->number = $data['number'];
			$newCellHost->apartament = $data['apartament'];
			$newCellHost->district = $data['district'];
			if(isset($data['city']) || $data['city'] == '')
				$data['city'] = 2700;
			$newCellHost->city = $data['city'];
			$newCellHost->zip_code = $data['zip_code'];
			$newCellHost->cell_id = $cellId;
			$newCellHost->save();
		}
		else
		{
			$cellHostRow->address = $data['address'];
			$cellHostRow->number = $data['number'];
			$cellHostRow->apartament = $data['apartament'];
			$cellHostRow->district = $data['district'];
			$cellHostRow->city = $data['city'];
			if(isset($data['city']) || $data['city'] == '')
				$data['city'] = 2700;
			$cellHostRow->zip_code = $data['zip_code'];
			$cellHostRow->cell_id = $cellId;
			$cellHostRow->save();
		}	
	}

	public function presenceMeeting($cellId)
	{
		$cell = new Application_Model_DbTable_CellMeeting();
		$select = $cell->select()->setIntegrityCheck(false);
		$select	->from(array('cm' => 'cell_meeting'), array('dateMeeting'=>'DATE_FORMAT(cm.date,"%d-%m")','meeting_id'))
				->joinInner(array('cu' => 'cell_user'),'cu.cell_id = cm.cell_id', array('user_id') )
				->joinLeft(array('cmp' => 'cell_meeting_presence'),'cu.user_id=cmp.user_id and cmp.meeting_id=cm.meeting_id',array('presence'=>'if(cmp.user_id is null,0,1)'))
				->where('cm.cell_id = ?', $cellId)
				->group(array('cm.date','cu.user_id'))
				->order('cm.date ASC');
		return $cell->fetchAll($select);
	}

	public function dateMeeting($cellId)
	{
		$cell_meeting = new Application_Model_DbTable_CellMeeting();
		$select = $cell_meeting->select()->setIntegrityCheck(false);
		$select	->from('cell_meeting',array('DATE_FORMAT(date,"%d/%m") AS dateMeeting','meeting_id'))
				->where("cell_id = ?",$cellId)
				->group('date')
				->limit(4)
				->order('date ASC');
		return $cell_meeting->fetchAll($select);
	}

	public function newLeader($data)
	{
		$cell_leadership = new Application_Model_DbTable_CellLeadership();
		$newCellLeadership = $cell_leadership->createRow();
		$newCellLeadership->user_id = $data['idmember'];
		$newCellLeadership->leader_id = $data['root_idmember'];
		$newCellLeadership->position = $data['type'];
		$newCellLeadership->save();
	}

	public function getParticipants($cellId)
	{
        $cell = new Application_Model_DbTable_CellUser();
        $select = $cell->select()->setIntegrityCheck(false);
		$select	->from(array('cu' => 'cell_user'), array('user_id','date_start','role_id'))
				->joinInner(array('cou' => 'core_user'),'cu.user_id=cou.user_id',array('name' => 'IF(cou.nickname="",CONCAT(cou.name," ",cou.surname),cou.nickname)','gender'))
				->joinInner(array('cua' => 'core_user_address'),'cua.user_id=cu.user_id',array('phone'))
				->joinInner(array('cui' => 'core_user_information'),'cui.user_id=cu.user_id',array('baptized'))
				->where('cu.cell_id = ?', $cellId);
		$data = $cell->fetchAll($select);
        $participants = array();
        foreach($data as $users)
        {
            $aux = array(
                    "user_id"       => $users->user_id,
                    "date_start"    => $users->date_start,
                    "role_id"       => $users->role_id,
                    "name"			=> $users->name,
                    "gender"		=> $users->gender,
                    "phone"			=> $users->phone,
                    "baptized"		=> $users->baptized
                );
            array_push($participants,$aux);
        }
        return $participants;
	}
}

