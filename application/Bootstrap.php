<?php

class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{

	/**
	 *
	 * Initiate the database connection and register in the variable $db for
	 * utilize that when it convenients.
	 *
	 * @access protected
	 * @return null
	 */
	protected function _initConnection()
	{
		$options    = $this->getOption('resources');
		$db_adapter = $options['db']['adapter'];
		$params     = $options['db']['params'];
		try
		{
			$db = Zend_Db::factory($db_adapter, $params);
			$db->getConnection();
			$registry = Zend_Registry::getInstance();
			$registry->set('db', $db);
		}
		catch( Zend_Exception $e)
		{
			echo "We are without connection in this moment. Please try it later.";
			exit;
		}
	}
	
	/**
	 *
	 * Initiate session of php in the system.
	 *
	 * @access protected
	 * @return null
	 */
	protected function _initSession()
	{
		Zend_Session::start();
	}
	
	/**
	 *
	 * Load Acl to load all of permissions.
	 *
	 * @access protected
	 * @return null
	 */
	protected function _initAcl()
	{
		$aclSetup = new Application_Acl_Setup();
		$allow = new Application_Plugin_Auth();
	}
	
	protected function _initMail()
	{
		$config = array(
				'auth' => 'login',
				'username' => 'contato@ibcbh.com',
				'password' => 'ibcbh123',
				'ssl' => 'ssl',
				'port' => '465'
		);
	
		$transport = new Zend_Mail_Transport_Smtp('smtp.gmail.com', $config);
		$registry = Zend_Registry::getInstance();
		$registry->set('mail',$transport);
	}
}

