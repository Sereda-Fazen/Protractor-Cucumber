'use strict';
var pageObject = function () {

    this.home = function(site) {
        browser.get(site);
    };
    
    this.personalize = function () {
        browser.actions().mouseMove(browser.findElement(by.css('[ng-href="/configurator"]'))).perform();
        return browser.waitForAngular(3);
    };
    
    this.shelves = function (arg1) {
        return browser.element(by.cssContainingText('[ng-href="/shelf/configurator"]',arg1)).click();
    };

    this.totalSize = function () {
        return browser.element(by.css('[placeholder="H"]')).click();
    };

    this.selectHeight = function (arg1) {
        return browser.element(by.cssContainingText('[ng-repeat="option in dropdownCtrl.options"]', arg1)).click();

    }

};
module.exports = new pageObject();