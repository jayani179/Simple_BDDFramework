$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "NopCommerce Login",
  "description": "",
  "id": "nopcommerce-login",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User able to open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter an Url",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_able_to_open_Browser()"
});
formatter.result({
  "duration": 22732482900,
  "status": "passed"
});
formatter.match({
  "location": "Login.enter_an_Url()"
});
formatter.result({
  "duration": 7113303900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "# Simple Hard coded scenario."
    }
  ],
  "line": 8,
  "name": "Nopcommerce Valid Login Test",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User on Login Page and Verify Login page Title",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter username and password and click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User is on Home Page and Verify Home page Title",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_on_Login_Link()"
});
formatter.result({
  "duration": 7895389900,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_on_Login_Page_and_Verify_Login_page_Title()"
});
formatter.result({
  "duration": 175301500,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enter_username_and_password_and_click_on_login_button()"
});
formatter.result({
  "duration": 1386035300,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_on_Home_Page_and_Verify_Home_page_Title()"
});
formatter.result({
  "duration": 32700,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_close_the_browser()"
});
formatter.result({
  "duration": 960364700,
  "status": "passed"
});
formatter.uri("Register.feature");
formatter.feature({
  "line": 1,
  "name": "NopCommerce Login",
  "description": "",
  "id": "nopcommerce-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 7,
      "value": "# Simple Hard coded scenario."
    }
  ],
  "line": 8,
  "name": "Nopcommerce Valid Registration Test",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-registration-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user verify registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select gender",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enter \"\u003cfirstname\u003e\",\"\u003clastname\u003e\",\"\u003cemail\u003e\",\"\u003cpassword\u003e\" and \"\u003cconfirmPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-registration-test;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "password",
        "confirmPassword"
      ],
      "line": 16,
      "id": "nopcommerce-login;nopcommerce-valid-registration-test;;1"
    },
    {
      "cells": [
        "abcd2",
        "xyz",
        "abcd2@gmail.com",
        "Test@123",
        "Test@123"
      ],
      "line": 17,
      "id": "nopcommerce-login;nopcommerce-valid-registration-test;;2"
    },
    {
      "cells": [
        "abcd3",
        "xyz",
        "abcd3@gmail.com",
        "Test@123",
        "Test@123"
      ],
      "line": 18,
      "id": "nopcommerce-login;nopcommerce-valid-registration-test;;3"
    },
    {
      "cells": [
        "abcd4",
        "xyz",
        "abcd4@gmail.com",
        "Test@123",
        "Test@123"
      ],
      "line": 19,
      "id": "nopcommerce-login;nopcommerce-valid-registration-test;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "user able to open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "enter an Url",
  "keyword": "And "
});
formatter.match({
  "location": "Registration.User_able_to_open_Browser()"
});
formatter.result({
  "duration": 2193007300,
  "status": "passed"
});
formatter.match({
  "location": "Registration.Enter_an_Url()"
});
formatter.result({
  "duration": 6938644900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Nopcommerce Valid Registration Test",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-registration-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user verify registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select gender",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enter \"abcd2\",\"xyz\",\"abcd2@gmail.com\",\"Test@123\" and \"Test@123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Registration.user_click_on_Register_Link()"
});
formatter.result({
  "duration": 1033605100,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_verify_registration_page()"
});
formatter.result({
  "duration": 10019200,
  "status": "passed"
});
formatter.match({
  "location": "Registration.select_gender()"
});
formatter.result({
  "duration": 163813500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd2",
      "offset": 7
    },
    {
      "val": "xyz",
      "offset": 15
    },
    {
      "val": "abcd2@gmail.com",
      "offset": 21
    },
    {
      "val": "Test@123",
      "offset": 39
    },
    {
      "val": "Test@123",
      "offset": 54
    }
  ],
  "location": "Registration.enter_Registration_detail(String,String,String,String,String)"
});
formatter.result({
  "duration": 536035200,
  "status": "passed"
});
formatter.match({
  "location": "Registration.click_on_register_button()"
});
formatter.result({
  "duration": 670909100,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_close_the_browser()"
});
formatter.result({
  "duration": 1314068800,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "user able to open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "enter an Url",
  "keyword": "And "
});
formatter.match({
  "location": "Registration.User_able_to_open_Browser()"
});
formatter.result({
  "duration": 3496176500,
  "status": "passed"
});
formatter.match({
  "location": "Registration.Enter_an_Url()"
});
formatter.result({
  "duration": 8037528800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Nopcommerce Valid Registration Test",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-registration-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user verify registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select gender",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enter \"abcd3\",\"xyz\",\"abcd3@gmail.com\",\"Test@123\" and \"Test@123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Registration.user_click_on_Register_Link()"
});
formatter.result({
  "duration": 1664821700,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_verify_registration_page()"
});
formatter.result({
  "duration": 12814100,
  "status": "passed"
});
formatter.match({
  "location": "Registration.select_gender()"
});
formatter.result({
  "duration": 154441700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd3",
      "offset": 7
    },
    {
      "val": "xyz",
      "offset": 15
    },
    {
      "val": "abcd3@gmail.com",
      "offset": 21
    },
    {
      "val": "Test@123",
      "offset": 39
    },
    {
      "val": "Test@123",
      "offset": 54
    }
  ],
  "location": "Registration.enter_Registration_detail(String,String,String,String,String)"
});
formatter.result({
  "duration": 652786900,
  "status": "passed"
});
formatter.match({
  "location": "Registration.click_on_register_button()"
});
formatter.result({
  "duration": 1496495900,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_close_the_browser()"
});
formatter.result({
  "duration": 1325075400,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "user able to open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "enter an Url",
  "keyword": "And "
});
formatter.match({
  "location": "Registration.User_able_to_open_Browser()"
});
formatter.result({
  "duration": 3557101800,
  "status": "passed"
});
formatter.match({
  "location": "Registration.Enter_an_Url()"
});
formatter.result({
  "duration": 10001217300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Nopcommerce Valid Registration Test",
  "description": "",
  "id": "nopcommerce-login;nopcommerce-valid-registration-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user verify registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select gender",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enter \"abcd4\",\"xyz\",\"abcd4@gmail.com\",\"Test@123\" and \"Test@123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Registration.user_click_on_Register_Link()"
});
formatter.result({
  "duration": 3942928200,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_verify_registration_page()"
});
formatter.result({
  "duration": 6985500,
  "status": "passed"
});
formatter.match({
  "location": "Registration.select_gender()"
});
formatter.result({
  "duration": 79324700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd4",
      "offset": 7
    },
    {
      "val": "xyz",
      "offset": 15
    },
    {
      "val": "abcd4@gmail.com",
      "offset": 21
    },
    {
      "val": "Test@123",
      "offset": 39
    },
    {
      "val": "Test@123",
      "offset": 54
    }
  ],
  "location": "Registration.enter_Registration_detail(String,String,String,String,String)"
});
formatter.result({
  "duration": 473135500,
  "status": "passed"
});
formatter.match({
  "location": "Registration.click_on_register_button()"
});
formatter.result({
  "duration": 700006300,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_close_the_browser()"
});
formatter.result({
  "duration": 1549607400,
  "status": "passed"
});
});