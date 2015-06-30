## FoodWars

Built With & On
* [MeteorJS](https://www.meteor.com)
* [MongoDB](http://www.mongodb.org)
* [HighCharts](http://www.highcharts.com/)

Meteor Packages
* [IronRouter](https://atmospherejs.com/iron/router)
* [Cron](https://atmospherejs.com/mrt/cron)
* [Gravatar](https://atmospherejs.com/tmeasday/gravatar)

***

## Project Structure

```
foodWars/
├── client             # <- client specific libraries
│   ├── config         # <- client specific configuration (Router.configure({...}), etc)
│   ├── lib            # <- client specific libraries & methods
│   ├── routes         # <- controller/route definitions & mappings
│   ├── startup        # <- client startup setup (Meteor.isClient is assumed by convention)
│   ├── stylesheets    # <- css files for the handlebars views
│   ├── subscriptions  # <- client subscriptions to meteor publications
│   └── views          # <- templates & javascript for a single page
|
├── collections        # <- defintions of collections and methods on them
|
├── packages           # <- meteor packages used for the project
|
├── public             # <- public assets & images
│   ├── fonts          # <- font glyphicons
│   ├── javascripts    # <- external libraries (jQuery, Bootstrap, Highcharts, etc)
│   └── stylesheets    # <- external stylesheets (Bootstrap, etc)
|
├── server             # <- server specific libraries
│   ├── publications   # <- meteor publish defintions
│   └── startup        # <- server startup setup (Meteor.isServer is assumed by convention)

```

## Setup

Install Meteor if it is not already been installed.

```
$ curl https://install.meteor.com | /bin/sh
```

Run the project using Meteor, port 3000 will be the default port unless otherwise specified by the -p flag.
```
$ meteor
Stand back while Meteor does its thing

Done installing smart packages

Ok, everything's ready. Here comes Meteor!

[[[[[ ~/canvas/kumbhathon/foodWars ]]]]]

=> Started proxy.
=> Started MongoDB.
=> Started your app
```
## Usage

1. First, you will need to add some ideas!


2. Type in a new option, hit Enter, and voilà.


3. Add as many options as you would like and upvote/downvote!

## FAQ

Q: What problem does this really solve?
<br>
A: Have you ever tried figuring out where to go for lunch with a large group of people?

## Upcomming Additions
In no particular order:

1. Limit Votes per User

## Contributing
To contribute,

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
