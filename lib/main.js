// Import the page-mod API
var pageMod = require("sdk/page-mod");

// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
  include: /.*pantip.com\/topic.*/,
  contentStyle: `.container-liquid {
                  min-width: 0px !important;
                }
                .container-outer {
                  width: 700px !important;
                }
                .display-post-story {
                 line-height: 1.7em !important;
                }`
});
