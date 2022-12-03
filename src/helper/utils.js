export const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const sortObjectsFromPoint = (objects, point) => {
  let relativeDistances = new Array(objects.length);
  let sortedArray = new Array(objects.length);

  for (let i = 0; i < objects.length; i++) {
    let distance =
      Math.pow(point.x - objects[i].x, 2) + Math.pow(point.y - objects[i].y, 2);
    relativeDistances[i] = { distance, object: objects[i] };
  }

  relativeDistances.sort((a, b) => {
    if (a.distance === b.distance) return 0;
    else return a.distance < b.distance ? -1 : 1;
  });

  for (let i = 0; i < objects.length; i++) {
    sortedArray[i] = relativeDistances[i].object;
  }

  return sortedArray;
};
