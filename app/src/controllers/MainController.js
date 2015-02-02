/**
 * Main Wrapper Controller
 * @author: Jacek Dominiak
 * @copyright: Jacek Dominiak
 * @created: 15/01/15
 */

class MainController {

    constructor(
        Configuration
        , $window
    ) {
        /**
         * Inject configuration to be widely available
         */
        this.config = Configuration;

        /**
         * Flag to check if you should enable debug views or not as ones should only be available on localhost
         * @type {boolean}
         */
        this.debug = (window.location.hostname == 'localhost');

        // pass window object
        this._window = $window;

    }

    urlButtonVisible() {
        return (this._window.location.href.indexOf("edit") > -1);
    }

    /**
     * Get Url of the current page
     */
    getUrlString() {
        return this._window.location.href;
    }

    /**
     * Function to be called once the URL button has been pressed
     */
    copyUrlFeedback() {
        alert("Link copied");
    }

}
