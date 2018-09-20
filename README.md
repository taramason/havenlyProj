# havenlyProj
Set up a webpack project to both serve a React site locally for development and build a bundle for production.

The development environment should include:

* Support for CSS Modules **_DONE_**

* Hot Module Reloading **_DONE_**

* Proxying of asset requests to a different URL (you do not need to implement a dev server to respond to proxied requests, if they 404 that will be good enough). **_NEED TO IMPLEMENT_**

Your production build config should include:

* Dead code elimination **_DONE_**

* Any necessary polyfills **_DONE_**

* Code minification **_DONE_**

* Source maps **_DONE?_**

* Feel free to copy and paste from any previous webpack configs you've done, but please do not use a pre-built template like create-react-app or react-slingshot.  **_I've never done this before so this is where the majority of my time was spent. I don't like putting things together or copy & pasting without understanding how they work. Happy to have learned how everything is set up, this has made me much more confident in my React abilities_**


* Build the following page design to match the responsive.png mock-up as closely as you can. Use the React/webpack project set up in the last question. We don't have a mobile mock for this page, but be sure to build it mobile-first and make your own decisions about how to display the layout at that size.  **_I am 90% DONE, Need to make responsive. The Surveyor Fonts are not displaying the way they should (its a subtle but important difference), I'm not sure why, haven't had a chance to dig deeper, given more time I would try to import the ttf's and convert them_**  

* The page shown on the mock is the max-width - if a user's screen is wider than 1150px, the page should be the size shown and centered in the browser.**_I have not started making it responsive yet_**

****

Take a look at the attached mockups, and assume you're being assigned to build them – but, for some reason, have been given very little information. These are screenshots of a feature that a Havenly designer uses to show a room design concept, and its products, to a user.

Answer the following questions:

* What are the most important questions you have about the mocks and how they should work?
**_What is the main purpose of this page (sometimes this is not as obvious as you would think).  What is that on/off switch on the rt side? How do we want it to work/look on mobile?  Will mobile have the same functionality?  Is the main center image one static image or is it broken up into separate images (each item of furniture is a separate image?)  What does the data look like that I will be loading in? What do you want it to look like when any button is clicked, or when another message is sent/received? After something has been rated, should there be some indication that it has been done (like the hover icon turns lighter or something)? Have you done any User Testing on this page, if so what where the results?_**

* What seems like, potentially, the biggest unknown?
**_What is that "on/off" switch in the "your living room concept" div on the right side ?? What is the proposed functionality?_**

* What changes would you recommend making to make this interface work well on mobile?
**_Have each furniture item stack down the page (instead of just having a large image that can be zoomed in)._**

****

Write a function that takes two arrays full of objects and outputs a list of their changes, as seen below.

You can assume that the IDs of the objects will be persistent, but other values won't be. Don't assume that "name" and "quantity" are the only values to diff.

-- **_I HAVE NOT STARTED THIS_** --

WILL FIND HERE WHEN COMPLETE: https://repl.it/@tara_mason/getDifferenceInObjects


