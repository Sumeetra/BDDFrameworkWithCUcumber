$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/newAccount.Feature");
formatter.feature({
  "line": 1,
  "name": "User should be able to add New Account",
  "description": "",
  "id": "user-should-be-able-to-add-new-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should be able to add New Account",
  "description": "",
  "id": "user-should-be-able-to-add-new-account;user-should-be-able-to-add-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already in Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks New Account",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user inputs \"\u003caccountTitle\u003e\" and \"\u003cdescription\u003e\" and \"\u003cbalance\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "clicks submit",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "user-should-be-able-to-add-new-account;user-should-be-able-to-add-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "balance"
      ],
      "line": 13,
      "id": "user-should-be-able-to-add-new-account;user-should-be-able-to-add-new-account;;1"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123",
        "Fun",
        "HappyTimes",
        "2000"
      ],
      "line": 14,
      "id": "user-should-be-able-to-add-new-account;user-should-be-able-to-add-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "User should be able to add New Account",
  "description": "",
  "id": "user-should-be-able-to-add-new-account;user-should-be-able-to-add-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already in Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"techfiosdemo@gmail.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks New Account",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user inputs \"Fun\" and \"HappyTimes\" and \"2000\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "clicks submit",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_is_already_in_Login_Page()"
});
formatter.result({
  "duration": 8376832399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 42
    }
  ],
  "location": "StepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 5432015200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_clicks_New_Account()"
});
formatter.result({
  "duration": 2871887400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fun",
      "offset": 13
    },
    {
      "val": "HappyTimes",
      "offset": 23
    },
    {
      "val": "2000",
      "offset": 40
    }
  ],
  "location": "StepDefination.user_inputs(String,String,String)"
});
formatter.result({
  "duration": 8034435900,
  "error_message": "java.lang.NullPointerException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat page.NewAccountPage.fillInTheNewAccountForm(NewAccountPage.java:34)\r\n\tat steps.StepDefination.user_inputs(StepDefination.java:46)\r\n\tat ✽.When user inputs \"Fun\" and \"HappyTimes\" and \"2000\"(./src/test/java/features/newAccount.Feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefination.clicks_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});