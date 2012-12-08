<?php

class Application_Model_Church
{

	public function updateData($data)
	{
		$church = new Application_Model_DbTable_Church();
		$row = $church->fetchRow($church->select()->where('id = ? ', 1));
		if(!count($row))
		{
			$this->register($data,$church);
		}
		else
		{
			$this->edit($data,$row);
		}
	}

	public function register($data,Application_Model_DbTable_Church $church)
	{
		$newChurch = $church->createRow();
		$newChurch->name = $data['name'];
		$newChurch->short_name = $data['short_name'];
		$newChurch->email = $data['email'];
		$newChurch->address = $data['address'];
		$newChurch->number = $data['number'];
		$newChurch->apartament = $data['apartament'];
		$newChurch->district = $data['district'];
		$newChurch->city = $data['city'];
		$newChurch->zipcode = $data['zipcode'];
		$newChurch->save();
	}

	public function edit($data,$row)
	{
		$row->id = 1;
		$row->name = $data['name'];
		$row->short_name = $data['short_name'];
		$row->email = $data['email'];
		$row->address = $data['address'];
		$row->number = $data['number'];
		$row->apartament = $data['apartament'];
		$row->district = $data['district'];
		$row->city = $data['city'];
		$row->zipcode = $data['zipcode'];
		$row->save();
	}

	public function registerNewFunction($data)
	{
		$churchRole = new Application_Model_DbTable_ChurchRole();
		$newRole = $churchRole->createRow();
		$newRole->name = $data['name'];
		$newRole->save();
	}
}

