<?php

class Application_Form_AddLeader extends Zend_Form
{

    public function init()
    {
        $textDecorator = new Application_Model_TextDecorator();
        $radioDecorator = new Application_Model_RadioDecorator();
    	$this->setAttrib('class', 'form-horizontal');
    	
    	$name = new Zend_Form_Element_Text('name');
    	$name	->setLabel('Nome:')
		    	->setRequired(true)
		    	->addFilter('StripTags')
		    	->addFilter('StringTrim')
		    	->addValidator('NotEmpty')
		    	->setDecorators(array($textDecorator));

    	$idmember = new Zend_Form_Element_Hidden("idmember");
    	$idmember->setRequired(true);

    	$root_name = new Zend_Form_Element_Text('root_name');
    	$root_name	->setLabel('Supervisor:')
		    	->setRequired(true)
		    	->addFilter('StripTags')
		    	->addFilter('StringTrim')
		    	->addValidator('NotEmpty')
		    	->setDecorators(array($textDecorator));

		$root_idmember = new Zend_Form_Element_Hidden("root_idmember");
		$root_idmember->setRequired(true);
    	 
    	$type = new Zend_Form_Element_Select('type');
    	$type		->setLabel('Função:')
			    	->setRequired(false)
                    ->setSeparator('')
                    ->addDecorators(array(
                        array('ViewHelper'),
                        array('Errors'),
                        array('Description', array('tag' => 'p', 'class' => 'description')),
                        array('HtmlTag', array('tag' => 'div', 'class' => 'control-group-radio')),
                        array('Label', array('tag' => 'div', 'class' => 'control-group-radio-label')),
                    ));

        $churchRole = new Application_Model_DbTable_ChurchRole();
        $flag = $churchRole->fetchAll();
		foreach ($flag as $c) 
		{
		    $type->addMultiOption($c->id, utf8_encode($c->name));
		}
    				
    	$submit = new Zend_Form_Element_Submit('submit');
    	$submit	->setLabel('Salvar')
    			->setAttrib('id', 'submitbutton')
                ->setAttrib('class', 'btn btn-primary');
    	
    	$this->addElements(array($name, $type, $idmember,  $root_name, $root_idmember,  $submit));
    }


}

