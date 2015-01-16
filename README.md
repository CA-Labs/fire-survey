#Fire Survey

##Overview
Fire Survey is a survey system designed to capture custom made surveys with ability to edit and review responses after form submission.

##Installation
1. Clone the repository
1. Install dependencies with `npm install` and `bower install`
1. Run `gulp` task to build up the sources
1. Point your http server to the `index.html` path

##Usage
Write up your form in *JSON* format and place it under `forms` directory.

All the forms of the system are generated by Angular-formly project. (url: [http://formly-js.github.io/angular-formly/](http://formly-js.github.io/angular-formly/)). Please refer to the project documentation for detailed overwiew of the specification.

 You can access the form under `/form/:FORM_FILE_NAME` route.

 Once submitted the url will be changed to the edit mode. URL will include unique submission identifier, which allows to review and edit the data.

##Configuration

* Under `app-init.js` you can edit two configuration sections:
    1. Configuration
        * **title** - where title for all forms is set
        * **text** - this is a placeholder for descriptive text which will be shown on the top of the surveys.
    1. FirebaseConfig
        * **url** - your [Firebase](https://www.firebase.com) application endpoint
        * **forms** - document under which all the forms data will be stored

##Tips & Tricks
- If served from `localhost` debug panel will be shown with current representation of the form data.

##The MIT License

 Copyright (c) 2009-2014 Stuart Knightley, David Duponchel, Franz Buchinger, António Afonso

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.