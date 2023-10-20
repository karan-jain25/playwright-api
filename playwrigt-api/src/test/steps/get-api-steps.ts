// const { test, expect } = require('@playwright/test');
const { When, Then } = require('@cucumber/cucumber');
import { test, expect } from '@playwright/test';


let response: any;

When('a GET request is made to {string}', async ( url: string) => {
  response = await request.get(url);
  console.log(response.status);
});

Then('the response status code should be {int}', async (statusCode: number) => {
  expect(response.status).toBe(statusCode);
});

Then('the response should contain {string}', async (key: string) => {
  expect(response.data).toHaveProperty(key);
  console.log(response.data);
});