/**
 * Created by jacek on 1/13/2015.
 */

class FormController {

    constructor(
        $state
        , $stateParams
        , $http
        , $firebase
        , FirebaseConfig
    ) {

        // Closure
        var self = this;

        /**
         * Data holder for the form data
         * @type {{}}
         */
        this.formData = {};

        /**
         * Assign state and state Parameters
         */
        this._state = $state;
        this._stateParams = $stateParams;

        /**
         * Fetch forms data to be rendered
         */

        // initalize formFields
        this.formFields = '';

        // for debug purposes, check where are you hosted
        const urlExtension = (window.location.hostname == 'localhost') ?
            '/fire-survey/forms/' :
            '/forms/';

        // fetch it from the base
        $http.get(window.location.protocol +
        '//' + window.location.host +
            urlExtension +
            this._stateParams.formTemplate + '.json')
                .then(function (res) {
                    self.formFields = res.data;
                }, function () {
                    self.error = "No template found";
                });

        // Initialize Firebase
        this.results = $firebase(new Firebase(FirebaseConfig.url + FirebaseConfig.forms)).$asArray();
    }

    clean() {
        this.formData = {};
    }

    submit() {
        // Closure
        var self = this;
        // Add new element
        this.results.$add(this.formData).then(
            function (value) {
                self._state.transitionTo('edit', {"formTemplate": self._stateParams.formTemplate, "resultId": value.key()});
                self.message = "Data Saved!";
            }
        );
    }
}
