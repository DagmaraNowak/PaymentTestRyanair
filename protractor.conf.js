exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./tests/e2e/specs/*.js'],
  onPrepare: function() {
    browser.manage().window().maximize();
  
  }
 
}



  