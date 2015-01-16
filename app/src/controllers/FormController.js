/**
 * Created by jacek on 1/13/2015.
 */

class FormController {

    constructor(
        $stateParams
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
         * Assign state Parameters
         */
        this._stateParams = $stateParams;

        /**
         * Fetch forms data to be rendered
         */

        // initalize formFields
        this.formFields = '';
        // fetch it from the base
        $http.get(window.location.protocol +
        '//' + window.location.host +
        '/fire-survey/forms/' +
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
        this.results.$add(this.formData).then(
            function (value) {
                //TODO: change the state to the saved one
                console.log(value.key());
            }
        );
    }
}
