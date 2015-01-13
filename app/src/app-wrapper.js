/**
 * Angular application wrapper
 * @author: Jacek Dominiak
 * @copyright: Jacek Dominiak
 * @created: 13/01/15
 */

angular.module('fire-survey', [
    'ui.router'
])
    .config(ApplicationConfig) // including routes
    .controller('FormController', FormController)
    .controller('FormEditController', FormEditController);