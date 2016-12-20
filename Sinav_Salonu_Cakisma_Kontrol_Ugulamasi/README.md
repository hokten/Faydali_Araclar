# Ember Tabanlı, Kullanıcı Yetkil
Bu uygulama Ember.js ile oluşturulmuştur. Kullanıcı yetkildendirmesi için OAuth2 protokolü 
kullanılmıştır. OAuth2 sunucusu olarak [Oauth2orizeRecipes](https://github.com/FrankHassanabad/Oauth2orizeRecipes) deposunda bulunan uygulama ve Ember.js Oauth2 entegrasyonu için [Ember Simple Auth](https://github.com/simplabs/ember-simple-auth) kullanılmıştır.

Entegrasyon için ember-simple-auth ve authorization-server kodalrında bazı değişiklikler yapılmıştır.
Bu değişikliklerden biri clientid eklenmesi
## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-login`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

