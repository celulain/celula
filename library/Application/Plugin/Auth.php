<?php

/**
 * 
 * Plugin of Zend_Auth to autheticate an user in the system.
 * @author andregonzaga
 *
 */
class Application_Plugin_Auth extends Zend_Controller_Plugin_Abstract
{
	
    /**
     * @var Zend_Auth
     */
    protected $_auth = null;
    
    /**
     * @var Zend_Acl
     */
    protected $_acl = null;
    
    /**
     * @var array
     */
    protected $_forbiddenRoute = array(
        'controller' => 'error',
        'action'     => 'forbidden',
        'module'     => 'default'
    );

    /**
     * 
     * Constructor initializing Zend_auth and Zend_Acl.
     * 
     * @access public
     * @return null
     */
    public function __construct()
    {
        $this->_auth = Zend_Auth::getInstance();
        $this->_acl = Zend_Registry::get('acl');
    }

    /**
     * 
     * Check if user is already logged or if user has permission to access a view.
     * 
     * @param Zend_Controller_Request_Abstract $request
     * @access public
     * @return null
     */
    public function preDispatch(Zend_Controller_Request_Abstract $request)
    {
    	if(!$this->_isAuthorized($request->getControllerName(),$request->getActionName()))
    	{
    		header("Location: /error/notallowed");
    		return;
    	}
    }

    /**
     * 
     * Check if user has permission to access a requested view.
     * 
     * @param string $controller
     * @param string $action
     * @access protected
     * @return null
     */
    protected function _isAuthorized($controller, $action)
    {
        $this->_acl = Zend_Registry::get('acl');
        if($this->_auth->hasIdentity() )
        {
        	$authNamespace = new Zend_Session_Namespace('userInformation');
        	
        	if($authNamespace->user_id == 1)
        	{
        		$user = "admin";
        	}
        	else 
        	{
        		$user = "user";
        	}
        }
        else
        {
        	$user = "guest";
        }
        if ( !$this->_acl->has( $controller ) )
       	{
       		return false;
        }
        else if( !$this->_acl->isAllowed( $user, $controller, $action ) )
        {
            return false;
        }
        return true;
    }
}