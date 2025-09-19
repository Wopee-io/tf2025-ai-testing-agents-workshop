# Regression test suite for various web applications

Generate a Playwright test for the following scenario:

## Test #1: Website

Base URL: https://dronjo.wopee.io
Test login procedure.
Navigate to the login page (click on the Sign in button).
Sign in with any @tesena.com email and any password.
Verify you reach the home page and see the Logout button (top right).

## Test #2: E-commerce

Base URL: https://www.saucedemo.com
Test purchase procedure.
Login with: standard_user / secret_sauce and verify redirect to product listing.
Add an item to cart, complete the purchase, and verify 'Thank you for your order!' message displayed.

## Test #3: Banking

Base URL: https://moja.tatrabanka.sk/html-tb/en/demo
Test login procedure.
Wait for page load, accept cookies (if shown), submit form with pre-filled PIN.
