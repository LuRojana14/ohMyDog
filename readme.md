# OhmyDog

## Description

**OhmyDog ** was developed in a git collaboration environment, using ES6, Node.js, Express.js, Handlebars, MongoDB, Mongoose, Cookies + Session + Auth as a second developer boot camp project [Ironhack] (https://www.ironhack.com/) (WebDev-FT-062020)

## User Stories

- **404** - As a user, I want to see a descriptive error when I go to a page that doesn't exist
- **500** - As a user, I want to see an error page when it goes bankrupt
- **homepage** - As a user, I want to be able to access to public home page, understand its about, be able to register and log in
- **sign up** - As a user, I want to register to be able to log in.
- **login** - As a user, I want to be able to log in to the website in order to access the services offered by the website
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **profiles list** - As a user, I want to see all the profiles available to know the dog that best suits mine
- **profile create** - As a user, I want to create a profile so that they can choose my dog to breed
- **profile detail** - As a user, I want to see all the users and their descriptions to decide which is the dog that will best suit mine
- **profile delete** - As a user, I want to be able to delete my profile when I no longer want my dog to participate to generate future pups
- **profile update** - As a user, I want to be able to edit my profile to modify my dog's description
- **Reviews** - As a user, I want to give my opinion so that other users have a reference of my experience.

## Backlog

List of other features outside of the MVPs scope

- **Free chat** - As a user, I want to be able to generate a chat to agree on crossings or dog trips

- Favourites

## Server Routes (Back-end):

| Method | Route           | Description                                                  | Request- Body                                                |
| ------ | --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| GET    | /               | Main page route. Renders home index view.                    |                                                              |
| GET    | / auth / signup | Renders signup form view.                                    |                                                              |
| POST   | / auth / signup | Renders the signup form and creates user in the DB.          | { email, password }                                          |
| GET    | / auth / login  | Renders login form view.                                     |                                                              |
| POST   | / auth / login  | Sends Login form data to the server. Redirects to home private page | { email, password, sex, telephone, description, age, weigth, cp } |
| GET    | / profiles      | Show all profiles                                            |                                                              |
| GET    | / profiles      | New- Private route. Create a profile                         |                                                              |
| POST   | / profiles      | New- Private route. Render profile. Send the data from the form to this route to create the celebrity and save to DB |                                                              |
| POST   | / profiles      | FindbyId. Private route. Render profile                      |                                                              |
| GET    | / profiles      | FindbyId: Show a form to edit a profile                      |                                                              |
| POST   | / profiles      | FindbyId: Send the data from the form to this route to update and save the profile from DB |                                                              |
| POST   | / review        | Profile.update                                               |                                                              |





## Models

User model

```js
 {	username: { type: String, required: true },
  mail: { type: String, required: true },
  password: { type: String, required: true },
  namedog: String,
  image: {
    type: String,
    default: "/images/userprofiledefault.jpg"
  },
  breed: String,
  sex: {
    type:String,
    enum: [
      "male",
      "female",
    ],
  },
  telephone: String,
  description: String,
  age: { type: Number, min: 0 },
  weight: String,
  cp:String,
  review:[
    {type: Schema.Types.ObjectId, ref:'Review'}
  ],
  }
```

Review model

```js
   
{
  user: { type: Schema.Types.ObjectId, ref: "User" },
  comment: String,
}
```

## Links

### Trello

[Trello Kanban board](https://trello.com/b/dnARqWs4/ohmydog)

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/LuRojana14/ohMyDog.git)

### Slides

The url to your presentation slides



