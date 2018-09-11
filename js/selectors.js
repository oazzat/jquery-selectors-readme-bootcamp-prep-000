function paragraphSelector(){
  var pTag = $('p')
  return pTag
}

function lastImageSelector(){
  var imageArray = $('img')
  var lastImage = imageArray[imageArray.length-1]
  return lastImage
}