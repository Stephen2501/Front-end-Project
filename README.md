Deployed app:

https://nc-news-app-stephen2501.netlify.app/

back-end repo:

https://github.com/Stephen2501/back-end-project

# About

I have created an app using react that uses an API i have built to make use of paths created in the back-end to display the information in a user friendly way.

The app contains the following features:

- A Login page that accepts an existing username and logs in as that user.

- A home page that displays a featured article (this will always be the article with the most votes). As well as a random article that will take the user to a randomly chosen article.

- A Users page that shows every user that exists

- An articles page that display a list of all the articles, this page can be sorted by votes, comment count and date created, with an option to change the order between ascending and descending values. There is also a topics dropdown that will refine the list of articles to selected topic. Each article title serves as a link to the full article.

- The full article page shows the full information of the article as well as all comments associated to that article. The article has 2 vote options, that either increase or decrease the total votes by 1 which disable to stop increase or decreasing by more than 1 vote.

- The comments section has an option for posting comments, this only takes a body, as the author of the comment will be the logged in user. Each comment also has a delete button, though this can only be used by the author of the comment.

## Set-up

To start, fork this project and then clone it down to your machine using the terminal, enter the neccesary directory and the use the below code, inputting the actual url instead of the placeholder:

```
$ git clone /github-url-of-project/
```

You will need to install the dependency packages when you first enter the folder by running the below:

```
$ npm i
```

You will need to move into the nc-news folder using:

```
cd nc-news
```

You can locally host the site using:

```
$ npm start
```

While the site is running, you will be able to see live changes on the site when updating the code or CSS.

## Technology

This project was created using following software versions:

```
node: 16.13.1;
axios: 0.26.0;
netlify-cli: 9.13.0;
react: 17.0.2;
react-bootstrap: 2.2.0;
react-dom: 17.0.2;
react-moment: 1.1.1;
react-router-dom: 6.2.2;
react-scripts: 5.0.0;
```