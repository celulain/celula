<?php

class Application_Model_SubmitDecorator extends Zend_Form_Decorator_Abstract
{
	protected $_format = '<div class="form-actions"><button type="submit" class="btn btn-primary" id="%s" name="%s">%s</button></div>';
	
	public function render($content)
	{
		$element = $this->getElement();
		$name    = htmlentities($element->getFullyQualifiedName());
		$label   = htmlentities($element->getLabel());
		$id      = htmlentities($element->getId());
		$value   = htmlentities(utf8_decode($element->getValue()));
	
		$markup  = sprintf($this->_format,  $id, $name, $label);
		return $markup;
	}


}

