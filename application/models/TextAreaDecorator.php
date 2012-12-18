<?php

class Application_Model_TextAreaDecorator extends Zend_Form_Decorator_Abstract
{
	protected $_format = '<div class="control-group"><label class="control-label" for="%s">%s</label><div class="controls"><textarea id="%s" name="%s" cols="40" rows="4">%s</textarea></div></div>';
	
	public function render($content)
	{
		$element = $this->getElement();
		$name    = htmlentities($element->getFullyQualifiedName());
		$label   = htmlentities($element->getLabel());
		$id      = htmlentities($element->getId());
		$value   = htmlentities(utf8_decode($element->getValue()));
	
		$markup  = sprintf($this->_format, $name, $label, $id, $name, $value);
		return $markup;
	}

}

