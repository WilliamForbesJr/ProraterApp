# Prorater App
 App to quickly calculate proration fees for team at work.
 - Live app can be found [HERE](https://gallant-feynman-45994b.netlify.com/)

## Motivation
This project was created as a way to make it easier for my team to calculate common billing scenerios that we encounter. Previously, we would need to reach out to our Billing Team to retreive this information, which is time-consuming for both teams. This app makes it much easier for us to quickly be able to quote clients.

## Features
- This app has 2 separate calculators to calculate fees when prorating downgrades and cancellations.
 
## Screenshots
Include logo/demo screenshot etc.

## Tech used
- I have set output data to be an entire object even though the DOM only will display credit amount to user. This is intended to have in case team provides feedback on needing a more detailed breakdown.
- This app only uses session storage so it will not save any previous calculations.
#### Built Using:
- VanillaJS 
- BootStrap 
- CSS

## Installation
Local installation not necessary.

## Tests
Unit tests and integration tests have been included. Although it's a single page application, the included integration test in Cypress makes debugging much quicker.
 
#### Testing Frameworks used:
  - Mocha 
  - Chai 
  - Cypress
  
## How to use:
Simply fill out the information in the downgrade or cancellation you need to perform and instantly get the credit amount back.
