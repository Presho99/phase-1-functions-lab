// Code your solution in this file!
function distanceFromHqInBlocks(dist) {
  if(dist < 42) {
    return (42 - dist)
  }else{
    return (dist - 42)
  }
}

function distanceFromHqInFeet(dist) {
  if (dist < 42) {
    return ((42 - dist) * 264)
  }else {
    return ((dist - 42) * 264)
  }
}

function distanceTravelledInFeet(dist1, dist2) {
  if (dist1 < dist2) {
    return((dist2 - dist1) * 264)
  } else{
    return ((dist1 - dist2) * 264)
  } 
  }

function calculatesFarePrice(dist1, dist2) {
  const diff = distanceTravelledInFeet(dist1, dist2)
  
  if (diff <= 400) {
    return 0
  }else if (diff > 400 &&  diff<= 2000) {
    return ((diff-400) * 0.02)
}else if (diff > 2000 && diff <= 2500) {
  return 25
}else{
  return "cannot travel that far"
}
}