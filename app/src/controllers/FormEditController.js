/**
 * Created by jacek on 1/13/2015.
 */


class FormEditController extends FormController {

    constructor(
        $stateParams
        , $http
        , $firebase
        , FirebaseConfig
    ) {


        super(
            $stateParams
            , $http
            , $firebase
            , FirebaseConfig
        );

        // Closure
        var self = this;

        // fetch Form data
        const url = FirebaseConfig.url + FirebaseConfig.forms + '/' + $stateParams.resultId;
        var test = $firebase(new Firebase(url)).$asObject();

        this.formData = test;

        console.log(test);
    }

    submit() {
        this.formData.$save().then(function () {
            self.message = "Data Saved!";
        }, function (error) {
            self.error = error;
        });
    }
}
