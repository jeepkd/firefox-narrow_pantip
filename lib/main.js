// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");

pageMod.PageMod({
  include: /.*pantip.com\/topic.*/,
  contentStyleFile: self.data.url("style.css"),
  contentScriptFile: self.data.url("script.js")
});
