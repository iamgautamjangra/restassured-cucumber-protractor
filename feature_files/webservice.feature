Feature: Get user by ID
	@rest1	
	Scenario: Admin calls web service to get a user by ID
		Given a user exists with an id 2
		When an admin retrieves user with id
		Then the status code is 200
		And username should be fuchsia rose	
	@rest2
	Scenario: Admin calls web service to get a invalid user
		Given a user exists with an id 23
		When an admin retrieves invalid user
		Then the status code is 404