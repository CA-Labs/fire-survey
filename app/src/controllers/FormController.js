/**
 * Created by jacek on 1/13/2015.
 */

class FormController {

    constructor(
        $stateParams
        , $http
    ) {

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
        //$http.get(window.location.host + '/forms/' + this._stateParams.formTemplate)
        //    .success(function (res) {
        //        this.formTemplate = res.data;
        //    });
        this.formFields = [
            {
                "key": "firstName",
                "type": "text",
                "label": "First Name",
                "placeholder": "Jane"
            },
            {
                "key": "lastName",
                "type": "text",
                "label": "Last Name",
                "placeholder": "Doe"
            }
        ];

    }

    submit() {
        console.log('submitted');
    }
}
