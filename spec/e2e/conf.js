exports.config = {
  framework: 'jasmine2',
  seleniumAddress:'http://localhost:4444/wd/hub',
  specs:['githubProfileFeature.js'],
  multiCapabilities: [{
    browserName: 'chrome'
  }, {
    browserName: 'firefox'
  }]
};