# Text-Editor


[Link to deployed site](https://text-editor-zyei.onrender.com)

## Description

This Progressive Web Application (PWA) is an editor that runs in the browser at localhost:3000. The app provides a user-friendly interface for creating and editing content seamlessly. Users can save their work in real-time. The application will be a single-page application that meets the PWA criteria. You can also download the application to your desktop for standalone use and offline functionality. Additionally, the application can be started, and methods can be implemented to get and store data in an indexed database. A package called idb, a lightweight wrapper around the IndexedDB API that features many methods for storing and retrieving data is used by Google and Mozilla.


## Usage

This text editor can be used with or without an internet connection so you can use it conveniently and reliably retrieve the data for future use. It is amazing when I start the application in the editor where I can see a client and server folder structure. To run the application using the command: "npm start" or "npm run start" in the terminal, the application should start up the backend and serve the client. when I run the application in the terminal, the JavaScript files are bundled using Webpack. When running Wedpak plugins, the HTML, service worker, and a manifest file are generated. When next-gen JavaScript is used in the application, the text editor still functions in the browser with no errors. When the text editor was opened, the Indexed DB immediately created a database storage. I enter content and subsequently click off of the DOM window, the content in the text editor has been saved with IndexedDB. When I reopen the  
text editor after closing it, then I find that the content in the text editor has been retrieved from our IndexedDB. When I click the install button, I download my web application as an icon on my desktop. When I load my web application, I should have a registered service worker using Workbox. WHEN I register as a service worker, I should have my static assets pre-cached upon loading along with subsequent pages and static assets. When I deploy to render, I should have proper build scripts for a Webpack application.

To run project
```bash
npm start
```

## Installation

The code provided in the file generates the files. The following is for reference.

npm install --save-dev html-webpack-plugin
When run webpack plugins, the HTML, service worker, and a manifest file are generated.  
npm i css-loader
npm i concurrently
npm i idb
The manifest.json file is the only file that every extension using WebExtension APIs must contain.
npm i webpack-pwa-manifest

## License

MIT

## Questions

When the GitHub profile (https://github.com/ksytwu100) is provided it is added to the section entitled Questions.
The student needs to include a note in the README section of your repo specifying the code source and its location within your repo. The code is provided in module 19 -PWA in the Activities section for reference. The application is built with my understanding of the required materials by attending classes, BCS tutoring sessions, Google searches, and attending office hours for the solutions to my questions.
