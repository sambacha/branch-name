// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Node = require("@gitbeaker/node");

function findIssue(projectId, id, client) {
  return client.show(projectId, id);
}

var Bindings = {
  findIssue: findIssue
};

function getStoryName(id, host, token, projectId) {
  return $$Node.Gitlab({
                    host: host,
                    token: token
                  }).Issues.show(projectId, id).then(function (issue) {
                return Promise.resolve({
                            TAG: /* Ok */0,
                            _0: issue.title
                          });
              }).catch(function (_err) {
              return Promise.resolve({
                          TAG: /* Error */1,
                          _0: "failed while fetching the story"
                        });
            });
}

exports.Bindings = Bindings;
exports.getStoryName = getStoryName;
/* @gitbeaker/node Not a pure module */
