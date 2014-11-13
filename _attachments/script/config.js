(function(acralyzerConfig, undefined ) {
    "use strict";
    // Update this variable with the name of your app:
    acralyzerConfig.defaultApp = "";
    acralyzerConfig.backgroundPollingOnStartup = true;

    acralyzerConfig.appDBPrefix = "acra-";
    acralyzerConfig.displayRelativeDates = true;

    // Helper functions
    acralyzerConfig.formatDate = function(d) {
        var m = moment(d);
        return acralyzerConfig.displayRelativeDates ? m.fromNow() : m.format();
    };

}( window.acralyzerConfig = window.acralyzerConfig || {} ));
