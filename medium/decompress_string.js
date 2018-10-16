// var decompressString = function(str) {
//     if(!str.length) return "";
// const numba = {"0": true, "1": true, "2": true, "3": true, "4": true, "5": true, "6": true, "7": true, "8": true, "9": true};
//
//     const stack = [];
//     let temp = "";
//     for(let i = 0; i < str.length; i ++){
//         if(str[i] === "["){
//             if(temp.length){
//               stack.push(temp);
//                 temp = "";
//             }
//             stack.push(str[i]);
//         }else if(str[i] === "]"){
//           let less = stack.pop();
//           let temper = temp;
//             while(less !== '['){
//               temper = less + temper;
//               less = stack.pop();
//             }
//             less = stack.pop();
//             stack.push(temper.repeat(parseInt(less)));
//             temp = "";
//         }else if(numba[str[i]] && !numba[str[i+1]] || !numba[str[i]] && numba[str[i+1]]){
//                 temp += str[i];
//                 stack.push(temp);
//                 temp = "";
//         }else{
//             temp += str[i];
//         }
//     }
//     stack.push(temp);
//     return stack.join("");
//
// };




function decompressString(str) {
  const number = {"0": true, "1": true, "2": true, "3": true, "4": true, "5": true, "6": true, "7": true, "8": true, "9": true};
  let temp = "";
  const stack = [];
  // console.log("hi")
  for(let i = 0; i < str.length; i ++){
    if(str[i] === "["){
      if(temp.length){
        stack.push(temp);
        temp = "";
      }
      // console.log(stack, str[i])
      stack.push("[");
    }else if(str[i] === "]") {
      let isOpenBracket = stack.pop();
      let repeatString = temp;
      while(isOpenBracket !== "["){
        repeatString = isOpenBracket + repeatString;
        isOpenBracket = stack.pop();
      }
      isOpenBracket = stack.pop();
      stack.push(repeatString.repeat(parseInt(isOpenBracket)));
      temp = "";
    }else if(number[str[i]] && !number[str[i+1]] || !number[str[i]] && number[str[i+1]]){
      temp += str[i];
      stack.push(temp);
      temp = "";
    }else{
      temp += str[i];
    }
  }
  stack.push(temp);
  return stack.join("");
}

console.log(decompressString("3[abc]4[ab]c") === "abcabcabcababababc");
console.log(decompressString("10[a]") === "aaaaaaaaaa");
console.log(decompressString("2[3[a]b]") === "aaabaaab");
console.log(decompressString("100[leetcode]") === "leetcode".repeat(100));
console.log(decompressString("30[a2[b]]") === "abb".repeat(30));
console.log(decompressString("3[adef2[b4[c]]]") === "adefbccccbccccadefbccccbccccadefbccccbcccc");
console.log(decompressString("leetcode") === "leetcode");
console.log(decompressString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef") === "zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef");
