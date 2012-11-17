<?php

class Application_Model_RadioDecorator extends Zend_Form_Decorator_Abstract
{
	protected $_format = '<label class="radio" for="%s">%s</label><div class="controls"><input id="%s" name="%s" type="radio" value="%s"/></div>';
	
	public function render($content)
	{
		$element = $this->getElement();
		$name    = htmlentities($element->getFullyQualifiedName());
		$label   = htmlentities($element->getLabel());
		$id      = htmlentities($element->getId());
		$value   = htmlentities($element->getValue());
	
		$markup  = sprintf($this->_format, $name, $label, $id, $name, $value);
		return $markup;
	}

}

