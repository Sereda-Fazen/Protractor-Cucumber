var page = require('../page/pageObjects.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {
  this.Given(/^I go to "([^"]*)"$/, function (site) {
    page.home(site);
  });

 this.When(/^I'm hover on "([^"]*)" in the header menu$/, function (num1) {
   page.personalize(num1);
 });

  this.When(/^I click on "([^"]*)"$/, function (arg1){
   page.shelves(arg1);
  });

  this.When(/^I click on Change total size$/, function () {
    page.totalSize();
  });

  this.When(/^I select height "([^"]*)"$/, function (arg1) {
    page.selectHeight(arg1);
  });






  /*



    this.Then(/^I should see my new task in the list$/, function(callback) {
      var todoList = element.all(by.repeater('todo in todoList.todos'));
      expect(todoList.count()).to.eventually.equal(3);
      expect(todoList.get(2).getText()).to.eventually.equal('Do not Be Awesome')
          .and.notify(callback);
    });
    */
};