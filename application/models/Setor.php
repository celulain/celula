<?php

class Application_Model_Setor
{

	public function returnCells($userId)
	{
		try{
		$cellLeadership = new Application_Model_DbTable_CellLeadership();
		$cellLeadershipRow = $cellLeadership->fetchAll($cellLeadership->select()->where('leader_id = ?', $userId));
		$data = array();
		foreach($cellLeadershipRow as $leader)
		{
			$this->returnData($leader->user_id,$data);
		}
		return $data;
	}catch(Zend_Exception $e){
		echo $e->getMessage();
	}
	}

	public function returnData($leaderId,&$data)
	{
		$user = $this->returnLeaderData($leaderId);
		$cellId = $this->returnCellId($leaderId);
		$cellData = $this->returnDataCell($cellId);
		$dateMultiplication = $this->returnDateMultiplication($cellId);
		$presence = $this->returnPresence($cellId);
		$host = $this->returnHost($cellId);
		$futureLeader = $this->returnfutureLeader($cellId);
		$participants = $this->returnGoalParticipants($cellId);
		$aux = array(	'name' => $user->name . ' ' . $user->surname,
						'cell_id' => $cellId,
						'participants' => $participants,
						'date_multiplication' => $dateMultiplication,
						'presence' => $presence,
						'host' => $host,
						'futureLeader' => $futureLeader);
		array_push($data, $aux);
	}

	public function returnLeaderData($leaderId)
	{
		$user = new Application_Model_DbTable_CoreUser();
		return $user->fetchRow($user->select()->where('user_id = ?', $leaderId));
	}

	public function returnCellId($leaderId)
	{
		$cellUser = new Application_Model_DbTable_CellUser();
		$cellUserRow = $cellUser->fetchRow($cellUser->select()->where('user_id = ?', $leaderId)->where('role_id = 1'));
		return $cellUserRow->cell_id;
	}

	public function returnDataCell($cellId)
	{
		$cellData = new Application_Model_DbTable_CellDetailed();
		return $cellData->fetchRow($cellData->select()->where('cell_id = ?', $cellId));
	}

	public function returnDateMultiplication($cellId)
	{
		$cellDate = new Application_Model_DbTable_CellGoalDateMultiplication();
		$cellDateRow = $cellDate->fetchRow($cellDate->select()->where('cell_id = ?', $cellId));
		$date = explode('-',$cellDateRow->multiplication);
		return $date[2].'/'.$date[1].'/'.$date[0];
	}

	public function returnPresence($cellId)
	{
		$presence = new Application_Model_DbTable_CellMeeting();
		$presenceRow = $presence->fetchAll($presence->select()->where('cell_id = ?', $cellId)->limit(4)->order('meeting_id DESC'));
		$aux = array();
		foreach($presenceRow as $presence)
		{
			array_push($aux, $presence->presence);
		}
		return $aux;
	}

	public function returnHost($cellId)
	{
		$host = new Application_Model_DbTable_CellGoalFutureHost();
		$hostRow = $host->fetchAll($host->select()->where('cell_id = ?', $cellId));
		$aux = array();
		foreach($hostRow as $host)
		{
			$flag = array(	'name' 	=> $host->name,
							'um'	=> $host->um,
							'dois'	=> $host->dois,
							'tres'	=> $host->tres,
							'quarto'=> $host->quatro,
							'cinco'	=> $host->cinco);

			array_push($aux, $flag);
		}
		return $aux;
	}

	public function returnfutureLeader($cellId)
	{
		$cellUser = new Application_Model_DbTable_CellUser();
		$cellUserRow = $cellUser->fetchAll($cellUser->select()->where('cell_id = ?', $cellId)->where('role_id = 5'));
		$aux = array();
		foreach ($cellUserRow as $user) 
		{
			$futureLeader = new Application_Model_DbTable_CellGoalFutureLeader();
			$futureLeaderRow = $futureLeader->fetchAll($futureLeader->select()->where('user_id = ?', $user->user_id));
			foreach($futureLeaderRow as $futureLeader)
			{
				$nameLeader = $this->returnLeaderData($futureLeader->user_id);
				$flag = array(	'name' 	=> $nameLeader->name . ' ' . $nameLeader->surname,
								'um'	=> $futureLeader->um,
								'dois'	=> $futureLeader->dois,
								'tres'	=> $futureLeader->tres,
								'quarto'=> $futureLeader->quatro,
								'cinco'	=> $futureLeader->cinco,
								'seis'	=> $futureLeader->seis,
								'sete'	=> $futureLeader->sete);
				
				array_push($aux, $flag);
			}
		}
		return $aux;
	}

	public function returnGoalParticipants($cellId)
	{
		$participants = new Application_Model_DbTable_CellGoalParticipants();
		$participantsRow = $participants->fetchRow($participants->select()->where('cell_id = ?', $cellId));
		return $participantsRow->participants;
	}
}

