Feature: API Testing

  Scenario: Perform a GET request
    When a GET request is made to "https://jsonplaceholder.typicode.com/posts/1"
    Then the response status code should be 200
    And the response should contain "userId"