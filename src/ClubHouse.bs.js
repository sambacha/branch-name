// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Pervasives = require("bs-platform/lib/js/pervasives.js");
var ClubhouseLib = require("clubhouse-lib");

function create(token) {
  return ClubhouseLib.default.create(token);
}

function getStory(client, id) {
  return client.getStory(id);
}

var Bindings = {
  create: create,
  getStory: getStory
};

function getStoryName(id, config) {
  var token = config.authToken;
  var client = token !== undefined ? ClubhouseLib.default.create(token) : Pervasives.failwith("Missing authToken");
  return client.getStory(id).then(function (story) {
              return Promise.resolve(story.name);
            });
}

exports.Bindings = Bindings;
exports.getStoryName = getStoryName;
/* clubhouse-lib Not a pure module */
