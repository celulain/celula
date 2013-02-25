<?php

class Application_Form_Addnotecell extends Zend_Form
{

    public function init()
    {
        $textDecorator = new Application_Model_TextDecorator();
        $textAreaDecorator = new Application_Model_TextAreaDecorator();

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
				    	->setRequired(false)
				    	->addFilter('StripTags')
				    	->addFilter('StringTrim')
				    	->addValidator('NotEmpty')
                        ->setDecorators(array($textAreaDecorator));;

		$ministrante = new Zend_Form_Element_Text('ministrante');
    	$ministrante	->setLabel('Ministrante:')
				    	->setRequired(false)
				    	->addFilter('StripTags')
				    	->addFilter('StringTrim')
				    	->addValidator('NotEmpty')
				    	->setDecorators(array($textDecorator));

        // $range = new Zend_Form_Element_Range('range');
        // $range
        //     ->setLabel('Minimum and Maximum Amount')
        //     ->setAttributes(array(
        //         'min'  => '0',   // default minimum is 0
        //         'max'  => '100', // default maximum is 100
        //         'step' => '1',   // default interval is 1
        //     ));
        //     <div class="accordion-inner">
        //     <input class="span12" type="range">
        // </div>
    	 
        $presence = new Zend_Form_Element_Hidden("presenceMeeting");
        $date = new Zend_Form_Element_Hidden("dateMeeting");
    				
    	$submit = new Zend_Form_Element_Submit('button');
    	$submit	->setLabel('Salvar')
    			->setAttrib('id', 'submitbutton')
                ->setAttrib('class', 'btn btn-primary');
    	
    	$this->addElements(array($licao, $ministrante, $acontecimentos, $presence, $date, $submit));
    }


}

