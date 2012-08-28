js.dev: public/js/celula.js
	cat src/javascripts/rating.js \
	src/javascripts/bootstrap-plugins.js \
	> public/js/celula.js

js.prod: js.dev
	uglifyjs public/js/celula.js >  public/js/celula.min.js
	
.PHONY: js.dev
