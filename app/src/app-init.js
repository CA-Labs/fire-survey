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
    , 'ngClipboard'
])
    .config(ApplicationConfig)
    .constant('Configuration', {
        "title": "MODAClouds is trying to make small Cloud Providers more visible",
        "subtitle": "Help us collect information for our experimental DSS tool to create a Cloud Services Directory"
        , "text": "This survey is designed to collect information from European Cloud Service providers about their services in order to showcase them in a decision support system (DSS) for ease of cloud service selection by the end user. You can select your company name and fill in the information in the survey. After clicking submit, the web link that appears on the top can be used by multiple members from a company to update or complete the partially filled information of their company."
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
function ApplicationConfig($stateProvider, $urlRouterProvider, formlyConfigProvider, ngClipProvider) {

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

    // extend angular-formly with custom templates
    formlyConfigProvider.setTemplateUrl('multi-checkbox', 'views/multi-checkbox-template.html');
    formlyConfigProvider.setTemplateUrl('well-multi-checkbox', 'views/well-multi-checkbox-template.html');
    formlyConfigProvider.setTemplateUrl('well-text', 'views/well-text.html');
    formlyConfigProvider.setTemplateUrl('well-number', 'views/well-number.html');
    formlyConfigProvider.setTemplateUrl('section-title', 'views/section-title.html');

    // ng-clip
    ngClipProvider.setPath('components/zeroclipboard/dist/ZeroClipboard.swf');

}
