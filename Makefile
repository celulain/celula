style.lib:
	recess src/lib/bootstrap/less/responsive.less --compress > public/css/development/lib/bootstrap/bootstrap-responsive.css
	recess src/lib/bootstrap/less/bootstrap.less --compress > public/css/development/lib/bootstrap/bootstrap.css

# LANDING SITE
style.site:
	recess src/style/site.less --compress > public/css/development/site.css

landing.development: public/js/development/site.js
	cat src/javascript/landing/index.js > public/js/development/site.js

landing.production: landing.development style.site src/lib/lib-site.js
	uglifyjs public/js/development/site.js > src/javascript/site.min.js
	cat src/lib/jquery/jquery-1.8.3.uglified.js \
    src/lib/bootstrap/bootstrap.min.js \
	src/lib/handlebars/handlebars-1.0.rc.1.min.js \
	src/lib/ember/ember-1.0.0-pre.2.min.js \
	> src/lib/lib-site.js
	cat src/lib/lib-site.js src/javascript/site.min.js > public/js/landing.js

# APPLICATION
style.app: style.lib
	recess src/style/app.less --compress > public/css/development/app.css

# É necessário setar o 'rootDir' correto no arquivo precompile-handlebars.js
handlebars.precompile:
	node src/precompile-handlebars.js

app.development: public/js/development/app.js
	cat src/javascript/app/app.js \
	src/javascript/app/models/*.js \
	src/javascript/app/controllers/*.js \
	src/javascript/app/views/*.js \
	src/javascript/app/router.js \
	src/javascript/app/templates/*.js \
	> public/js/development/app.js

app.production: app.development style.app src/lib/lib-app.js
	uglifyjs public/js/development/app.js > src/javascript/app.min.js
	cat src/lib/jquery/jquery-1.8.3.uglified.js \
	src/lib/jquery-ui/jquery-ui-1.8.23.custom.min.js \
    src/lib/bootstrap/bootstrap.min.js \
	src/lib/handlebars/handlebars-1.0.rc.1.min.js \
	src/lib/ember/ember-1.0.0-pre.2.min.js \
	src/lib/d3/d3.v2.min.js \
	> src/lib/lib-app.js
	cat src/lib/lib-app.js src/javascript/app.min.js > public/js/all.js

all.app: handlebars.precompile app.development style.app

all.landing: landing.development style.site

.PHONY: all.app
