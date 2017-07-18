function iterativeLog(array){
  function callback(element, index){
    console.log(`${index}: ${element}`)
  }
  array.forEach(callback)
}

function iterate(callback) {
  arr = ["hi"]
  arr.forEach(callback)
  return arr
}


function doToArray(array, callback) {
  array.forEach(callback)
}
