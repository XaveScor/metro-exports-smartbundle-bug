const {
  default: SubDefaultImport,
  named: subNamed,
} = require("test-lib/subroute");
console.log("cjs subroute default import:", SubDefaultImport);
console.log("cjs subroute named import:", subNamed);
