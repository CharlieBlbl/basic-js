module.exports = function transform(arr) {
 let res = []
    if (!(arr instanceof Array)){
         throw 'Not implemented';
    } 
    if (arr.length === 0) return arr;
    
    for(let i = 0; i <= arr.length - 1; i++){

        if(arr[i] === "--double-next") {
            if(i < arr.length - 1) {
                res.push(arr[i+1])
            }           
        } else if(arr[i] === "--double-prev") {
            if(i > 0) {
                res.push(arr[i-1])
            }
        }else if (arr[i] === "--discard-prev") {
                if(i > 0) {
                    res.pop()                    
                }
        }else if (arr[i] === "--discard-next") {
                if(i < arr.length - 1) {
                    i++}                    
        }else{
                res.push(arr[i])
                } 
            

            
        
    }
  
    return res
};



