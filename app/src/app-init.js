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
    , 'firebase'
])
    .config(ApplicationConfig)
    .constant('Configuration', {
        "title": "Fire Survey"
        , "text": "fsdfsdfdsfsdfsd fds "
    })
    .constant('FirebaseConfig', {
        url: 'https://ca-fire-survey.firebaseio.com/'
        , forms: 'results'
    });


/**
 * Application Configuration with Routes
 * @param $stateProvider
 * @param $urlRouterProvider
 * @constructor
 */
function ApplicationConfig($stateProvider, $urlRouterProvider, formlyConfigProvider) {

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
        .state('edit', {
            url: '/edit/:formTemplate/result/:resultId'
            , templateUrl: 'views/form.html'
            , controller: 'FormEditController as Form'
        });

    // fallback routes
    $urlRouterProvider.otherwise('/form/default');

    // extend angular-formly with custom template
    formlyConfigProvider.setTemplateUrl('multi-checkbox', 'views/multi-checkbox-template.html');
}
