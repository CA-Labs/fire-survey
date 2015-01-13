/**
 * Created by jacek on 1/13/2015.
 */

function ApplicationConfig(
    $stateProvider
    , $urlRouterProvider
) {

    $stateProvider
        .state('form', {
            url: '/form'
            , templateUrl: 'views/form.html'
            , controller: 'FormController as Form'
        })
        .state('form.edit', {
            url: '/form/:formId/user/:userEmailId'
            , templateUrl: 'views/form.html'
            , controller: 'FormEditController as Form'
        });

    // fallback routes
    $urlRouterProvider.otherwise('/form');
}
