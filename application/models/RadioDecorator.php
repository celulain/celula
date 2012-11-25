<?php

class Application_Model_RadioDecorator extends Zend_Form_Decorator_Abstract
{
	protected $_format = '<label class="control-group" for="%s">%s</label><div class="controls">%s %s %s %s %s</div>';
	
	public function render($content)
	{
		$element = $this->getElement();
		$name    = htmlentities($element->getFullyQualifiedName());
		$label   = htmlentities($element->getLabel());

		$name_i  = htmlentities($element->getName());
		$value   = htmlentities($element->getValue());
		$attribs = $element->getAttribs();
		$options = $element->getMultiOptions();
		$separa  = htmlentities($element->getSeparator());
	
		$markup  = sprintf($this->_format, $name, $label, $name_i, $value, $attribs, $options, $separa);
		return $markup;
	}

}

