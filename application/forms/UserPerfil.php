<?php

class Application_Form_UserPerfil extends Zend_Form
{

    public function init()
    {
        $this->setName('login');
 
        $name = new Zend_Form_Element_Text('name');
        $name->setLabel('Nome:')
              ->setRequired(true)
              ->addFilter('StripTags')
              ->addFilter('StringTrim')
              ->addValidator('NotEmpty');
        
        $surname = new Zend_Form_Element_Text('surname');
        $surname->setLabel('Sobrenome:')
		        ->setRequired(true)
		        ->addFilter('StripTags')
		        ->addFilter('StringTrim')
		        ->addValidator('NotEmpty');
        
        $nickname = new Zend_Form_Element_Text('surname');
        $nickname->setLabel('Sobrenome:')
		        ->setRequired(true)
		        ->addFilter('StripTags')
		        ->addFilter('StringTrim')
		        ->addValidator('NotEmpty');
        
        $birthday = new Zend_Form_Element_Text('surname');
        $birthday->setLabel('Sobrenome:')
		        ->setRequired(true)
		        ->addFilter('StripTags')
		        ->addFilter('StringTrim')
		        ->addValidator('NotEmpty');
        
        $photo = new Zend_Form_Element_File('photo');
        $photo->setLabel('Upload an image:')
        		->setDestination('/Users/andregonzaga/Documents/workspace/sistema_ibcbh');
        // ensure only 1 file
        $photo->addValidator('Count', false, 1);
        // limit to 100K
        $photo->addValidator('Size', false, 102400);
        // only JPEG, PNG, and GIFs
        $photo->addValidator('Extension', false, 'jpg,png,gif');
 
        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setLabel('Logar')
               ->setAttrib('id', 'submitbutton');
 
        $this->addElements(array($name,$surname,$nickname,$birthday, $photo, $submit));
    }


}

