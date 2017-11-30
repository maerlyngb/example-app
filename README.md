# Example AngularJS Application

![Overview screen](/img/overview.png)
![Detail screen](/img/detail.png)

## Prerequisites

### Git

- A good place to learn about setting up git is [here][git-setup].
- You can find documentation and download git [here][git-home].

### Node.js and Tools

- Get [Node.js][node].
- Install the tool dependencies: `npm install`


## Development

### Installing Application Dependencies


```
npm install
```


### Running the Application during Development

- Run `gulp`.
- Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application
  running.

## Distribution

### Build a distributable package

```
gulp dist
```

## Application Directory Layout

```
.
├── dist/                         --> distributable code (appears after gulp dist)
├── app/                          --> all the source code of the app
│   ├── bower_components/         --> 3rd party JS/CSS libraries
│   ├── img/                      --> applicaiton images
│   ├── sample-data/              --> sample data used to simulate API calls
│   ├── scripts/                  --> Application JS files
│   │   ├── app.js                --> All app JS files compiled into one files
│   │   ├── components/           --> Custom AngularJS components
│   │   │   ├── api/              --> AngularJS services to get data from external sources
│   │   │   ├── app/              --> Main application component
│   │   │   ├── pages/            --> Applicaiton 'pages'
│   │   │   ├── widgets/          --> Reusable UI components
│   │   │   └── modules.js        --> Lists all JS dependancies to be compiled into app.js
│   ├── styles/                   --> Applicaiton styling
│   │   ├── app.css               --> Compiled css
│   │   └── sass/                 --> Styling
│   │       ├── app.scss          --> Application wide styling
│   │       ├── colours.scss      --> Colour variables
│   │       └── navbar.scss       --> Nav bar specific styling
|   ├── views/                    --> View templates for AngularJS components
│   └── index.html                --> App layout file (the main HTML template file of the app)
├── bower.json                    --> Bower specific metadata, including client-side dependencies
├── e2e-tests/                    --> Config and source files for e2e tests
├── gulpfile.js                   --> gulp tasks
├── tasks/                        --> gulp task files
├── karma.conf.js                 --> Config file for running unit tests with Karma
├── node_modules                  --> npm dependancies
└── package.json                  --> Node.js specific metadata, including development tools dependencies
```


[angular-seed]: https://github.com/angular/angular-seed
[bower]: http://bower.io/
[git-home]: https://git-scm.com/
[git-setup]: https://help.github.com/articles/set-up-git
[google-phone-gallery]: http://web.archive.org/web/20131215082038/http://www.android.com/devices
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[node]: https://nodejs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
