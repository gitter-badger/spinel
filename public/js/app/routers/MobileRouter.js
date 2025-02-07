// MobileRouter.js
// ---------------
define(["jquery", "backbone", "./BaseRouter", "views/HomePageView"],

    function($, Backbone, BaseRouter, View) {

        var MobileRouter = BaseRouter.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            // All of your Backbone Routes (add more)
            routes: {

                // When there is no hash bang on the url, the home method is called
                "": "index"

            },

            index: function() {

                // Instantiates a new view which will render the header text to the page
                new View();

            }

        });

        // Returns the MobileRouter class
        return MobileRouter;

    }

);