var fs = require('fs');
var vm = require('vm');

// Altere o rootDir para o seu diretório do projeto.
var rootDir = '/Users/fabriciotav/GitHub/celula/';

var emberjs = fs.readFileSync( rootDir + 'src/ember+handlebars.js', 'utf8');
var templatesDir = rootDir + 'src/templates';
var destinationDir = rootDir + 'src/javascripts/admin-panel/templates';

function compileHandlebarsTemplate(templatesDir, fileName) {
  var file = templatesDir + '/' + fileName;

  //dummy jQuery
  var jQuery = function() { return jQuery; };
  jQuery.ready = function() { return jQuery; };
  jQuery.inArray = function() { return jQuery; };
  jQuery.jquery = "1.8.0";
  jQuery.event = {fixHooks: {}};

  //dummy DOM element
  var element = {
    firstChild: function () { return element; },
    innerHTML: function () { return element; }
  };

  var sandbox = {
    // DOM
    document: {
      createRange: false,
      createElement: function() { return element; }
    },

    // Console
    console: console,

    // jQuery
    jQuery: jQuery,
    $: jQuery,

    // handlebars template to compile
    template: fs.readFileSync(file, 'utf8'),

    // compiled handlebars template
    templatejs: null
  };

  // window
  sandbox.window = sandbox;

  // create a context for the vm using the sandbox data
  var context = vm.createContext(sandbox);

  // load Ember into the sandbox
  vm.runInContext(emberjs, context, 'ember.js');

  //compile the handlebars template inside the vm context
  vm.runInContext('templatejs = Ember.Handlebars.precompile(template).toString();', context);

  var namedTemplateJs = 'Ember.TEMPLATES["' + fileName.replace(/.hb/, '') + '"] = Handlebars.template(' + context.templatejs + ');';

  //extract the compiled template from the vm context and save to .js file
  fs.writeFileSync(file.replace(/\.hb$/, '.js').replace(templatesDir, destinationDir), namedTemplateJs, 'utf8');
}

console.log('Compiling .handlebars templates');
var files = fs.readdirSync(templatesDir);
var i;
for (i = 0; i < files.length; i++) {
  if (/\.hb$/.test(files[i])) {
    compileHandlebarsTemplate(templatesDir, files[i]);
    process.stdout.write('.');
  }
}
console.log('done');
