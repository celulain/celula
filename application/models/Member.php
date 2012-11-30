<?php

class Application_Model_Member
{
	public function newMember($data)
	{
		$userId = $this->saveUserDetailed($data);
		$this->saveUserAddress($data,$userId);
		$this->saveUserInformation($data,$userId);
		$this->saveUserSystem($data,$userId);
	}

	public function saveUserDetailed($data)
	{
		$userDetailed = new Application_Model_DbTable_CoreUserDetailed();
		$newUserDetailed = $userDetailed->createRow();
		$newUserDetailed->gender = $data['gender'];
		$newUserDetailed->name = $data['name'];
		$newUserDetailed->surname = $data['surname'];
		$newUserDetailed->nickname = $data['nickname'];
		if($data['birthday'] == '0000-00-00' || $data['birthday'] == '')
			$newUserDetailed->birthday = new Zend_Db_Expr('NULL');
		else{
			$birthday = explode('/',$data['birthday']);
			$newUserDetailed->birthday = $birthday[2]."-".$birthday[1]."-".$birthday[0];
		}
		return $newUserDetailed->save();
	}

	public function saveUserAddress($data,$userId)
	{
		$userAddress = new Application_Model_DbTable_CoreUserAddress();
		$newUserAddress = $userAddress->createRow();
		$newUserAddress->user_id = $userId;
		$newUserAddress->address = $data['address'];
		$newUserAddress->number = $data['number'];
		$newUserAddress->apartament = $data['apartament'];
		$newUserAddress->district = $data['district'];
		$newUserAddress->city_id = $data['city'];
		$newUserAddress->zip_code = $data['zipcode'];
		$newUserAddress->phone = $data['phone'];
		$newUserAddress->save();
	}

	public function saveUserInformation($data,$userId)
	{
		$userInformation = new Application_Model_DbTable_CoreUserInformation();
		$newUserInformation = $userInformation->createRow();
		$newUserInformation->user_id = $userId;
		$newUserInformation->type = 1;
		$newUserInformation->baptized = 1;
		$newUserInformation->save();
	}

	public function saveUserSystem($data,$userId)
	{
		$userSystem = new Application_Model_DbTable_CoreUser();
		$newUserInformation = $userSystem->createRow();
		$newUserInformation->user_id = $userId;
		$newUserInformation->login = $data['username'];
		$newUserInformation->email = $data['email'];
		$newUserInformation->password = sha1("ibcbh");
		$newUserInformation->register_date = new Zend_Db_Expr('NOW()');
		$newUserInformation->save();
	}

}

