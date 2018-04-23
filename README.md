# Sample application with Google Vision integration

Simple Images Vision app viewer.

## Installation

Follow these easy steps to install and start the app:

### Set up Rails app

First, install the gems required by the application:

    bundle

Next, install front end dependencies:

    yarn install

Next, execute the database migrations/schema setup:

	bundle exec rake db:setup


### Prerequesities

graphicsmagic

    brew install graphicsmagick

Postgresql

    brew install postgresql

nodejs and yarn

    brew install node
    brew install yarn

### Start the app

setup database on a first run

    rake db:setup

and then

    rails s

## Technologies used

* React/Redux/ReduxForm/ReduxSaga (frontend)
* Ruby On Rails (backend)
* Ruby Grape (api engine)
* Google Vision (image recognition api)
* Postgresql (data store)
* fast_jsonapi (made in netfilx json serializer)

## License

MIT,

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
