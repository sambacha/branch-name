// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';


function show(message) {
  if (message !== undefined) {
    console.log("Error: " + message);
  }
  console.log("\nUsage: branch-name [options]\n\n  Options:\n\n    -p, --project  project defined in the config file\n    -i, --id       issue identifier\n    -c, --config   Config file location (default to $HOME/.branch-name)\n    -h, --help     Output usage information\n    -d, --doc      Output full documentation\n    ");
  
}

function doc(param) {
  show(undefined);
  console.log("\n\n  Config file\n  ===========\n\n  The config file is a javascript file exporting a config object as default export:\n\n  var config = {...}\n  exports.default = config;\n\n\n  Config object\n  -------------\n\n  {\n    projects:                                             list of project objects\n  }\n\n\n  Project object\n  --------------\n\n  {\n    slug: string,                                       project slug\n    server: \"clubhouse\" | \"jira\" | \"gitlab\",            type of server,\n    serverConfig: object,                               server config object\n    formatter: (id:string, title:string) => string,     an optional branch name formatter\n    sanitizer: (title:string) => string,                an optional issue name sanitizer\n    separator: string                                   an optional word separator (default to \"-\")\n  }\n\n\n  Server config object\n  --------------------\n\n  Jira:\n\n  {\n    host: url,                                          jira server host\n    username: string,                                   jira username\n    password: string,                                   jira personal auth token\n  }\n\n  Clubhouse:\n\n  {\n    authToken: string,                                  clubhouse personal auth token\n  }\n\n\n  Gitlab:\n\n  {\n    host: url,                                          gitlab server host\n    token: string,                                      gitlab personal auth token\n    projectId: num,                                     project id\n\n  }\n\n    ");
  
}

exports.show = show;
exports.doc = doc;
/* No side effect */
