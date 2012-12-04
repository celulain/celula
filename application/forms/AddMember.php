<?php

class Application_Form_AddMember extends Zend_Form
{

    public function init()
    {
    	$this->setMethod('post');
        $textDecorator = new Application_Model_TextDecorator();

    	$this->setAttrib('class', 'form-horizontal');

       	$name = new Zend_Form_Element_Text('name');
    	$name	->setLabel('Nome:')
		    	->setRequired(true)
		    	->addFilter('StripTags')
		    	->addFilter('StringTrim')
		    	->addValidator('NotEmpty')
		    	->setDecorators(array($textDecorator));

    	$surname = new Zend_Form_Element_Text('surname');
    	$surname	->setLabel('Sobrenome:')
		    		->setRequired(true)
			    	->addFilter('StripTags')
			    	->addFilter('StringTrim')
			    	->addValidator('NotEmpty')
			    	->setDecorators(array($textDecorator));

    	$email = new Zend_Form_Element_Text('email');
    	$email	->setLabel('Email:')
		    	->setRequired(true)
		    	->addFilter('StripTags')
		    	->addFilter('StringTrim')
		    	->addValidator('NotEmpty')
		    	->setDecorators(array($textDecorator));

		$gender = new Zend_Form_Element_Radio('gender');
    	$gender	->setLabel('Sexo:')
			    	->setRequired(true)
			    	->addMultiOptions(array(
			    			'1' => 'Masculino',
			    			'2' => 'Feminino'))
    				->setSeparator('')
                    ->addDecorators(array(
                        array('ViewHelper'),
                        array('Errors'),
                        array('Description', array('tag' => 'p', 'class' => 'description')),
                        array('HtmlTag', array('tag' => 'div', 'class' => 'control-group-radio')),
                        array('Label', array('tag' => 'div', 'class' => 'control-group-radio-label')),
                    ));

        $cpf = new Zend_Form_Element_Text('cpf');
    	$cpf	->setLabel('CPF:')
		    	->setRequired(true)
		    	->addFilter('StripTags')
		    	->addFilter('StringTrim')
		    	->addValidator('NotEmpty')
		    	->setDecorators(array($textDecorator));

		$rg = new Zend_Form_Element_Text('rg');
    	$rg	->setLabel('RG:')
		    	->setRequired(true)
		    	->addFilter('StripTags')
		    	->addFilter('StringTrim')
		    	->addValidator('NotEmpty')
		    	->setDecorators(array($textDecorator));

        $birthday = new Zend_Form_Element_Text('birthday');
    	$birthday	->setLabel('Data de Nascimento:')
		    		->setRequired(true)
			    	->addFilter('StripTags')
			    	->addFilter('StringTrim')
			    	->addValidator('NotEmpty')
			    	->setDecorators(array($textDecorator));

		$address = new Zend_Form_Element_Text('address');
    	$address	->setLabel('Logradouro:')
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
			    	->addValidator('NotEmpty')
			    	->setDecorators(array($textDecorator));  

		$district = new Zend_Form_Element_Text('district');
    	$district	->setLabel('Bairro:')
		    		->setRequired(true)
			    	->addFilter('StripTags')
			    	->addFilter('StringTrim')
			    	->addValidator('NotEmpty')
			    	->setDecorators(array($textDecorator)); 

		$zipcode = new Zend_Form_Element_Text('zipcode');
    	$zipcode	->setLabel('CEP:')
		    		->setRequired(true)
			    	->addFilter('StripTags')
			    	->addFilter('StringTrim')
			    	->addValidator('NotEmpty')
			    	->setDecorators(array($textDecorator));	

		$phone = new Zend_Form_Element_Text('phone');
    	$phone	->setLabel('Telefone:')
		    		->setRequired(true)
			    	->addFilter('StripTags')
			    	->addFilter('StringTrim')
			    	->addValidator('NotEmpty')
			    	->setDecorators(array($textDecorator));	

		$state = new Zend_Form_Element_Select('state');
		$state 		->setLabel('Estado:')
					->setSeparator('')
                    ->addDecorators(array(
                        array('ViewHelper'),
                        array('Errors'),
                        array('Description', array('tag' => 'p', 'class' => 'description')),
                        array('HtmlTag', array('tag' => 'div', 'class' => 'control-group-radio')),
                        array('Label', array('tag' => 'div', 'class' => 'control-group-radio-label')),
                    ));
        $states = new Application_Model_DbTable_SysState();
		foreach ($states->fetchAll() as $c) 
		{
		    $state->addMultiOption($c->id, utf8_encode($c->name));
		}
		$state->setValue(11); // Minas Gerais 


        $cities = new Zend_Form_Element_Select('city');
		$cities 	->setLabel('Cidade:')
					->setSeparator('')
                    ->addDecorators(array(
                        array('ViewHelper'),
                        array('Errors'),
                        array('Description', array('tag' => 'p', 'class' => 'description')),
                        array('HtmlTag', array('tag' => 'div', 'class' => 'control-group-radio')),
                        array('Label', array('tag' => 'div', 'class' => 'control-group-radio-label')),
                    ));
        $city = new Application_Model_DbTable_SysCity();
        $select = $city->select()->where('state = ?', 11); // Minas Gerais
        $flag = $city->fetchAll($select);
		foreach ($flag as $c) 
		{
		    $cities->addMultiOption($c->id, utf8_encode($c->name));
		}
		$cities->setValue(2700);


		$submit = new Zend_Form_Element_Submit('submit');
    	$submit	->setLabel('Salvar')
    			->setAttrib('id', 'submitbutton')
                ->setAttrib('class', 'btn btn-primary');

    	$this->addElements(array($name, $surname, $email, $gender, $cpf, $rg, $birthday, $address, $number, 
    		$apartament, $district, $zipcode, $phone, $state, $cities, $submit));
    }


}

