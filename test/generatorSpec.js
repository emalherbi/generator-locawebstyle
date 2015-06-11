describe("Mocha/Grunt generator test suite", function(){

  var yeoman = require('yeoman-generator');
  var path = require('path');
  var assert;
  var mockGen;

  before(function(done){
    assert = yeoman.assert;
    mockGen = yeoman.test;

    var mockPrompt = {
      appName: 'LocawebTest',
      appVersion: '1.0.0',
      includeNormalize: true,
      nameTheme: 'includeBlue'
    };

    var mockOptions = {
      'skip-install': true
    };

    mockGen
      .run(path.join(__dirname, '../app'))
    	.inDir(path.join(__dirname, './temp'))
    	.withPrompt( mockPrompt )
      .withOptions( mockOptions )
    	.on('end', done);
  });

  describe('Directory Creation', function(){
    it('should generate a Root directory', function(){
      assert.file('app');
    });
    it('should generate a Css directory', function(){
    	assert.file('app/css');
    });
    it('should generate a Img directory', function(){
    	assert.file('app/img');
    });
    it('should generate a Js directory', function(){
    	assert.file('app/js');
    });
  });

  describe('File Creation', function(){
    it('should generate "index.html"', function(){
      assert.file('app/index.html');
    });
    it('should generate "app.css"', function(){
      assert.file('app/css/app.css');
    });
    it('should generate "app.js"', function(){
      assert.file('app/js/app.js');
    });
    it('should generate ".bowerrc"', function(){
      assert.file('.bowerrc');
    });
    it('should generate ".gitattributes"', function(){
      assert.file('.gitattributes');
    });
    it('should generate ".gitignore"', function(){
      assert.file('.gitignore');
    });
    it('should generate "bower.json"', function(){
      assert.file('bower.json');
    });
    it('should generate "Gruntfile.js"', function(){
      assert.file('Gruntfile.js');
    });
    it('should generate "package.json"', function(){
      assert.file('package.json');
    });
    it('should generate "properties.json"', function(){
      assert.file('properties.json');
    });
  });

  /*
  describe('File Customization', function(){
    it('should update bower.js with prompt data', function(){
      assert.fileContent('bower.json', /['|"]*name['|"]*[ ]*:[ ]*['|"]repo-gen-test['|"]/);
      assert.fileContent('bower.json', /['|"]*description['|"]*[ ]*:[ ]*['|"]Unit Test Gen['|"]/);
      assert.fileContent('bower.json', /['|"]*homepage['|"]*[ ]*:[ ]*['|"]http:\/\/github.com['|"]/);
      assert.fileContent('bower.json', /['|"]*main['|"]*[ ]*:[ ]*['|"]repo-gen-test.js['|"]/);
    });
    it('should update package.json with prompt data', function(){
      assert.fileContent('package.json', /['|"]*name['|"]*[ ]*:[ ]*['|"]repo-gen-test['|"]/);
      assert.fileContent('package.json', /['|"]*title['|"]*[ ]*:[ ]*['|"]Repo Gen Test['|"]/);
      assert.fileContent('package.json', /['|"]*description['|"]*[ ]*:[ ]*['|"]Unit Test Gen['|"]/);
      assert.fileContent('package.json', /['|"]*main['|"]*[ ]*:[ ]*['|"]repo-gen-test.js['|"]/);
      assert.fileContent('package.json', /['|"]*url['|"]*[ ]*:[ ]*['|"]http:\/\/github.com['|"]/);
      assert.fileContent('package.json', /['|"]*url['|"]*[ ]*:[ ]*['|"]http:\/\/github.com\/issues['|"]/);
      assert.fileContent('package.json', /['|"]*homepage['|"]*[ ]*:[ ]*['|"]http:\/\/github.com['|"]/);
    });
  });
  */

});
