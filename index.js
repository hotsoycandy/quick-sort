/* merge sort */

function sort (arr) {
  if (arr.length <= 1) return arr

  const pivot = 0
  let left = 0
  let right = arr.length - 1

  while (left !== right) {
    if (arr[pivot] > arr[right]) {
      if (arr[pivot] < arr[left]) {
        [arr[right], arr[left]] = [arr[left], arr[right]]
      } else left++
    } else right--
  }
  [arr[right], arr[pivot]] = [arr[pivot], arr[right]]

  let result = []
  result = result.concat(sort(arr.slice(0, left)))
  result.push(arr[left])
  result = result.concat(sort(arr.slice(left + 1, arr.length)))
  return result
}

const arr = []
for (var i = 0; i < 200; i++) arr.push(Math.floor(Math.random() * 2000 + 1))

console.log(sort(arr))
