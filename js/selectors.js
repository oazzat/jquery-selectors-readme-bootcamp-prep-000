function paragraphSelector(){
  var pTag = $('p')
  return pTag
}

function lastImageSelector(){
  var imageArray = $('img')
  var lastImage2 = imageArray[imageArray.length-1]
  
  var lastImage = $('img:last')
  
  if(lastImage === lastImage2){
  return lastImage
  }
}