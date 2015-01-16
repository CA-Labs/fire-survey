/**
 * Created by jacek on 1/13/2015.
 */
class FormEditController extends FormController {

    constructor(
        $state
        , $stateParams
        , $http
        , $firebase
        , FirebaseConfig
    ) {


        super(
            $state
            , $stateParams
            , $http
            , $firebase
            , FirebaseConfig
        );

        // fetch Form data
        const url = FirebaseConfig.url + FirebaseConfig.forms + '/' + $stateParams.resultId;
        this.formData = $firebase(new Firebase(url)).$asObject();
    }

    /**
     * Overwrite initial submit function as per this controller. On the edit controller
     * the purpose of the submit is to save the data rather then add new element.
     */
    submit() {
        // Closure
        var self = this;

        // Save edited element
        this.formData.$save().then(function () {
            self.message = "Data Saved!";
        }, function (error) {
            self.error = error;
        });
    }
}
