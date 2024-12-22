class Constants {
    // Static Constants
    static HEADER = 'Swag Labs';
    static TWITTER_LINK = "https://twitter.com/saucelabs";
    static FACEBOOK_LINK = "https://www.facebook.com/saucelabs";
    static LINKEDIN_LINK = "https://www.linkedin.com/company/sauce-labs/";
    static COPY_RIGHT_LABEL = "© 2020 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy";

    // Mutable static variables
    static URL;
    static STANDARD_USER;
    static LOCKED_OUT_USER;
    static PROBLEM_USER;
    static PERFORMANCE_GLITCH_USER;
    static ERROR_USER;
    static VISUAL_USER;
    static PASSWORD;

    // Static Methods to Set Values
    static setURL(url) {
        this.URL = url;
    }

    static setStandardUser(standardUser) {
        this.STANDARD_USER = standardUser;
    }

    static setLockedOutUser(lockedOutUser) {
        this.LOCKED_OUT_USER = lockedOutUser;
    }

    static setProblemUser(problemUser) {
        this.PROBLEM_USER = problemUser;
    }

    static setPerformanceGlitchUser(performanceGlitchUser) {
        this.PERFORMANCE_GLITCH_USER = performanceGlitchUser;
    }

    static setErrorUser(errorUser) {
        this.ERROR_USER = errorUser;
    }

    static setVisualUser(visualUser) {
        this.VISUAL_USER = visualUser;
    }

    static setPassword(password) {
        this.PASSWORD = password;
    }
}

class ErrorMessages {
    // Mutable static error variables
    static ERROR_USERNAME_AND_PASSWORD_MISMATCH;
    static ERROR_EMPTY_USERNAME_AND_PASSWORD;
    static ERROR_WRONG_NAVIGATION;

    // Static Methods to Set Values
    static setERROR_USERNAME_AND_PASSWORD_MISMATCH(errorMessage) {
        this.ERROR_USERNAME_AND_PASSWORD_MISMATCH = errorMessage;
    }

    static setERROR_EMPTY_USERNAME_AND_PASSWORD(errorMessage) {
        this.ERROR_EMPTY_USERNAME_AND_PASSWORD = errorMessage;
    }

    static setErrorWrongNavigation(errorMessage) {
        this.ERROR_WRONG_NAVIGATION = errorMessage;
    }
}
module.exports = {
    Constants,
    ErrorMessages
};