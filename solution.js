function areSimilar(a, b) {
 if(a.length !== b.length){
     return false
 }
 let arr = []
    for(let i = 0; i < a.length; i++){
     if(a[i] !== b[i]){
         arr.push(i)
      }
    }
   
    if(arr.length === 1 || arr.length > 2) {
        return false;
    } else {
        return a[arr[0]] === b[arr[1]] && a[arr[1]] === b[arr[0]]
  }

}
  
