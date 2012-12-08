<?php

class Application_Form_Hierarquia extends Zend_Form
{

    public function init()
    {
        $this->setMethod('post');
        $textDecorator = new Application_Model_TextDecorator();

    	$this->setAttrib('class', 'form-horizontal');

       	$name = new Zend_Form_Element_Text('name');
    	$name	->setLabel('Nome do cargo:')
		    	->setRequired(true)
		    	->addFilter('StripTags')
		    	->addFilter('StringTrim')
		    	->addValidator('NotEmpty')
		    	->setDecorators(array($textDecorator));


		$submit = new Zend_Form_Element_Submit('submit');
    	$submit	->setLabel('Salvar')
    			->setAttrib('id', 'submitbutton')
                ->setAttrib('class', 'btn btn-primary');

    	$this->addElements(array($name, $submit));
    }


}

