<?php

class Application_Model_Meeting
{

	public function returnMeetings($method,$params='',$paramsPut='')
	{
		if($method=="POST")
		{
			return $this->returnAllMeetings($params);
		}
		else if($method=="GET")
		{
			return $this->returnAllMeetings($params);
		}
		else
		{
			return $this->returnAllMeetings($params);
		}
	}

	public function returnAllMeetings($params)
	{
		$cell = new Application_Model_Cell();
		return $cell->dateMeeting($params['cell_id']);
	}

	public function editMeeting($data,$cellId)
	{
		$cellMeeting = new Application_Model_DbTable_CellMeeting();
		$cellMeetingRow = $cellMeeting->fetchRow($cellMeeting->select()->where('meeting_id = ? ',$data['meeting_id'])
								->where('cell_id = ?',$cellId));
		if(count($cellMeetingRow))
		{
			$this->saveMeetingData($cellMeetingRow,$data,$cellId);
		}
	}

	protected function saveMeetingData(Zend_Db_Table_Row $cellMeetingRow,$data,$cellId)
	{
		$cellMeetingRow->cell_id = $cellId;
		$cellMeetingRow->host_id = 1;
		$cellMeetingRow->lesson = $data['licao'];
		$cellMeetingRow->altar_boy = $data['ministrante'];
		$cellMeetingRow->events = $data['acontecimentos'];
		$dateMeeting = explode('/',$data['meeting_date']);
		if(isset($data['presenca'])) $cellMeetingRow->presence = $data['presenca'];
		$cellMeetingRow->date = $dateMeeting[2] . '-' . $dateMeeting[1] . '-' . $dateMeeting[0];
		$cellMeetingId = $cellMeetingRow->save();
		$this->saveMeetingPresence($cellMeetingRow,$data,$cellId,$cellMeetingId);
	}

	protected function saveMeetingPresence(Zend_Db_Table_Row $cellMeetingRow,$data,$cellId,$cellMeetingId)
	{
		$data['meeting_presence'] = substr($data['meeting_presence'], 0, -1);
		$presences = explode('*',$data['meeting_presence']);
		foreach($presences as $presenceMeeting)
		{
			$meeting = explode('||',$presenceMeeting);
			$aux = explode('_',$meeting[0]);
			$cellMeetingPresence = new Application_Model_DbTable_CellMeetingPresence();
			$cellMeetingPresenceRow = $cellMeetingPresence->fetchRow($cellMeetingPresence->select()->where('user_id = ?',$aux[1])
											->where('meeting_id = ?',$cellMeetingId));
			if(count($cellMeetingPresenceRow))
			{
				if($meeting[1] == 'false')
				{
					$cellMeetingPresenceRow->delete();
				}
			}
			else
			{
				if($meeting[1] == 'true')
				{
					$cellMeetingPresence = new Application_Model_DbTable_CellMeetingPresence();
					$cellMeeting = $cellMeetingPresence->createRow();
					$cellMeeting->meeting_id = $cellMeetingId;
					$cellMeeting->user_id = $aux[1];
					$cellMeeting->save();
					unset($cellMeeting);
					unset($cellMeetingPresence);
				}
			}
		}
	}

	public function returnPresence($cellId)
	{
		$cellMeeting = new Application_Model_DbTable_CellMeeting();
		$cellMeetingRow = $cellMeeting->fetchAll($cellMeeting->select()->where('cell_id = ?',$cellId));
		if(count($cellMeetingRow) > 3)
		{
			return "gráfico";
		}
		else
		{
			return "Ainda não blabla";
		}
	}

}

