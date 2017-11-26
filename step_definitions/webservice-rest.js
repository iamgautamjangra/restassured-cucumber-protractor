var chai = require('chai'),
  chaiAsPromised = require('chai-as-promised'),
  expect = chai.expect;

chai.use(chaiAsPromised);

var request = require('request');
var baseUrl = "https://reqres.in/api/"
var jsonBody = {};
var responseCode;
var responseError;
var username;
var steps = function () {

	this.Given(/^a user exists with an id (.*)$/, function (id, callback) {
		baseUrl = baseUrl + "user/" + id;
		callback();
	});
  
	this.When(/^an admin retrieves user with id$/, function (callback) {
		request.get(baseUrl,jsonBody, function(error, response, body) {
			responseError = error;
			responseCode = response.statusCode;
			console.log('Response Body - ' + response.body)
			responseBody = JSON.parse(response.body);
			username = responseBody.data.name
			callback();
		});  
	});
	
	this.Then(/^the status code is (.*)$/, function (resCode, callback) {
		expect(responseCode)
			.to.equal(parseInt(resCode));
		callback();
	});

	this.Then(/^username should be (.*)$/, function (expname, callback) {
		expect(username)
			.to.equal(expname);
		callback();
	});
	
		this.When(/^an admin retrieves invalid user$/, function (callback) {
		request.get(baseUrl,jsonBody, function(error, response, body) {
			responseError = error;
			responseCode = response.statusCode;
			console.log('Response Body - ' + response.body)
			callback();
		});  
	});

};
module.exports = steps;