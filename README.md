# Prorater App
 App to prorate fees for work.
 
 Live app can be found here: https://gallant-feynman-45994b.netlify.com/
 
 ## How to use:
 - This app has 2 separate calculators to calculate fees when prorating downgrades and cancellations.
 - This app only uses session storage so it will not save any previous calculations.
 
 ## Developer Notes:
 - I have set output data to be an entire object even though the DOM only will display credit amount to user. This is intended to have in case team provides feedback on needing a more detailed breakdown.
 - I have included unit testing files requiring Mocha and Chai to test calculations for accuracy.
 - Integration tests requiring Cypress have also been included. While app is a single page, this has made testing UI much quicker.
