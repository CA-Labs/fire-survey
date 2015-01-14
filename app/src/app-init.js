/**
 * Application initialization
 * @author: Jacek Dominiak
 * @copyright: Jacek Dominiak
 * @created: 14/01/15
 */
angular.module('fire-survey', [
    'ng'
    , 'ui.router'
    , 'formly'
])
    .config(ApplicationConfig);

/**
 * Application Configuration with Routes
 * @param $stateProvider
 * @param $urlRouterProvider
 * @constructor
 */
function ApplicationConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('form', {
            url: '/form/:formTemplate'
            , params: {
                formTemplate: {
                    value: 'default'
                }
            }
            , templateUrl: 'views/form.html'
            , controller: 'FormController as Form'
        })
        .state('form.edit', {
            url: '/form/:formId/user/:userEmailId'
            , templateUrl: 'views/form.html'
            , controller: 'FormEditController as Form'
        });

    // fallback routes
    $urlRouterProvider.otherwise('/form/default');
}