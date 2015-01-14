/**
 * Application initialization
 * @author: Jacek Dominiak
 * @copyright: Jacek Dominiak
 * @created: 14/01/15
 */
angular.module('firesurvey', [
    'ui.router'
    , 'formly'
])
    .config(ApplicationConfig);

