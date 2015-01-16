/**
 * Main Wrapper Controller
 * @author: Jacek Dominiak
 * @copyright: Jacek Dominiak
 * @created: 15/01/15
 */

class MainController {

    constructor(
        Configuration
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
    }

}
