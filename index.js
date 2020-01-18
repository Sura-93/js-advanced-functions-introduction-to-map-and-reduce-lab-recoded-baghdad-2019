// Your code here
function mapToNegativize (sourceArray) {
  let NewArr =[];
  for (let i =0 ; i< sourceArray.length; i++) {
    NewArr.push(sourceArray[i]* -1) ;
  }
return NewArr;
}
function mapToNoChange (sourceArray) {
  let NewArr =[];
  for (let i =0 ; i< sourceArray.length; i++) {
    NewArr.push(sourceArray[i]) ;
  }
return NewArr;
}
