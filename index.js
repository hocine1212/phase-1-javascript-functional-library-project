function processCollection(collection) {
  let valuesArray;

  if (Array.isArray(collection)) {
    valuesArray = collection;
  } else if (typeof collection === "object" && collection !== null) {
    valuesArray = Object.values(collection);
  }
  return valuesArray;
}

function myEach(collection, callback) {
  let modifiedCollection = processCollection(collection);
  for (let i = 0; i < modifiedCollection.length; i++) {
    callback(modifiedCollection[i]);
  }
  return collection;
}

function myMap(collection, callback) {
  let modifiedCollection = processCollection(collection);
  let newArray = [];
  for (let i = 0; i < modifiedCollection.length; i++) {
    newArray.push(callback(modifiedCollection[i]));
  }
  return newArray;
}

function myReduce(collection, callback, acc) {
  let modifiedCollection = processCollection(collection);
  if (!acc) {
    acc = modifiedCollection[0];
    modifiedCollection = modifiedCollection.slice(1);
  }
  for (let i = 0; i < modifiedCollection.length; i++) {
    acc = callback(acc, modifiedCollection[i], modifiedCollection);
  }
  return acc;
}

function myFind(collection, predicate) {
  let modifiedCollection = processCollection(collection);
  for (let i = 0; i < modifiedCollection.length; i++) {
    if (predicate(modifiedCollection[i])) {
      return modifiedCollection[i];
    }
  }
}

function myFilter(collection, predicate) {
  let modifiedCollection = processCollection(collection);
  let filteredArr = [];
  for (let i = 0; i < modifiedCollection.length; i++) {
    if (predicate(modifiedCollection[i])) {
      filteredArr.push(modifiedCollection[i]);
    }
  }
  return filteredArr;
}

function mySize(collection) {
  let modifiedCollection = processCollection(collection);
  return modifiedCollection.length;
}

function myFirst(array, n) {
  // let modifiedCollection = processCollection(array);
  if (!n) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}
console.log(myFirst([98, 2, 1, 6], 3));

function myLast(array, n) {
  if (!n) {
    return array[array.length - 1];
  } else {
    return array.slice(-n);
  }
}

function myKeys(object) {
  const keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
}

function myValues(object) {
  let values = [];
  for (let key in object) {
    values.push(object[key]);
  }
  return values;
}

function mySortBy(array, callback) {
  let copy = [...array];
  return copy.sort((a, b) => {
    if (callback(a) > callback(b)) {
      return 1;
    } else if (callback(a) < callback(b)) {
      return -1;
    } else return 0;
  });
}
