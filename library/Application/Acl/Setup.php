<?php

/**
 * 
 * Setup of Zend_Acl for the project. Zend_Acl give us roles and permissions of users inside the system.
 * @author andregonzaga
 *
 */
class Application_Acl_Setup
{
    /**
     * @var Zend_Acl
     */
    protected $_acl;

    /**
     * 
     * Constructor initializing Zend_Acl.
     * 
     * @access public
     * @return null
     */
    public function __construct()
    {
        $this->_acl = new Zend_Acl();
        $this->_initialize();
    }

    /**
     * 
     * Call all of rules of Zend_Acl.
     * 
     * @access protected
     * @return null
     */
    protected function _initialize()
    {
        $this->_setupRoles();
        $this->_setupResources();
        $this->_setupPrivileges();
        $this->_saveAcl();
    }

    /**
     * 
     * Setup roles of system. We have 2 types of users nowadays: guest and user.
     * 
     * @access protected
     * @return null
     */
    protected function _setupRoles()
    {
        $this->_acl->addRole( new Zend_Acl_Role('guest') );
        $this->_acl->addRole( new Zend_Acl_Role('user') );
        $this->_acl->addRole( new Zend_Acl_Role('discipulador') );
        $this->_acl->addRole( new Zend_Acl_Role('coordenador') );
        $this->_acl->addRole( new Zend_Acl_Role('pastor_rede') );
        $this->_acl->addRole( new Zend_Acl_Role('pastor') );
        $this->_acl->addRole( new Zend_Acl_Role('admin') );
    }

    /**
     * 
     * Load all of resources (controllers) of system. If it's created another controller
     * we should add here.
     * 
     * @access protected
     * @return null
     */
    protected function _setupResources()
    {
        $this->_acl->addResource( new Zend_Acl_Resource('auth') );
    	$this->_acl->addResource( new Zend_Acl_Resource('index') );
    	$this->_acl->addResource( new Zend_Acl_Resource('celula') );
    	$this->_acl->addResource( new Zend_Acl_Resource('admin') );
        $this->_acl->addResource( new Zend_Acl_Resource('app') );
    	$this->_acl->addResource( new Zend_Acl_Resource('recursos') );
    	$this->_acl->addResource( new Zend_Acl_Resource('configuracoes') );
    	$this->_acl->addResource( new Zend_Acl_Resource('error') );
    }

    /**
     * 
     * For each action and controller we have to allow a permission of this for each
     * type of user.
     * 
     * @access protected
     * @return null
     */
    protected function _setupPrivileges()
    {
        $this->_acl	->allow( 'guest', 'admin',array('index','addmembro','dados','editmembro','pastores','perfil','sistema','dinamicas','louvor','licoes') )
                    ->allow( 'guest', 'index', 'index' )
                    ->allow( 'guest', 'app', 'index' )
        			->allow( 'guest', 'auth', array('index', 'login') );
        $this->_acl	->allow( 'user', 'index', 'index' )
        			->allow( 'user', 'celula', array('frequencia','membros','cadastro','perfil') )
        			->allow( 'user', 'recursos', array('licoes-de-celula','louvor','dinamicas') )
        			->allow( 'user', 'configuracoes', array('perfil','contato','endereco','senha') )
        			->allow( 'user', 'auth', array('index', 'login') );
        $this->_acl	->allow( 'admin', 'index', 'index' )
        			->allow( 'admin', 'admin',array('index','addmembro','dados','editmembro','pastores','perfil','sistema','dinamicas','louvor','licoes') )
        			->allow( 'admin', 'celula', array('frequencia','membros','cadastro','perfil') )
        			->allow( 'admin', 'recursos', array('licoes-de-celula','louvor','dinamicas') )
        			->allow( 'admin', 'configuracoes', array('perfil','contato','endereco','senha') )
        			->allow( 'admin', 'auth', array('index', 'login') );
    }

    /**
     * 
     * Save configuration of Zend_Acl.
     * 
     * @access protected
     * @return null
     */
    protected function _saveAcl()
    {
        $registry = Zend_Registry::getInstance();
        $registry->set('acl', $this->_acl);
    }
}