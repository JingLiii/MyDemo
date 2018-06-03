// var graph = {
//   start: {
//     a: 6,
//     b: 2
//   },
//   a: {
//     fin: 1
//   },
//   b: {
//     a: 3,
//     fin: 5
//   },
//   fin: {}
// }

// var costs = {
//   a: 6,
//   b: 2,
//   fin: Infinity
// }

// var parents = {
//   a: 'start',
//   b: 'start',
//   fin: null
// }

var graph = {
  start: {
    a: 2,
    d: 5
  },
  a: {
    b: 7,
    d: 8
  },
  b: {
    end: 1
  },
  c: {
    b: 6,
    end: 3
  },
  d: {
    c: 4,
    b: 2
  },
  end: {}
}

var costs = {
  a: 2,
  b: Infinity,
  c: Infinity,
  d: 5,
  end: Infinity
}

var parents = {
  a: 'start',
  b: null,
  c: null,
  d: 'start',
  end: null
}



var processed = []

function isInArray(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return true;
    }
  }
  return false;
}

function findLostsCostsNode(costs) {
  var cost = Infinity
  var node = ''
  for (var key in costs) {
    if (!isInArray(processed, key)) {
      if (cost > costs[key]) {
        cost = costs[key]
        node = key
      }
    }
  }
  return node
}

var node = findLostsCostsNode(costs)
while (node) {
  var cost = costs[node]
  var neighbors = Object.keys(graph[node])
  neighbors.forEach((item, index) => {
    var newCosts = cost + graph[node][item]
    if (newCosts < costs[item]) {
      costs[item] = newCosts
      parents[item] = node
    }
  })
  processed.push(node)
  node = findLostsCostsNode(costs)
}

console.log(costs)
console.log(parents)