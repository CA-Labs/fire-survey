/**
 * Created by jacek on 1/13/2015.
 */

class FormController {

    constructor(
        $stateParams
        , $http
    ) {
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
         * HTTP
         */
        this._http = $http;

        /**
         * Initialize form template
         */
        this.formTemplate = "";
    }

    init() {
        this._http.get(window.location.host + '/forms/' + this._stateParams.formTemplate)
            .success(function (res) {
                this.formTemplate = res.data;
            });
    }

    submit() {
        console.log('submitted');
    }
}
