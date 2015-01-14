/**
 * Created by jacek on 1/13/2015.
 */

class FormController {

    constructor(
        $stateParams
        , $http
    ) {

        // Closure
        var self = this;

        this.$inject = ['$stateParams', '$http']
        /**
         * Data holder for the form data
         * @type {{}}
         */
        this.data = {};

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
    }

    submit() {
        console.log('submitted');
    }
}
