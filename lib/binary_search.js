function binarySearch(list, target) {
  // parameter list: a list of sorted value
  // parameter target: the value to search for

  // if the list has zero length, then return false

  // determine the slice point:
  // if the list has an even number of elements,
  //   the slice point is the number of elements
  //   divided by two
  // if the list has an odd number of elements,
  //   the slice point is the number of elements
  //   minus one divided by two

  // create an list of the elements from 0 to the
  //   slice point, not including the slice point,
  //   which is known as the "left half"
  // create an list of the elements from the
  //   slice point to the end of the list which is
  //   known as the "right half"

  // if the target is less than the value in the
  //   original array at the slice point, then
  //   return the binary search of the "left half"
  //   and the target

  // if the target is greater than the value in the
  //   original array at the slice point, then
  //   return the binary search of the "right half"
  //   and the target

  // if neither of those is true, return true

  if (list.length === 0) {
    return false;
  }

  const mid = list.length % 2 === 0 ? list.length / 2 : (list.length - 1) / 2;
  const left = list.slice(0, mid);
  const right = list.slice(mid + 1);

  if (target < list[mid]) {
    return binarySearch(left, target);
  } else if (target > list[mid]) {
    return binarySearch(right, target);
  }

  return true;
}

function binarySearchIndex(list, target, low = 0, high = list.length - 1) {
  // parameter list: a list of sorted value
  // parameter target: the value to search for
  // parameter low: the lower index for the search
  // parameter high: the upper index for the search

  // if low is equal to high, then return -1 to indicate
  //   that the value was not found

  // determine the slice point:
  //   if the list between the high index and the low index
  //   has an even number of elements,
  //     the slice point is the number of elements
  //     between high and low divided by two
  //   if the list between the high index and the low index
  //   has an odd number of elements,
  //     the slice point is the number of elements
  //     between high and low minus one, divided by two

  // if the target is less than the value in the
  //   original array at the slice point, then
  //   return the binary search of the array,
  //   the target, low, and the slice point
  // if the target is greater than the value in the
  //   original array at the slice point, then return
  //   the binary search of the array, the target,
  //   the slice point plus one, and high
  // if neither of those is true, return the slice point

  //less recursive steps
  // const midPoint = Math.floor((low + high) / 2);
  // if (list[midPoint] === target) return midPoint;
  // if (low === high || list.length === 0) {
  //   return -1;
  // }

  // if (target < list[midPoint]) {
  //   console.log(list.slice(low, midPoint));
  //   return binarySearchIndex(list, target, low, midPoint - 1);
  // } else if (target > list[midPoint]) {
  //   console.log(list.slice(midPoint + 1));
  //   return binarySearchIndex(list, target, midPoint + 1, high);
  // }

  //one more recursive step
  const midPoint = Math.floor((low + high) / 2);
  // console.log(low, midPoint, high);
  if (low > high) {
    return -1;
  }

  if (target < list[midPoint]) {
    console.log(list.slice(low, midPoint));
    return binarySearchIndex(list, target, low, midPoint - 1);
  } else if (target > list[midPoint]) {
    console.log(list.slice(midPoint + 1));
    return binarySearchIndex(list, target, midPoint + 1, high);
  }
}

// console.log(binarySearchIndex([1, 2, 3], 5));

console.log(binarySearchIndex([5, 10, 12, 15, 20, 30, 42, 70, 81, 84], 32));

module.exports = {
  binarySearch,
  binarySearchIndex
};
