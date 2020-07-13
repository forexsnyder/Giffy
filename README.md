
# Project #1: Your First Application

### STEP 1: Read the Directions
1) Read **ALL** of the directions before you start. We will know...

### STEP 2: Pitch Your Project
Before you start any actual coding, you must meet with your Squad Leader for ~10 minutes to get your app idea approved. Prepare the following materials _before_ your meeting and put them in your README.md:
- **App Title**:
Giphy's Gif Giffer
- **App Description**:
This app will enables the user to search  Giphy.com's gif library.  It presents the Gif in the middle of the screen.  There is a Next and Back button to allow navigation of the search results. 
- **API**:
The API the project uses is https://developers.giphy.com/.- 
**API Snippet**: 


An example of the API's code snippet:

    "data": {
        "type": "gif",
        "id": "jqYW2qyvWZGG8Shoqo",
        "url": "https://giphy.com/gifs/luliygabo-jqYW2qyvWZGG8Shoqo",
        "slug": "luliygabo-jqYW2qyvWZGG8Shoqo",
        "bitly_gif_url": "https://gph.is/g/aQxGkkE",
        "bitly_url": "https://gph.is/g/aQxGkkE",
        "embed_url": "https://giphy.com/embed/jqYW2qyvWZGG8Shoqo",
        "username": "luliygabo",
        "source": "",
        "title": "GIF by Luli y Gabo",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2019-05-06 17:09:36",
        "trending_datetime": "0000-00-00 00:00:00",
        "images": {
            "downsized_large": {
                "height": "480",
                "size": "2974405",
                "url": "https://media3.giphy.com/media/jqYW2qyvWZGG8Shoqo/giphy.gif?cid=13158784123ffa174cafa2017887f9502e7c7fa6831637b3&rid=giphy.gif",
                "width": "480"
            },
            "fixed_height_small_still": {
                "height": "100",
                "size": "2307",
                "url": "https://media3.giphy.com/media/jqYW2qyvWZGG8Shoqo/100_s.gif?cid=13158784123ffa174cafa2017887f9502e7c7fa6831637b3&rid=100_s.gif",
                "width": "100"
            },


- **Wireframes**:
https://wireframe.cc/mGukNC


- **MVP**: 
Features include.  Search bar with a Submit button.  Display results in the middle of the page.  Navigation buttons.  Return results from Giphy API. Dynamic scaling, nvigation buttons will change according to screen size.
- **Post-MVP**:
Queue the next 5 Gifs in a window at the bottom of the screen.  Be able to tap on the gif to enlarge and see only the gif.  Have a return button.
- **Goals**: What you plan to accomplish for each day of the project week.
Moday: Html basics.  CSS placement of objects.  JS return GIF data.
Tuesday: Create functionality in Buttons and Search bar.  Standardize the gif sizing. Confirm API is cycling through the Gifs 
Wednesday:Create the Dynamic aspect of app for screen sizing. 

- **Priority Matrix**:
http://www.mediafire.com/view/lnouhe17fw2gmeg/Chart%20Time%20x%20Priority.JPG
- **Timeframes**: http://www.mediafire.com/view/eycjm6h4xulzrgv/Time%20Sheet.JPG

Are you interested in styling your README.md to make it look nice? Don't know how to include photos or create links? Check out this [Markdown Cheetsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)!

### STEP 3: Make a New Repo
1. [Make a new enterprise GitHub repo for your project](https://help.github.com/articles/create-a-repo/). **DO NOT FORK THIS REPO.** 
2. This new repo should be under your GA Enterprise Github, NOT your personal account.
2. Make sure your new repo is set to "Public" and initialize it with a README.md file. **This will be your project worksheet.**
3. Send a link for your repository to your Squad Leader.
4. After your have been approved, clone this new repository down to your machine.
5. CD into the project directory and touch ```index.html```, ```style.css``` and ```script.js``` files.
6. Test a commit and push it to make sure everything is connected with ```git commit -m "Go Bees!"```.

Note: Your repository should **not** be called `project-1`! Think of a name for your application, and then name your repository after your application. 

### STEP 4: &#x1F534; Build Your Project MVP — Mandatory To Pass

#### Your application must meet these requirements:

  1. Built with HTML, CSS, and JavaScript.
  1. Styled using `Flexbox` or `Grid`.
  1. Use Axios to make a request to an external data source and insert some of the retrieved data on to the DOM.
  1. Implement responsive design using at least one media query/breakpoint (i.e. desktop, tablet, mobile, etc).
  1. Fulfill the build requirements you have specified in your MVP.
  1. Deployed site to a hosting service like [Github Pages](https://pages.github.com/).
  1. Make commits to GitHub every day.
  1. A `README.md` file that contains your project worksheet, a link to your live, deployed site, and any necessary installation instructions such as ```npm i```.

#### 📋 List of APIs

Below is a non-exhaustive list of some free APIs you can use. There are _many_ APIs out there, however, so if you find one not on this list, feel free to use it. No matter what API you decide on, make sure you can successfully make a GET request before you commit to using it.

  1. Weather: https://openweathermap.org/api
  1. News: https://newsapi.org/
  1. Giphy: https://developers.giphy.com/
  1. Pokemon: http://pokeapi.co/
  1. Card Deck: https://deckofcardsapi.com/
  1. City of Chicago: https://data.cityofchicago.org/
  1. Beer: https://www.brewerydb.com/developers
  1. Chuck Norris: http://www.icndb.com/
  1. Rick and Morty: https://rickandmortyapi.com/documentation/#rest
  
[This site](https://github.com/toddmotto/public-apis) lists a collection APIs as well. Take a look through their libraries and try to find one that interests you. Please note, however, that many APIs will require an authentication key, and some APIs require payment. We **highly suggest** using a free API for your first project dealing with one.

### STEP 5: &#x1F535; Ideas for Post-MVP - Not Mandatory
- Look into [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) so you can save data to the user's browser 
- Add a second API.
- Add creative use of event listeners and UI interaction.
- Add media queries for responsive design.
- Add animations.
- Get input from a UX student on how to make your app have intuitive UI and design.

### STEP 6: Technical Demonstration

All projects will be presented to the class.  Your presentation should:

* Be no longer than 5 minutes in length
* Show off all features of the app
* Explain the technical details
* Explain the technical challenges
* Explain which improvements you might make

Your presentation should **NOT**:
* Focus on what you didn't accomplish.

You will be sharing your project and your code.  Be prepared to answer questions from the instructors and other students.

Did you read all of the directions before starting? If so write `git commit -m "bee's bee buzz'n"` instead of `git commit -m "first commit"` for your first commit.

### Step 7: Help and Support

1. Each student will be given 5 (five) tokens, redeemable at any time during regular class time (subject to instructors' schedules), for 20 minutes. **Tokens cannot be transferred between students - there is no black market for tokens.**

2. Give at least a 10 minutes heads up to an instructor with the link to your project repo and a link to your `issue` ticket. Instructors will not be holding open office hours during project week. This is to allow you to solve issues and errors you run in to on your own and with your classmates. 

3. [Sign up here for help with your squad lead.](https://docs.google.com/forms/d/e/1FAIpQLSdNQXP9lOO4-RgXDN6Kg5RXkmydjhsuX9qtwoPwZga2wa8_Fw/viewform)

### Step 8: Grading

#### Hard Requirements

The following requirements **_must_** be met in order for the project to be
considered complete:

- The project is deployed to GitHub Pages or a custom domain
- The application renders in the browser and runs without errors
- The repo has a README that adequately documents the project

We do not give letter grades; it is either a pass/fail. The real benchmark is how much you grow and learn each unit. 

You will receive feedback in a secret gist. The gist will be Slacked out independent of your P1 repo to keep feedback confidential. 

An example of the gist can be found here: [Secret Gist](https://gist.git.generalassemb.ly/SteveVW/6b49d9b08d1edcd203609d843eb8b97f)

If you would like more feedback than the gist, instructors will be available to meet one on one. Please feel free to reach out and schedule a time with your squad leader. 

### Incomplete Projects

Incomplete projects will be given an extension. An instructor will follow up with you to discuss the details of the resubmission.  **Note that you are allowed one extension on only one of the four projects.**

<br>

## PLAGIARISM

Remember. We have a **zero-tolerance policy** towards plagiarism. More on our plagiarism policy can be found in our course wiki's [plagiarism page](https://gist.git.generalassemb.ly/SteveVW/7b780310c82d10df98a4e620abbfbfec).
