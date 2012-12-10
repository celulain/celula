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

}

