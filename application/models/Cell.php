<?php

class Application_Model_Cell
{

	public function saveMember($data,$userId=0)
	{
		if($userId != 0 && !isset($data['name']))
		{
			$this->saveCellUser($data,$userId);
		}
		else
		{
			$userId = $this->saveUserDetailed($data,$userId);
			$this->saveUserAddress($data,$userId);
			$this->saveUserInformation($data,$userId);
			$this->saveCellUser($data,$userId);
		}
		return $userId;
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
		$userDetailed = new Application_Model_DbTable_CoreUser();
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
			if(!isset($data['position']) || $data['position'] == '')
				$data['position'] = 3;
			elseif ($data['position'] == 5) 
			{
				$this->insertNewFutureLeader($userId,0);
			}
			$newUserCell->role_id = $data['position'];
			$newUserCell->date_start = new Zend_Db_Expr('NOW()');
			$newUserCell->save();
		}
		else
		{
			$userCellRow->cell_id = $data['cell_id'];
			$userCellRow->user_id = $userId;
			if(!isset($data['position']) || $data['position'] == '')
				$data['position'] = 3;
			elseif ($data['position'] == 5) 
			{
				$this->insertNewFutureLeader($userId);
			}
			$userCellRow->role_id = $data['position'];
			$userCellRow->date_start = new Zend_Db_Expr('NOW()');
			$userCellRow->save();
		}
	}

	/**
	*	Insert a new future leader on database.
	*
	*	@param $userId
	*	@access public
	*	@return boolean
	*/
	public function insertNewFutureLeader($userId, $inserted=true)
	{
		$futureLeader = new Application_Model_DbTable_CellGoalFutureLeader();
		$futureLeaderRow = $futureLeader->fetchRow($futureLeader->select()->where('user_id = ?',$userId));
		if(!count($futureLeaderRow))
		{
			$newRow = $futureLeader->createRow();
			$newRow->user_id = $userId;
			$newRow->um = 0;
			$newRow->dois = 0;
			$newRow->tres = 0;
			$newRow->quatro = 0;
			$newRow->cinco = 0;
			$newRow->seis = 0;
			$newRow->sete = 0;
			$newRow->save();

			if($inserted)
			{
				$userCell = new Application_Model_DbTable_CellUser();
				$userCellRow = $userCell->fetchRow($userCell->select()->where("user_id = ?",$userId));
				$userCellRow->role_id = 5;
				$userCellRow->save();
			}
			return true;
		}
	}
	
	/**
	*	Insert a new future host on database.
	*
	*	@param $cellId
	*	@param $futureHostName
	*	@access public
	*	@return boolean
	*/
	public function insertNewFutureHost($cellId,$futureHostName='')
	{
		$authNamespace = new Zend_Session_Namespace('userInformation');
		$futureHost = new Application_Model_DbTable_CellGoalFutureHost();
		$futureHostRow = $futureHost->fetchRow($futureHost->select()->where('cell_id = ?',$cellId));
		if(!count($futureHostRow) && $cellId == $authNamespace->cell_id_leader)
		{
			$newRow = $futureHost->createRow();
			$newRow->cell_id = $cellId;
			$newRow->name = $futureHostName;
			$newRow->um = 0;
			$newRow->dois = 0;
			$newRow->tres = 0;
			$newRow->quatro = 0;
			$newRow->cinco = 0;
			$newRow->save();
			return true;
		}
	}

	public function returnMembers($cellId)
	{
		$cell = new Application_Model_DbTable_Cell();
		$select = $cell->select()->setIntegrityCheck(false);
		$select	->from(array('c' => 'cell'), array('cell_id'))
				->joinInner(array('m' => 'cell_user'),'c.cell_id = m.cell_id', array('user_id','position'=>'role_id') )
				->joinInner(array('mr' => 'cell_role') , 'm.role_id = mr.role_id', array('role'=>'name'))
				->joinInner(array('a' => 'core_user'),'m.user_id = a.user_id', array('name'=>'name','surname'=>'surname'))
				->joinInner(array('b' => 'core_user_information'),'m.user_id = b.user_id', array('type','baptized'))
				->where('c.cell_id = ?', $cellId);
		return $cell->fetchAll($select);
	}
	
	public function returnGoalParticipants($cellId)
	{
		$goalParticipants = new Application_Model_DbTable_CellGoalParticipants();
		$goalParticipants = $goalParticipants->fetchRow($goalParticipants->select()->where("cell_id = ?",$cellId));
		if(count($goalParticipants))
			return $goalParticipants->participants;
		return 0;
	}
	
	public function returnGoalActualParticipants($cellId)
	{
		$actualCell = new Application_Model_DbTable_CellUser();
		$actualCell = $actualCell->fetchAll($actualCell->select()->where("cell_id = ?",$cellId)->where("role_id != 3"));
		return count($actualCell);
	}
	
	/**
	*	Returns a specify multiplicate date of cell, when it exists.
	*	
	*	@param $cellId
	*	@access private
	*	@return mixed
	*/
	private function returnDateMultiplication($cellId)
	{
		$multiplicationDate = new Application_Model_DbTable_CellGoalDateMultiplication();
		$multiplicationDate = $multiplicationDate->fetchRow($multiplicationDate->select()->where("cell_id = ?",$cellId));
		if(count($multiplicationDate))
			return $multiplicationDate->multiplication;
		return false;
	}

	/**
	*	Save a new multiplication date on database.
	*
	*	@param $cellId
	*	@param $date
	*	@access public
	*	@return boolean
	*/
	public function saveDateMultiplication($cellId,$date)
	{
		$multiplicationDate = new Application_Model_DbTable_CellGoalDateMultiplication();
		$multiplicationDateRow = $multiplicationDate->fetchRow($multiplicationDate->select()->where("cell_id = ?",$cellId));
		if(count($multiplicationDateRow))
		{
			$multiplicationDateRow->cell_id = $cellId;
			$multiplicationDateRow->multiplication = $date;
			$multiplicationDateRow->save();
		}
		else
		{
			$newRow = $multiplicationDate->createRow();
			$newRow->cell_id = $cellId;
			$newRow->multiplication = $date;
			$newRow->save();
		}
		return true;
	}

	/**
	*	Save a new future leader on database.
	*
	*	@param $cellId
	*	@param $data
	*	@access public
	*	@return boolean
	*/
	public function saveFutureLeaders($cellId,$data)
	{
		$futureLeader = new Application_Model_DbTable_CellGoalFutureLeader();
		$data = substr_replace($data ,"",-3);
		$rowLeaders = explode('|||',$data);
		$i=0;
		foreach($rowLeaders as $rows)
		{
			$leader = explode('|*|',$rows);
			$aux = explode('_',$leader[0]);
			$leaderId = $aux[2];
			$status = 0;
			if($leader[1] == 'icon-star' && $leaderId != 1)
			{
				$status = 1;
			}
			if($leaderId != 1 && $leaderId != "star")
			{
				$row = $futureLeader->fetchRow($futureLeader->select()->where('user_id = ?',$leaderId));
				$row->$aux[0] = $status;
				$row->save();
			}
			$i++;
		}
		return true;
	}

	/**
	*	Save a new future host on database.
	*
	*	@param $cellId
	*	@param $data
	*	@access public
	*	@return boolean
	*/
	public function saveFutureHost($id,$data)
	{
		$futureHost = new Application_Model_DbTable_CellGoalFutureHost();
		$data = substr_replace($data ,"",-3);
		$rowLeaders = explode('|||',$data);
		$i=0;
		foreach($rowLeaders as $rows)
		{
			$leader = explode('|*|',$rows);
			$aux = explode('_host',$leader[0]);
			if(count($aux) != 1)
			{
				$status = 0;
				if($leader[1] == 'icon-star')
				{
					$status = 1;
				}
				$row = $futureHost->fetchRow($futureHost->select()->where('id = ?',$id));
				$row->$aux[0] = $status;
				$row->save();
				if($i == 4) return true;
				$i++;
			}
		}
		return true;
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

	public function profileCellHour($data,$cellId)
	{
		$cellDetailed = new Application_Model_DbTable_CellDetailed();
		$cellDetailedRow = $cellDetailed->fetchRow($cellDetailed->select()->where("cell_id = ?",$cellId));
		if(count($cellDetailedRow))
		{
			$cellDetailedRow->week_day_id = $data['dayWeek'];
			$cellDetailedRow->hour_start = $data['hourStart'].'00';
			$cellDetailedRow->save();
		}
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
		$cell = new Application_Model_DbTable_CellUser();
		$select = $cell->select()->setIntegrityCheck(false);
		$select	->from(array('cu' => 'cell_user'))
				->joinInner(array('u' => 'core_user'),'u.user_id=cu.user_id',array('name' => 'IF(u.nickname="",CONCAT(u.name," ",u.surname),u.nickname)'))
				->joinLeft(array('cm' => 'cell_meeting'),'cu.cell_id = cm.cell_id', array('dateMeeting'=>'DATE_FORMAT(cm.date,"%d-%m")','meeting_id'))
				->joinLeft(array('cmp' => 'cell_meeting_presence'),'cu.user_id=cmp.user_id and cmp.meeting_id=cm.meeting_id',array('presence'=>'if(cmp.user_id is null,0,1)'))
				->where('cu.cell_id = ?', $cellId)
				->order('cm.date ASC');
		return $cell->fetchAll($select);
	}

	public function dateMeeting($cellId)
	{
		$cell_meeting = new Application_Model_DbTable_CellMeeting();
		$select = $cell_meeting->select()->setIntegrityCheck(false);
		$select	->from('cell_meeting',array('date' => 'DATE_FORMAT(date,"%d-%m-%Y")','id' => 'meeting_id'))
				->where("cell_id = ?",$cellId)
				->group('date')
				->order('date DESC');
		return $cell_meeting->fetchAll($select)->toArray();
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

	public function getProfileCell($cellId)
	{
		$cell = new Application_Model_DbTable_Cell();
        $select = $cell->select()->setIntegrityCheck(false);
		$select	->from(array('c' => 'cell'), array('date_start' => 'DATE_FORMAT(start_date,"%d-%m-%Y")'))
				->joinInner(array('cu' => 'cell_user'),'cu.cell_id=c.cell_id AND cu.role_id=1', array('user_id'))
				->joinInner(array('cou' => 'core_user'),'cu.user_id=cou.user_id',array('name' => 'IF(cou.nickname="",CONCAT(cou.name," ",cou.surname),cou.nickname)'))
				->joinInner(array('cd' => 'cell_detailed'),'cd.cell_id=c.cell_id',array('week_day_id','gender_id','age_group_id','hour_start'))
				->where('c.cell_id = ?', $cellId);
		$data = $cell->fetchRow($select);
        $information = array(
                "cell_id"       	=> $cellId,
                "date_start"    	=> $data->date_start,
                "leader_id"       	=> $data->user_id,
                "name"				=> $data->name,
                "week_day_id"		=> $data->week_day_id,
                "gender_id"			=> $data->gender_id,
                "age_group_id"		=> $data->age_group_id,
                "hour_start"		=> $data->hour_start
            );
        return $information;
	}

	/**
	*	Return a future leaders of cell.
	*
	*	@param $cellId
	*	@access private
	*	@return mixed
	*/
	private function returnFutureLeaders($cellId)
	{
		$cellUser = new Application_Model_DbTable_CellUser();
		$futureLeader = new Application_Model_DbTable_CellGoalFutureLeader();
		$ftLeaders = $cellUser->fetchAll($cellUser->select()->where('role_id = 5 AND cell_id = ?',$cellId));
		if(count($ftLeaders))
		{
			$result = array();
			foreach($ftLeaders as $futureLeaders)
			{
				$select = $futureLeader->select()->setIntegrityCheck(false);
				$select	->from(array('fl' => 'cell_goal_future_leader'))
						->joinInner(array('cou' => 'core_user'),'fl.user_id=cou.user_id',array('name' => 'IF(cou.nickname="",CONCAT(cou.name," ",cou.surname),cou.nickname)'))
						->where('fl.user_id = ?', $futureLeaders->user_id);
				$data = $futureLeader->fetchRow($select);
				$flag = array(
								'user_id'	=>	$futureLeaders->user_id,
								'name'		=> 	$data->name,
								'um'		=> 	$data->um,
								'dois'		=> 	$data->dois,
								'tres'		=> 	$data->tres,
								'quatro'	=> 	$data->quatro,
								'cinco'		=> 	$data->cinco,
								'seis'		=> 	$data->seis,
								'sete'		=> 	$data->sete,
							);
				array_push($result,$flag);
			}
			return $result;
		}	
		return false;
	}

	private function returnAmountMeetings($cellId)
	{
		$cellMeeting = new Application_Model_DbTable_CellMeeting();
		$amount = $cellMeeting->fetchAll($cellMeeting->select()->where('cell_id = ?',$cellId));
		if(count($amount) > 3)
			return 3;
		return count($amount);
	}

	public function returnFrequencyCell($cellId,$amountMeetings=4)
	{
		$cell = new Application_Model_DbTable_CellUser();
		$select = $cell->select()->setIntegrityCheck(false);
		$select	->from(array('cu' => 'cell_user'),array('user_id'))
				->joinInner(array('u' => 'core_user'),'u.user_id=cu.user_id',array('name' => 'IF(u.nickname="",CONCAT(u.name," ",u.surname),u.nickname)'))
				->joinInner(array('cr' => 'cell_role'),'cu.role_id=cr.role_id',array('roleName' => 'name'))
				->joinLeft(array('cm' => 'cell_meeting'),'cu.cell_id = cm.cell_id', array('meeting_id','date'))
				->joinLeft(array('cmp' => 'cell_meeting_presence'),'cmp.meeting_id=cm.meeting_id AND cu.user_id=cmp.user_id',
																	array('presence_id' => 'IFNULL(cmp.meeting_id,0)'))
				->where('cu.cell_id = ?', $cellId)
				->order('cm.date DESC');
				// echo $select;exit;
		return $cell->fetchAll($select);
	}

	public function returnMembersFrequency($cellId)
	{
		$cell = new Application_Model_DbTable_CellUser();
		$select = $cell->select()->setIntegrityCheck(false);
		$select	->from(array('cu' => 'cell_user'),array('user_id'))
				->joinInner(array('u' => 'core_user'),'u.user_id=cu.user_id',array('name' => 'IF(u.nickname="",CONCAT(u.name," ",u.surname),u.nickname)'))
				->joinInner(array('uf' => 'core_user_information'),'uf.user_id=cu.user_id',array())
				->joinInner(array('cr' => 'cell_role'),'cu.role_id=cr.role_id',array('roleName' => 'name'))
				->where('cu.cell_id = ?', $cellId)
				->where('cu.role_id != ?', 3);
		return $cell->fetchAll($select);
	}

	public function returnVisitantsFrequency($cellId)
	{
		$cell = new Application_Model_DbTable_CellUser();
		$select = $cell->select()->setIntegrityCheck(false);
		$select	->from(array('cu' => 'cell_user'),array('user_id'))
				->joinInner(array('u' => 'core_user'),'u.user_id=cu.user_id',array('name' => 'IF(u.nickname="",CONCAT(u.name," ",u.surname),u.nickname)'))
				->joinInner(array('uf' => 'core_user_information'),'uf.user_id=cu.user_id',array())
				->joinInner(array('cr' => 'cell_role'),'cu.role_id=cr.role_id',array('roleName' => 'name'))
				->where('cu.cell_id = ?', $cellId)
				->where('cu.role_id = ?', 3);
		return $cell->fetchAll($select);
	}

	public function returnDates($cellId,$amountMeetings=4)
	{
		$cell = new Application_Model_DbTable_CellMeeting();
		$select = $cell->select()->setIntegrityCheck(false);
		$select	->from(array('cell_meeting'),array('date_formated'=>'DATE_FORMAT(date,"%d/%m/%Y")','meeting_id'))
				->where('cell_id = ?',$cellId)
				->limit($amountMeetings)
				->order('date DESC');
		return $cell->fetchAll($select);
	}

	/**
	*
	*	Render a view of date multiplication on the celula's controller.
	*
	*	@param $cellId
	*	@access public
	*	@return Zend_View
	*/
	public function viewDateMultiplication($cellId)
	{
		$registry = Zend_Registry::getInstance();
		$view = $registry->get('view');
		$dateMultiplication = $this->returnDateMultiplication($cellId);
		if(!$dateMultiplication)
		{
			$view->dateMultiplication = false;
		}
		else
		{
	        $date = explode("-",$dateMultiplication);
	        $view->dateMultiplication = $date[2]."/".$date[1]."/".$date[0];
	        $view->amountDays = $this->calculateDayMultiplication($dateMultiplication);
	        $view->amountWeeks = $this->calculateWeeks($dateMultiplication);
		}
		return $view->render('frequencia/dateMultiplication.phtml');
	}

	/**
	*
	*	Render a view of future leader on the celula's controller.
	*
	*	@param $cellId
	*	@access public
	*	@return Zend_View
	*/
	public function viewFutureLeader($cellId)
	{
		$registry = Zend_Registry::getInstance();
		$view = $registry->get('view');
		$futureLeaders = $this->returnFutureLeaders($cellId);
		if(!$futureLeaders)
		{
			$view->futureLeaders = false;
		}
		else
		{
			$view->futureLeaders = $futureLeaders;
		}
		return $view->render('frequencia/futureLeader.phtml');
	}

	/**
	*
	*	Render a view of future host on the celula's controller.
	*
	*	@param $cellId
	*	@access public
	*	@return Zend_View
	*/
	public function viewFutureHost($cellId)
	{
		$registry = Zend_Registry::getInstance();
		$view = $registry->get('view');
		$futureHost = new Application_Model_DbTable_CellGoalFutureHost();
		$host = $futureHost->fetchRow($futureHost->select()->where('cell_id = ?',$cellId));
		if(!count($host))
		{
			$view->futureHost = false;
		}
		else
		{
			$view->futureHost = $host;
		}
		return $view->render('frequencia/futureHost.phtml');
	}

	/**
	*
	*	Render a view of actual and goal participants on the celula's controller.
	*
	*	@param $cellId
	*	@access public
	*	@return Zend_View
	*/
	public function viewParticipants($cellId)
	{
		$registry = Zend_Registry::getInstance();
		$view = $registry->get('view');
        $view->goalParticipants = $this->returnGoalParticipants($cellId);
        $view->actualParticipants = $this->returnGoalActualParticipants($cellId);
		return $view->render('frequencia/participants.phtml');
	}

	public function viewFrequency($cellId)
	{
		$registry = Zend_Registry::getInstance();
		$view = $registry->get('view');
		$amountMeetings = $this->returnAmountMeetings($cellId);
		$view->dates = $this->returnDates($cellId,$amountMeetings);
		$view->members = $this->returnMembersFrequency($cellId);
		$view->visitants = $this->returnVisitantsFrequency($cellId);
		$view->frequency = $this->returnFrequencyCell($cellId,$amountMeetings);
		return $view->render('frequencia/frequency.phtml');
	}

	/**
	*	Save a number of goal to participants.
	*
	*	@param $cellId
	*	@param $numberGoalParticipants
	*	@access public
	*	@return integer
	*/
	public function saveGoalParticipants($cellId,$numberGoalParticipants)
	{
		$goalParticipants = new Application_Model_DbTable_CellGoalParticipants();
		$goalParticipantsRow = $goalParticipants->fetchRow($goalParticipants->select()->where("cell_id = ?",$cellId));
		if(count($goalParticipantsRow))
		{
			$goalParticipantsRow->participants = $numberGoalParticipants;
			$goalParticipantsRow->date = new Zend_Db_Expr('NOW()');
			$goalParticipantsRow->save();
			return 1;
		}
		else
		{
			$newRow = $goalParticipants->createRow();
			$newRow->cell_id = $cellId;
			$newRow->participants = $numberGoalParticipants;
			$newRow->date = new Zend_Db_Expr('NOW()');
			$newRow->save();
			return 1;
		}
	}

	public function removeParticipant($cellId,$userId)
	{
		$cell = new Application_Model_DbTable_CellUser();
		$cellRow = $cell->fetchRow($cell->select()->where("cell_id = ?",$cellId)->where("user_id = ?",$userId));
		if(count($cellRow))
		{
			$cellRow->delete();
			return 1;
		}
		return 0;
	}

	public function saveNewMeeting($data,$cellId)
	{
		$cellMeeting = new Application_Model_DbTable_CellMeeting();
		$cellMeetingNew = $cellMeeting->createRow();
		$cellMeetingNew->cell_id = $cellId;
		$cellMeetingNew->host_id = 1;
		$cellMeetingNew->lesson = $data['licao'];
		$cellMeetingNew->altar_boy = $data['ministrante'];
		$cellMeetingNew->events = $data['acontecimentos'];
		$dateMeeting = explode('/',$data['dateMeeting']);
		$cellMeetingNew->date = $dateMeeting[2] . '-' . $dateMeeting[1] . '-' . $dateMeeting[0];
		$cellMeetindId = $cellMeetingNew->save();
		$this->saveNewMeetingPresence($data,$cellId,$cellMeetindId);
	}

	protected function saveNewMeetingPresence($data,$cellId,$meetingId)
	{
		$presences = explode('*',$data['presenceMeeting']);
		foreach($presences as $presenceMeeting)
		{
			$meeting = explode('||',$presenceMeeting);
			if($meeting[0] == 'true')
			{
				$cellMeetingPresence = new Application_Model_DbTable_CellMeetingPresence();
				$cellMeeting = $cellMeetingPresence->createRow();
				$cellMeeting->meeting_id = $meetingId;
				$aux = explode('_',$meeting[1]);
				$cellMeeting->user_id = $aux[1];
				$cellMeeting->save();
				unset($cellMeeting);
				unset($cellMeetingPresence);
			}
		}
	}

	public function lastMeetings($cellId)
	{
		$amountMeetings = $this->returnAmountMeetings($cellId);
		$cell = new Application_Model_DbTable_CellMeeting();
		$select = $cell->select()->setIntegrityCheck(false);
		$select	->from(array('cell_meeting'),array('date_formated'=>'DATE_FORMAT(date,"%d/%m/%Y")','meeting_id',
								'lesson','altar_boy','events'))
				->where('cell_id = ?',$cellId)
				->limit($amountMeetings)
				->order('date DESC');
		return $cell->fetchAll($select);
	}

	public function removeFutureHost($cellId)
	{
		$futureHost = new Application_Model_DbTable_CellGoalFutureHost();
		$futureHostRow = $futureHost->fetchRow($futureHost->select()->where("cell_id = ?",$cellId));
		if(count($futureHostRow))
		{
			$futureHostRow->delete();
		}
		return true;
	}
}

