<?php

class Application_Form_CellProfile extends Zend_Form
{
	
	private $cellId;
	
	public function setCellId($cellId){ $this->cellId = $cellId; }
	public function getCellId(){ return $this->cellId; }
	
    public function init()
    {
        $textDecorator = new Application_Model_TextDecorator();
        $selectDecorator = new Application_Model_SelectDecorator();
        $buttonDecorator = new Application_Model_SubmitDecorator();
        
        $this->setAttrib('class', 'form-horizontal');
        
        $address = new Zend_Form_Element_Text('address');
        $address	->setLabel("Endereco:")
			        ->setRequired(true)
			        ->addFilter('StripTags')
			        ->addFilter('StringTrim')
			        ->addValidator('NotEmpty')
			        ->setDecorators(array($textDecorator));
        
        $number = new Zend_Form_Element_Text('number');
        $number		->setLabel('Numero:')
			        ->setRequired(true)
			        ->addFilter('StripTags')
			        ->addFilter('StringTrim')
			        ->addValidator('NotEmpty')
			        ->setDecorators(array($textDecorator));
        
        $apartament = new Zend_Form_Element_Text('apartament');
        $apartament	->setLabel('Complemento:')
			        ->setRequired(false)
			        ->addFilter('StripTags')
			        ->addFilter('StringTrim')
			        ->setDecorators(array($textDecorator));
        
        $district = new Zend_Form_Element_Text('district');
        $district	->setLabel('Bairro:')
			        ->setRequired(true)
			        ->addFilter('StripTags')
			        ->addFilter('StringTrim')
			        ->addValidator('NotEmpty')
			        ->setDecorators(array($textDecorator));
        
        $state = new Zend_Form_Element_Select('state');
    	$state		->setLabel('Estado:')
			    	->setRequired(true)
			    	->addMultiOptions(array(
			    			'1' => 'Minas Gerais',
			    			'2' => 'São Paulo'))
			    	->setSeparator('')
                    ->addDecorators(array(
                        array('ViewHelper'),
                        array('Errors'),
                        array('Description', array('tag' => 'p', 'class' => 'description')),
                        array('HtmlTag', array('tag' => 'div', 'class' => 'control-group-radio')),
                        array('Label', array('tag' => 'div', 'class' => 'control-group-radio-label')),
                    ));
        
        $city = new Zend_Form_Element_Select('city');
    	$city		->setLabel('Cidade:')
			    	->setRequired(true)
			    	->addMultiOptions(array(
			    			'1' => 'Belo Horizonte',
			    			'2' => 'Contagem'))
			    	->setSeparator('')
                    ->addDecorators(array(
                        array('ViewHelper'),
                        array('Errors'),
                        array('Description', array('tag' => 'p', 'class' => 'description')),
                        array('HtmlTag', array('tag' => 'div', 'class' => 'control-group-radio')),
                        array('Label', array('tag' => 'div', 'class' => 'control-group-radio-label')),
                    ));
        
        $zipcode = new Zend_Form_Element_Text('zip_code');
        $zipcode	->setLabel('CEP:')
			        ->setRequired(false)
			        ->addFilter('StripTags')
			        ->addFilter('StringTrim')
			        ->addValidator('NotEmpty')
			        ->setDecorators(array($textDecorator));
        
        $submit = new Zend_Form_Element_Submit('submit');
        $submit	->setLabel('Salvar')
        		->setAttrib('id', 'submitbutton')
        		->setDecorators(array($buttonDecorator));
         
        $cellId = new Zend_Form_Element_Hidden("cell_id");
        $cellId ->setValue($this->getCellId());
        
        $this->addElements(array($address, $number, $apartament, $district, $state, $city, $zipcode, $submit, $cellId));
        
        //$this->addDecorator(array('FooBar' => 'HtmlTag'), array('tag' => 'div'));
        
       $this->setDecorators(array(
		    'FormElements',
		    array('HtmlTag', array('tag' => 'dl')),
		    'Form'
		));
        
    }


}

