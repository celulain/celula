<?php

class Application_Model_SelectDecorator extends Zend_Form_Decorator_Abstract
{
	protected $_format = '<label class="" for="%s">%s</label><div class="controls">%s</div>';
	
	public function render($content)
	{
		try{
		$element = $this->getElement();
		
		$name    = htmlentities($element->getFullyQualifiedName());
		$label   = htmlentities($element->getLabel());
		$id      = htmlentities($element->getId());
		$value   = htmlentities($element->getValue());
	
		$markup  = sprintf($this->_format, $name, $label, $element);
		return $markup;
		}catch(Zend_Exception $e){
			echo $e->getMessage();
		}
	}


}

