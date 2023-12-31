// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked =[];
  let index =0;
  while(index< array.length){
    chunked.push(array.slice(index,index+size));
    index += size;
  }
  return chunked;
}

chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)

module.exports = chunk;

// Solution 1
//   const chunked = [];

//     for( let element of array){
//         const last = chunked[chunked.length -1];
//         console.log('--element--',element);
//         console.log('--chunked--',chunked);
//         console.log('--last--',last);

        
//         if(!last || last.length ===size){
//             console.log("==if===");
//             chunked.push([element]);
//         }else{
//             console.log("==else===");
//             last.push(element);
//         }
//     }
//     return chunked;
