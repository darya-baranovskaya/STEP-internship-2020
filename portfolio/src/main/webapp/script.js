// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function showPicture(imgs) {
  var expandedImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandedImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}







/**
 * Fetches a random quote from the server and adds it to the DOM.
 */
function sayHello() {
  console.log('Fetching hello.');

  // The fetch() function returns a Promise because the request is asynchronous.
  const responsePromise = fetch('/data');

  // When the request is complete, pass the response into handleResponse().
  responsePromise.then(handleResponse);
}

/**
 * Handles response by converting it to text and passing the result to
 * addQuoteToDom().
 */
function handleResponse(response) {
  console.log('Handling the response.');

  // response.text() returns a Promise, because the response is a stream of
  // content and not a simple variable.
  const textPromise = response.text();

  // When the response is converted to text, pass the result into the
  // addQuoteToDom() function.
  textPromise.then(replyHello);
}
/** Adds a random quote to the DOM. */
function replyHello(helloStr) {
  console.log('Hello Darya');

  const quoteContainer = document.getElementById('hello-sell');
  quoteContainer.innerText = helloStr;
}

/**
 * The above code is organized to show each individual step, but we can use an
 * ES6 feature called arrow functions to shorten the code. This function
 * combines all of the above code into a single Promise chain. You can use
 * whichever syntax makes the most sense to you.
 */
function sayHelloUsingArrowFunctions() {
  fetch('/data').then(response => response.text()).then((helloStr) => {
    document.getElementById('hello-sell').innerText = helloStr;
  });
}

/**
 * Another way to use fetch is by using the async and await keywords. This
 * allows you to use the return values directly instead of going through
 * Promises.
 */
async function sayHelloUsingAsyncAwait() {
  const response = await fetch('/data');
  const quote = await response.text();
  document.getElementById('hello-sell').innerText = quote;
}

function getServerStats() {
  fetch('/data').then(response => response.json()).then((jsonStr) => {
    // stats is an object, not a string, so we have to
    // reference its fields to create HTML content

    const statsListElement = document.getElementById('hello-sell');
    statsListElement.innerHTML = '';
    statsListElement.appendChild(
        createListElement('First string: ' + jsonStr[0]));
    statsListElement.appendChild(
        createListElement('Second string: ' + jsonStr[1]));
    statsListElement.appendChild(
        createListElement('Third string: ' + jsonStr[2]));
  });
}

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

async function formLoad() {
  fetch('/form').then(response => response.json()).then((jsonStr) => {
    // stats is an object, not a string, so we have to
    // reference its fields to create HTML content

    const statsListElement = document.getElementById('form-reply');
    statsListElement.innerHTML = jsonStr;
    statsListElement.style.color = rate_value;
  });
}
