<?php

class Application_Model_Presence
{
	public function returnPresence($cellId)
	{
		$presenceMeeting = new Application_Model_DbTable_CellMeeting();
		$meetings = $presenceMeeting->fetchAll($presenceMeeting->select()->where('cell_id = ?',$cellId));
		if(count($meetings) > 3)
		{
			$presence = "date,presence\n";
			foreach($meetings as $meeting){
				if($meeting->presence > 0)
					$presence .= $meeting->date.",".$meeting->presence."\n";
			}
			return $presence;
		}
		else
		{
			return 0;
		}
		
	}
}

