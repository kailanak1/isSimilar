# Are Similar 

Code Signal #17

> Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays. Given two arrays a and b, check whether they are similar.


## Solution 

If the arrays are diffeerent lengths, return false.

```
 if(a.length !== b.length){
     return false
 }
```

Make a new array. Loop through array a and compare each value to array b. If the value doesn't match, push the index into the new array.

```
 let arr = []
    for(let i = 0; i < a.length; i++){
     if(a[i] !== b[i]){
         arr.push(i)
      }
    }
```

The arrays are not similar is the array's length is 1 or greater than 2. 
Use the indexes saved in arr to find the mismatched values of a and b. If the mismatched values are found, the arrays are similar.

```
    if(arr.length === 1 || arr.length > 2) {
        return false;
    } else {
        return a[arr[0]] === b[arr[1]] && a[arr[1]] === b[arr[0]]
  }
  ```
