var searchInsert = function (nums, target) {
  const newArr = Array.from(new Set([...nums, target])).sort((a, b) => {
    return a - b;
  });
  console.log(newArr);
  return newArr.indexOf(target);
};
searchInsert([1, 2, 3, 4, 5, 10], 2);
