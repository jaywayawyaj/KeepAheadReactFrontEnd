# Keep Ahead

## Description
A web app designed to assist users in donating food to the homeless. The app allows a user, when approached by a homeless person, to donate an amount of money of their choosing to a local eatery. The venue then receives a notification of the donation and the amount. Attached to each donation is the name of the recipient and a passphrase decided on by the donator, these allow the venue to identify the recipient and offer them the amount donated in food or drink.

## [See it in action](https://drive.google.com/file/d/1-OMjbBAhjZaJ-WrViB3Oj7JGVe8WXxNC/view)



## Dependancies

```
Javascript - base Language.
Javascript React - Library for Javascript.
Jest - Testing framework for Javascript & React.
Enzyme - Testing Framework for React.
ESLint - Javascript/React Linter.

```

## Installation
1. Clone or download this repo.
    - i.  If needed please go to this link to view the back end RAILS API :   https://github.com/AlinaGoaga/SocialProject_Rails
2. Run ``` npm install ``` to install dependancies.
3. Run ``` npm start ``` to open the page in your browser.

## Testing
- Testing has been carried out with Jest and Enzyme to test all small units of code and ensure our functions function as predicted.
- Test coverage currently reports as :
- Tests are run in the console via the ``` npm test``` command.
- Test Coverage can be viewed by running ``` npm test -- --coverage ```
    - This will generate a test coverage file you will have to ** gitigignore **
    - You can use this file to view an HTML output of our test coverage.
    - To see HTML displays of coverage run ```open coverage/lcov-report/[filename you wish to see coverage for]```


## Approach

Our approach to this task was two pronged. Our team of 6 split into 2 teams of 3, one to work on the backend rails API linked above and one team to work on the repo presented here.

We worked with React for the first time and as such our initial branch, called POC(proof of concept) was not fully test driven but a spike into new code ideas and implementations that resulted in a working proof of concept, we could get react to communicate with a rails controlled database.

Moving from the POC we decided on our Minimal Viable Product. And worked towards this over the first two day sprint.

Following Agile methodologies we enacted twice daily stand ups, complimented by small daily retro's and larger more in depth retros at the end of each sprint.

Our code approach was to follow a good BDD/TDD cycle as much as we could, which while difficult with the new tech we managed to work on keeping our code base tested and pushed to have as high a test coverage as possible. It is fair to say the project itself is not fully test driven, but by the projects end it was fairly well covered with tests and a majority of the program ended up being tested fully and in isolation.

## Components & their responsibilities

The app consists of 11 components each responsible for a small part of the app.
  - showvenues
  - displayVenue
  - donation
  - donationsForm
  - checkout
  - donationStatus
  - fullDonationList
  - signupForm
  - signinForm
  - venueportal
  - venueSignin
  - venueSignup


### showvenues

  - Responsible for rendering the list of all venues currently in the database.
  - Renders each venue with its name and address
  - The render relates to the state of showvenues, the state named *showvenue* is a boolean defaulting to false, when false the render displays the list of venues.
  - Once the button is clicked to view a venue the state switches to false, the setState function then re-renders the div showing only the next component.

### displayVenue

  - Is given the list of all venues and the id of the button clicked when it is called.
  - Renders the correct venue by comparing the button ID passed with the the Index of the venue in the array.
  - Once the *showvenue* state equates to true it uses the above to render the venue.
  - Responsible for showing the selected venue, displaying its full details and rendering as button to select the venue to donate.
  - It again uses a state *showConfirmation* to control when the donation form renders.

### donation

- Is passed the venue object of the selected venue when called.
- It uses this object to match it via the ID to its corresponding database entry on the rails API.
- It uses the above information to render the donation form to get the donation details, it then handles the form the submission to the API to ensure data is persisted. The donation should appear in an array property of the venue object on the rails side (see Rails side ReadMe for more details).

### donationsForm

- A form which takes the donation amount, recepient name and passphrase and feeds it back to the donation component to send the data to the rails API.

### checkout
- renders the stripe input to take CC details and send the donation to the relevant venue.

### donationStatus
- responsible for controlling whether donations have been redeemed or not and renders them to the venueprofile page.

### fullDonationList
- responsible for rendering the full list of donations, regardless of status on a venues profile page.
- talks to the RAILS API to fetch the data from the DB and then iterates that object to render appropriately.

### signupForm
- Form responsible for taking venues details and then passing them to the API to be validated on its end and then stored.

### signinForm
- Form through which venues signin into their account and then redirects them to their profile page.


### venuePortal
- responsible for rendering the login, signup and home buttons for venues to access their profiles through.
- Renders the two above forms for the appropriate button.

### venueSignup
- responsible for taking the data from signupForm, then communicating with the API to pop them in the DB and validate all info going over is correct as expected.

### venueSignin
- responsible for the same as signup but using the signin form and communicating to the signin route of the API.

## Work to be done

There is a lot of work I would do if I were to push forward on this project.

  - First I would go through each component that includes 'getElementByID', this is a recognised code smell when using React and needs to be replaced by the relevant React functionality.
  - I would go through our code taking reference from the lifecycle methods sections of React Docs, and see if there are places that we missed them and used our own custom functions. A majority of our methods called by handleform; I believe can be refactored in this way. There are also a collection of private methods in
  - I would pull out all fetch request code into modules, include them in the components that need them and have them called via callback to tidy up some of the longer functions we have.
  - I would re-install ESlint and spend more time figuring out how to get rules working properly. During the project half a day was lost towards making ESLint work but sadly was dropped in favour of moving on with the project.

  - The test coverage currently sits at approx  66% and I would want to improve this greatly, pushing it to 95% or above. The coverage reports highlight the areas in dire need of improvement.

## Resources:


- React and Stripe: https://www.robinwieruch.de/react-express-stripe-payment/
- React and Rails: https://stripe.com/docs/checkout/rails

## Authors

- [Jethro Whaley](https://github.com/jaywayawyaj)
- [Joao Abbot-Griven](https://github.com/joaoag)
- [Alina Goaga](https://github.com/AlinaGoaga)
- [Huxley Millard](https://github.com/HuxleyM)
- [Alex Alikhani](https://github.com/alexalikhani95)
