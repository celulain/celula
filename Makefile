dev.cell: handlebars.cell public/js/app.js
	cat src/javascripts/cell/core.js \
	src/javascripts/cell/models/*.js \
	src/javascripts/cell/controllers/*.js \
	src/javascripts/cell/views/*.js \
	src/javascripts/cell/router.js \
	src/javascripts/cell/data/*.js \
	src/javascripts/cell/templates/*.js \
	> public/js/app.js

development: handlebars.admin-panel public/js/admin-panel.js
	cat src/javascripts/admin-panel/core.js \
	src/javascripts/admin-panel/models/*.js \
	src/javascripts/admin-panel/controllers/*.js \
	src/javascripts/admin-panel/views/*.js \
	src/javascripts/admin-panel/router.js \
	src/javascripts/admin-panel/data/*.js \
	src/javascripts/admin-panel/templates/*.js \
	> public/js/admin-panel.js


production: development less.bootstrap less.br
	uglifyjs public/js/admin-panel.js >  public/js/admin-panel.min.js

# É necessário setar o 'rootDir' correto no arquivo precompile-handlebars.js
handlebars.admin-panel:
	node src/precompile-handlebars.js

handlebars.cell:
	node src/precompile-handlebars-cell.js

# LESS
less: less.admin-panel less.cell less.celula less.bootstrap less.bootstrap-responsive

less.admin-panel:
	recess src/less/admin-panel.less --compress > public/css/admin-panel.css

less.cell:
	recess src/less/cell.less --compress > public/css/cell.css

less.celula:
	recess src/less/celula.less --compress > public/css/celula.css

less.bootstrap: less.bootstrap-responsive
	recess src/less/libs/bootstrap/bootstrap.less --compress > public/css/libs/bootstrap/bootstrap.css

less.bootstrap-responsive:
	recess src/less/libs/bootstrap/responsive.less --compress > public/css/libs/bootstrap/bootstrap-responsive.css
	
.PHONY: development
