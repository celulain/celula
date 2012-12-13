<?php

class Application_Form_Addnotecell extends Zend_Form
{

    public function init()
    {
        $textDecorator = new Application_Model_TextDecorator();

    	$this->setAttrib('class', 'form-horizontal');
    	
    	$licao = new Zend_Form_Element_Text('licao');
    	$licao	->setLabel('Lição:')
		    	->setRequired(true)
		    	->addFilter('StripTags')
		    	->addFilter('StringTrim')
		    	->addValidator('NotEmpty')
		    	->setDecorators(array($textDecorator));

    	$acontecimentos = new Zend_Form_Element_Textarea('acontecimentos');
    	$acontecimentos	->setLabel('Acontecimentos:')
    					->setAttrib('cols', '40')
    					->setAttrib('rows', '4')
				    	->setRequired(false)
				    	->addFilter('StripTags')
				    	->addFilter('StringTrim')
				    	->addValidator('NotEmpty');

		$ministrante = new Zend_Form_Element_Text('ministrante');
    	$ministrante	->setLabel('Ministrante:')
				    	->setRequired(false)
				    	->addFilter('StripTags')
				    	->addFilter('StringTrim')
				    	->addValidator('NotEmpty')
				    	->setDecorators(array($textDecorator));
    	 
    				
    	$submit = new Zend_Form_Element_Submit('submit');
    	$submit	->setLabel('Salvar')
    			->setAttrib('id', 'submitbutton')
                ->setAttrib('class', 'btn btn-primary');
    	
    	$this->addElements(array($licao, $ministrante, $acontecimentos,  $submit));
    }


}

