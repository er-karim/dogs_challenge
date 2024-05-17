# CODING CHALLENGE: Dog Breed Image Fetcher

## 1. Description

#### The Objective

The objective of our coding challenge is to assess your technical skills and give us
an idea of how you approach programming assignments. The specification has
been kept purposefully loose to allow you to show off your skills in whatever way
you’d like.

#### The Challenge

Design a simple web form, which has a text input field, labeled "Breed" and a
"Submit" button. When the form is submitted, a dog breed image should be
fetched from Dog API (https://dog.ceo/dog-api/) and presented to the right of the
web form, along with the submitted dog breed name.

#### Our Requirements

Please use Ruby on Rails, Bootstrap / Tailwind and Git. React is also allowed for
the views but not mandatory. Please use ruby when calling the API and make sure
the form submission is handled asynchronously, without a full page reload. Your
solution should be submitted as a public Github repository and ideally hosted on a
free hosting provider. Please aim to complete the coding challenge in less than 3
days upon receiving this instruction. Good luck!

## 2. Solution

This project is a simple web application that allows users to fetch images of dog breeds from the Dog API. It consists of a Ruby on Rails backend for handling API requests and a React frontend for displaying the user interface.

#### Features

- Users can enter a dog breed name into a text input field.
- Upon submitting the form, the application fetches a random image of the specified dog breed from the Dog API through the Backend.
- The fetched image is displayed alongside the submitted dog breed name.
- Asynchronous form submission without full page reload.

#### Tech Stack

- **Backend**: Ruby on Rails
- **Frontend**: React
- **Styling**: Tailwind CSS
- **Testing**: RSpec, Jest, React Testing Library
- **API Request Handling**: Faraday

#### Setup Instructions

1. Clone the repository
2. Navigate to the backend directory: `cd dogs_challenge`
3. Install `Ruby` dependencies: `bundle install`
4. Setup the backend database: `bin/rails db:create`
5. Navigate to the frontend directory: `cd client`
6. Install `Node.js` dependencies: `yarn install`
7. Start the app:

- if you have [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli) installed, in the root path run `heroku local`
- if you have `foreman` installed, in the root path run `foreman start`

#### Testing

- Navigate to the root directory.
- Run RSpec tests: `bundle exec rspec`
- Navigate to the frontend directory: `cd client`
- Run Jest tests: `yarn run test`

And you can check the coverages for:

- **Backend**: in the `coverage` folder
- **Frontend**: in the `client/coverage` folder
