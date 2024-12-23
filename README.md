# Text-Editor


[Link to deployed site](https://text-editor-zyei.onrender.com)

## Description

This Progressive Web Application (PWA) is an editor that runs in the browser at localhost:3000. The app provides a user-friendly interface for creating and editing content seamlessly. Users can save their work in real-time, ensuring that no progress is lost while they navigate through various features. The aplication will be a single-page application that meets the PWA criteria. You can also download the application to your desktop for standalone use and offline functionality. Additionally, the application can be started and implement methods for getting and storing data to an indexedDB database. A package called idb, a lightweight wrapper around the IndexedDB API that features many methods that are useful for storing and retrieving data, and is used by Google and Mozilla.


## Usage

This text editor can be used with or without an internet connection so you can use it conveniently and reliably retrieve the data for future use. It is amazing when I start the application in editor where I can see a client and server folder structure. To run the application by using the command: "npm start" or "npm run start" in the terminal, the application should start up the backend and serve the client. when I run the application in the terminal, the JavaScript files have been bundled using webpack. When run webpack plugins, the HTML, service worker, and a manifest file have generated. When next-gen JavaScript is used in the application, the text editor still functions in the browser without errors. When text-editor is opened, the Indexed DB has immediately created a database storage. I enter content and subsequently click off of the DOM window, the content in the text editor has been saved with IndexedDB. When I reopen the text editor after closing it, the content in the text editor has been retrieved from Indexed DB. When I click on the install button, I download my web application as an icon on my desktop. When I load my web application, and then I should have a registered service worker using workbox. WHEN I register a service worker, then I should have my static assets pre cached upon loading along with subsequent pages and static assets. When I deploy to render, I should have proper build scripts for a webpack application.

To run project
```bash
npm start
```

## Installation

The generation of the files is in the code. The following are for reference.

npm install --save-dev html-webpack-plugin
When run webpack plugins, the HTML, service worker, and a manifest file have generated.  
npm i css-loader
npm i concurrently
npm i idb
The manifest.json file is the only file that every extension using WebExtension APIs must contain.
npm i webpack-pwa-manifest

## License

MIT

## Questions

When the GitHub profile (https://github.com/ksytwu100) is provided, that is added to the section entitled Questions.
The question in the module - It is your responsibility to include a note in the README section of your repo specifying code source and its location within your repo. The code is provided in the module 19 -PWA in the Activities section for references. The application is built with my understanding of the required materials by attending classes, BCS tutoring sessions, Google searches, and attending the office hours for the solutions to my questions.
