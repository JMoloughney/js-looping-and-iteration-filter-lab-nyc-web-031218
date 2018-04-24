

// for (const char of 'Hello, world!') {
//   console.log(char);
// }


// for (const <KEY> in <OBJECT>) {
//   // Code in the statement body
// }

function findMatching(drivers, d) {
  const matching = drivers.filter(function(driver){return driver.toUpperCase() === d.toUpperCase()});
  return matching
};

function fuzzyMatch(drivers, d2) {
  const matching = drivers.filter(function(driver){return driver[0] === d2[0] && driver[1] === d2[1]});
  return matching
};

function matchName(drivers, d){
  const matching = drivers.filter(function(driver){return driver.name === d});
  return matching
};
