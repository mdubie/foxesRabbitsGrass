var Pizza = function() {
	var slices = 8;

	var obj = {};
	obj.type = 'roni';
	obj.eat = function() {
		slices--;
	};
	obj.status = function() {
		return slices;
	};

	return obj;
};

var piz = Pizza();
console.log(piz.status())
piz.eat()
console.log(piz.status())


// let pizza = 'pizza'

// var Tree = function(value) {
//   return {
//     value: value,
//     children: [],
//     addChild: treeMethods.addChild,
//     forEachBF: treeMethods.forEachBF,
//     forEachDF: treeMethods.forEachDF,
//     mapArrBF: treeMethods.mapArrBF,
//     mapTreeBF: treeMethods.mapTreeBF,
//     containsDF: treeMethods.containsDF
//   };
// }

// var treeMethods = {};
// treeMethods.addChild = function(value) {
//   this.children.push(Tree(value))
// };

// //applies a call back to every value stored in a tree in a breadth first approach
// treeMethods.forEachBF = function(callback) {
//   var queue = [this];

//   while (queue.length) {
//     queue[0].children.forEach((child) => {queue.push(child)})
//     callback(queue.shift());
//   }
// };

// //applies a callback to every value stored in a tree and returns an array of mapped values
// treeMethods.mapArrBF = function(callback) {
//   var queue = [this];
//   var mapped = [];

//   while (queue.length) {
//     queue[0].children.forEach((child) => {queue.push(child)})
//     mapped.push(callback(queue.shift()));
//   }

//   return mapped;
// };

// //maps and mutatates current tree values according to a callback fn in BF manner
// treeMethods.mapTreeBF = function(callback) {
//   var queue = [this];

//   while (queue.length) {
//     var node = queue[0]
//     node.children.forEach((child) => {queue.push(child)})
//     node.value = callback(node)
//     queue.shift();
//   }
// };

// //applies a call back to every value stored in a tree in a depth first approach
// treeMethods.forEachDF = function(callback) {
//   var stack = [this];

//   while (stack.length) {
//     var node = stack.pop();
//     node.children.forEach((child) => {stack.push(child)})
//     callback(node);
//   }
// };

// //searches a tree for a target value in a depth first manner. return a boolean
// treeMethods.containsDF = function(target) {
//   var stack = [this];

//   while (stack.length) {
//     var node = stack.pop();
//     if (node.value === target) {
//       return true;
//     }
//     node.children.forEach((node) => {stack.push(node)});
//   }
//   return false;
// };

// var testTree = Tree(0);
// testTree.addChild(1);
// testTree.addChild(2);
// testTree.addChild(3);
// testTree.addChild(4);
// testTree.addChild(5);
// testTree.children[0].addChild(11);
// testTree.children[1].addChild(12);
// testTree.children[1].addChild(13);
// testTree.children[4].addChild(14);
// testTree.children[4].addChild(15);

// var printValue = function(node) {
//   console.log('Node value: ', node.value);
// }


// testTree.forEachBF(printValue);
// console.log(testTree);



// console.log(testTree)


// var containsNearbyAlmostDuplicate = function(nums, k, t) {
//   var status = false
//   for (var i = 0; i < nums.length; i++) {
//     var range = nums.slice(Math.max(i-k, 0),i).concat(nums.slice(i+1,i+k+1))
//     console.log(nums[i], range)
//     console.log('status ',range.forEach(function(num) {
//       Math.abs(num - nums[i]) < t
//     }))
//     if (range.some(function(num) {
//       Math.abs(num - nums[i]) < t
//     })) {
//       status = true;
//     }
//   }
//   return status;
// };

// var testA = [1,100, 200, 300, 400];
// console.log(testA)
// console.log(containsNearbyAlmostDuplicate(testA, 2, 500))


// var containsDuplicate = function(nums) {
//     return nums.reduce(function(status, num, i, coll) {
//         return status || coll.slice(i+1).indexOf(num) !== -1
//     }, false)
// };

// var testA = [2,2,3];
// var testB = [1,2,3];

// console.log(containsDuplicate(testA), ' should be ', true)
// console.log(containsDuplicate(testB), ' should be ', false)
// Write a program to check whether a given number is an ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

// Note that 1 is typically treated as an ugly number.



// var isUgly = function(num) {
//   if (num === 1) {
//     return true;
//   }

//   var uglyPrimes = [2, 3, 5];

//   var isPrime = function(n) {
//     for (var i = 2; i < n ; i++) {
//       if (n / i % 1 === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   var isUglyHelper = function(target) {
//     for (var j = 2; j < target; j++) {
//       if (target / j % 1 === 0 && isPrime(j) && !uglyPrimes.some(function(prime) {return prime === j; })) {
//         return true;
//       }
//     }
//     return false;
//   }
//   return isUglyHelper(num)
// };

// console.log(isUgly(6))

/**
 * @param {number} n
 * @return {boolean}
 */
// var isHappy = function(n) {
//   var count = 0;
//   while (count < 100) {
//     count++;
//     if (n === 1) {
//       return true;
//     } else {
//       n = n.toString().split('').reduce(function(total, curr) {
//         return total + Math.pow(Number(curr),2)
//       }, 0)
//       n = Number(n);
//     }
//   }  
//   return false;
// };

// console.log(isHappy(1), ' should be ', 1)
// console.log(isHappy(18), ' should be ', 1)


// var oppo = {
//     '{': '}',
//     '[': ']',
//     '(': ')',
// };
 
// var isValid = function(s) {
//   if (s.length === 0) {
//     return true;
//   } else {
//     for (var i = 0; i < s.length - 1; i++) {
//       if (oppo[s[i]] === s[i+1]) {
//         s = s.slice(0,i) + s.slice(i+2);
//         return isValid(s);
//       }
//     }
//     return false;
//   }
// };

// var testA = '{}'
// var testB = '[()]'
// var testC = '()[]{}'
// var testD = '()[({})]{}';
// var testE = ')('
// var testF = '()('



// console.log(isValid(testA), ' should be ', true)
// console.log(isValid(testB), ' should be ', true)
// console.log(isValid(testC), ' should be ', true)
// console.log(isValid(testD), ' should be ', true);
// console.log(isValid(testE), ' should be ', false)
// console.log(isValid(testF), ' should be ', false)


// var isValid = function(brackets) {
//   var pendingPair = 0;
//   var closeBrackets = 0;
  
//   for (var i = 0; i < brackets.length; i++) {
//     if (brackets[i] === '[') {
//       pendingPair += 1;
//     }
    
//     if (brackets[i] === ']') {
//       if (pendingPair > 0) {
//         pendingPair -= 1;
//       } else {
//         closeBrackets += 1;
//       }
//     }
//   }
//   return closeBrackets === 0 && pendingPair === 0;
// }

// var isValidOne = function(brackets) {
//   var counter = 0;
  
//   for (var i = 0; i < brackets.length; i++) {
//     if (brackets[i] === '[') {
//       counter += 1;
//     }
    
//     if (brackets[i] === ']') {
//     	counter -= 1;
//     }

//     if (counter < 0) {
//       return false;
//     }
//   }
//   return counter === 0;
// }

// var testA = '[][]'; // true
// var testB = '[[]'; //false
// var testC = '][]'; //false

// console.log(isValidOne(testA), ' should be ' , true)
// console.log(isValidOne(testB), ' should be ' , false)
// console.log(isValidOne(testC), ' should be ' , false)



//stack problems
//  bracket analyzer
//  undo / redo operations
//  reverse a string
//  tower of hanoi problem
//  function vs argument stack processs
//  linked list stack vs array stack

// var digitalRoot = function(n) {
// 	n = n.toString()
// 	if (n.length === 1) {
// 		return Number(n);
// 	} else {
// 		return digitalRoot(n.split('').reduce((sum, dig) => sum + Number(dig),0))
// 	}
// }

// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6
// console.log(digitalRoot(132189))

// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Example:

// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// function longestConsec(strarr, k) {
// 	var n = strarr.length;
// 	if (n === 0 || k > n || k <= 0) {
// 		return '';
// 	};
//   var lengths = strarr.slice()
//     .map(x => x.length)
//   var maxLength = lengths.slice().reduce((a, n) => Math.max(a, n))
//   var longestI = lengths.indexOf(maxLength);
//   return strarr.slice(longestI, longestI + k).join('')
// }

// var testB = ["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"];
// var testA = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"];
// console.log(longestConsec(testB, 3))




//inputs a list item > outputs index of item or -1

// var binSearch = function(array, target) {
//   var cummIndex = 0;
//   var status = false;
//   var binSearchHelper = function(subArray) {
//     if (subArray.length === 1) {
//       if (target === subArray[0]) {
//         status = true;
//       }
//     } else if (subArray.length > 1) {
//       var midIndex = Math.floor(subArray.length/2);
//       var midValue = subArray[midIndex];
//       if (target === midValue) {
//         cummIndex += midIndex;
//         status = true;
//       } else if (target < midValue) {
//         binSearchHelper(subArray.slice(0, midIndex));
//       } else if (target > midValue){
//         cummIndex += midIndex;
//         binSearchHelper(subArray.slice(midIndex));
//       }
//     }
//   };
//   binSearchHelper(array);
//   return status
//   ? cummIndex
//   : -1;
// };

// var a1 = [1,4,6,7,12,15,18,19,25,28,32,51];
// var a2 = [1,3,8]
// console.log(binSearch(a1, 32), ' should be ', a1.indexOf(32))
// console.log(binSearch(a1, 55), ' should be ', a1.indexOf(55))
// console.log(binSearch(a2, 1), ' should be ', a2.indexOf(1))
// console.log(binSearch(a2, 55), ' should be ', a2.indexOf(55))

// var testArray = [1,10];
// console.log(binSearch(testArray, 1))



// function countValuesInObj(obj, val) {
//   var count = 0;
//   function countHelper(obj) {
//     for (var key in obj) {
//       if (obj[key] === val) {
//         count += 1;
//       }
//       if (typeof obj[key] === 'object') {
//         countHelper(obj[key])
//       }
//     }
//   }
//   countHelper(obj);
//   return count;
// }

// function countValuesInObj(obj, val) {
//   if (typeof obj !== 'object') {
//     if (obj === val) {
//       console.log('found!')
//       return 1;
//     } else {
//       console.log('not found!')
//       return 0;
//     }
//   } else if (typeof obj === 'object') {
//     for (var key in obj) {
//       countValuesInObj(obj[key], val);
//     }
//   }
// }
// 
// 
// 
// 
//
//
//
// function countValuesInObj(obj, val) {
//   var count = 0;
//   function countHelper(obj) {
//     for (var key in obj) {
//       if (obj[key] === val) {
//         count += 1;
//       }
//       if (typeof obj[key] === 'object') {
//         countHelper(obj[key])
//       }
//     }
//   }
//   countHelper(obj);
//   return count;
// }

// function countValuesInObj(obj, val) {
//   for (var key in obj) {
//     console.log(key)
//     if (typeof obj[key] !== 'object') {
//       if (obj[key] === val) {
//         console.log('found')
//         return 1;
//       } else if (obj[key] !== val) {
//         console.log('not found')
//         return 0;
//       }
//     } else if (typeof obj[key] === 'object') {
//       countValuesInObj(obj[key])
//     }
//   }
// }


// //var obj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'y'};
// var obj = {'e': 'y', 'f': 'y'}
// console.log(countValuesInObj(obj, 'y'), ' should be ', 2)
//console.log(countValuesInObj(obj, 'e'), ' should be ', 1)
//console.log(countValuesInObj({a:'t'},'t'))

// function mergeSort(arr) {
//   var brokenList = [];
//   function listBreak(arr) {
//     if (arr.length === 0) {
//       return;
//     } else if (arr.length === 1) {
//       brokenList.push(arr)
//       return;
//     } else {
//       listBreak(arr.slice(0 , Math.ceil(arr.length/2)));
//       listBreak(arr.slice(Math.ceil(arr.length/2)))
//     }
//   }
//   listBreak(arr)
//   console.log(brokenList)

//   function listBuild(nestedArr) {
//     if (nestedArr.length === 1) {
//       return nestedArr[0];
//     } else {
//       //console.log(nestedArr)
//       var newNested = [];
//       var i = 0;
//       while (i + 2 < nestedArr.length) {
//         while (nestedArr[i][0] || nestedArr[i+1][0]) {
//           if (nestedArr[i] < nestedArr[i+1]) {
//             var left = nestedArr[i].shift();
//             var right = 
//             newNested.push(nestedArr[i].concat(nestedArr[i+1]))
//           } else {
//             newNested.push(nestedArr[i+1].concat(nestedArr[i]))
//           }
//         }
//         i++;
//       }
//       console.log(newNested)
//       listBuild(newNested);
//     }
//   }
//   return listBuild(brokenList);
  
// }

//mergeSort([1,2,3,4,5])


// var a = [1,2]
// console.log(a.slice(1))
// console.log(a.slice(0,1))

// var b = [1,2,3]
// console.log(b.slice(2))
// console.log(b.slice(0,2))


// //// three types of recursive structures

// //closure to store results in a values. each recursive call updates the closure variables
// var factorialClosure = function(n) {
//   var result = 1;
//   var factHelper = function(n) {
//     if (n === 0) {
//       return;
//     } else {
//       result *= n;
//       factHelper(n-1);
//     }
//   }
//   factHelper(n);
//   return result
// }

// console.log(factorialClosure(0), ' should be ', 1);
// console.log(factorialClosure(1), ' should be ', 1);
// console.log(factorialClosure(2), ' should be ', 2);
// console.log(factorialClosure(3), ' should be ', 6);
// console.log(factorialClosure(4), ' should be ', 24);
// console.log(factorialClosure(5), ' should be ', 120);

// //pure recursion. updated accumlator value is propogates through each call in final return
// var factorial = function(n) {
//   if (n === 0) {
//     return 1;
//   } else return n * factorial(n-1)
// }

// console.log(factorial(0), ' should be ', 1);
// console.log(factorial(1), ' should be ', 1);
// console.log(factorial(2), ' should be ', 2);
// console.log(factorial(3), ' should be ', 6);
// console.log(factorial(4), ' should be ', 24);
// console.log(factorial(5), ' should be ', 120);

// //assisted recursion. accumlator value is passed as a second argument. requires an initilizator assignment for original call
// var factorialExtraArg = function(n) {
//   var result = arguments[1] || 1;
//   if (n === 0) {
//     return result;
//   } else return factorialExtraArg(n-1, result*n)
// }

// console.log(factorialExtraArg(0), ' should be ', 1);
// console.log(factorialExtraArg(1), ' should be ', 1);
// console.log(factorialExtraArg(2), ' should be ', 2);
// console.log(factorialExtraArg(3), ' should be ', 6);
// console.log(factorialExtraArg(4), ' should be ', 24);
// console.log(factorialExtraArg(5), ' should be ', 120);


// var fib = function(n) {
//   if (n <= 1) {
//     return 1;
//   } else return fib(n-1) + fib(n-2);
// }

// console.log(fib(0), ' should be ', 1)
// console.log(fib(1), ' should be ', 1)
// console.log(fib(2), ' should be ', 2)
// console.log(fib(3), ' should be ', 3)
// console.log(fib(4), ' should be ', 5)


// var testA = 'a'
// var testB = 'aba'
// var testC = 'abba'
// var testD = 'aabb'

// var palindrome = function(str) {
//   if (str.length <= 1) {
//     return true;
//   } else if (str[0] !== str[str.length -1]) {
//       return false;
//   } else return palindrome(str.slice(1,str.length-1))
// }

// console.log(palindrome(testA), ' should be ', true)
// console.log(palindrome(testB), ' should be ', true)
// console.log(palindrome(testC), ' should be ', true)
// console.log(palindrome(testD), ' should be ', false)



// var stockPrices = [1,2,3,4,105];

// var stockPicker = function(priceList) {
//   return priceList.reduce(function(maxProfit, currBuyPrice, i, pl) {
//     if (pl.slice(i).length > 1) {
//       var currBuyProfit = pl.slice(i).reduce(function(maxSellProfit, currSellPrice) {
//         var currSellProfit = currSellPrice - currBuyPrice;
//         if(currSellProfit > maxSellProfit) {
//           return currSellProfit;
//         }
//         return maxSellProfit;
//       });
//       if (currBuyProfit > maxProfit) {
//         return currBuyProfit;
//       }
//       return maxProfit;
//     }
//     return maxProfit;
//   });
// };

// console.log(stockPicker(stockPrices));



// Description:

// Your task, is to create a NxN spiral with a given size.

// For example, spiral with size 5 should look like this:

// 00000
// ....0
// 000.0
// 0...0
// 00000
// and with the size 10:

// 0000000000
// .........0
// 00000000.0
// 0......0.0
// 0.0000.0.0
// 0.0..0.0.0
// 0.0....0.0
// 0.000000.0
// 0........0
// 0000000000
// Return value should contain array of arrays, of 0 and 1, for example for given size 5 result should be:

// [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
// Because of the edge-cases for tiny spirals, the size will be at least 5.

// General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.
// 
// build array of array of zeros
// from top 2i
// 
// from right n-1 - 2i
// 
// from bottom n-1 - 2i
// 
// from left 2i
// 
// increment i
// 
// 

//tl[0,0] tr[0,n-1] br[n-1, n-1] bl[n-1,0] tl[2, 0] tr[2, n-1-2] br[n-1-2, n -1 -2] bl[n-1-2, 2]
//
//top 0, right n-1, bottom n-1, left 0, top 2, right n-1-2, bottom n-1-2, left 2
//
//t 0
//r n-1
//bottom n-1
//left 0
//

// var drawTop = function(spiral,t,r,b,l){
//   for(var i = l; i <= r; i++){
//     spiral[t][i] = 1;
//   }
//   return spiral;
// };

// var drawRight = function(spiral,t,r,b,l){
//   for(var i = t; i <= b; i++){
//     spiral[i][r] = 1;
//   }
//   return spiral;
// };

// var drawBottom = function(spiral,t,r,b,l){
//   for(var i = l; i <= r; i++){
//     spiral[b][i] = 1;
//   }
//   return spiral;
// };

// var drawLeft = function(spiral,t,r,b,l){
//   for(var i = t; i <= b; i++){
//     spiral[i][l] = 1;
//   }
//   return spiral;
// };

// var spiralize = function(n){
//   var spiral = new Array(n+1).join(0).split('').map(function(x){
//     return new Array(n+1).join(0).split('').map(x => Number(x));
//   });
//   var t = 0;
//   var r = n-1;
//   var b = n-1;
//   var l = 0;

//   spiral = drawTop(spiral,t,r,b,l);
//   t += 1;
//   spiral = drawRight(spiral,t,r,b,l);
//   r -= 1;

//   while (true){

//     if(b-t < 1){break}
//     spiral = drawBottom(spiral,t,r,b,l);
//     b--;t++;

//     if(r-l < 1){break}
//     spiral = drawLeft(spiral,t,r,b,l);
//     l++;r--;

//     if(b-t < 1){break}
//     spiral = drawTop(spiral,t,r,b,l);
//     b--;t++;

//     if(r-l < 1){break}
//     spiral = drawRight(spiral,t,r,b,l);
//     l++;r--;

//   }
//   return spiral;
// };

// console.log(spiralize(9));

//evens overdo it
//odds are nice

// Description:

// Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

// Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.


// Before the game begins, players set up the board and place the ships accordingly to the following rules:
// There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
// Each ship must be a straight line, except for submarines, which are just single cell.

// The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

// This is all you need to solve this kata. If you're interested in more information about the game, visit this link.

//
//4:1
//3:2
//2:3
//1:4
//
//
//pluck [4,3,3,2,2,2,1].forEach(validateShip)
//
//fns
//validate ship (n)
//  horizontal
//  verticle
//  n in a row
//  nothing adjacent
//  mark as validated (map to 2)
//  
//check if there are any more 1s
//  

// var valid = [
//   [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//   [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//   [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ];

// var count = function(map, start){
//   x = start.x;
//   y = start.y;
//   var countH = 0;
//   while(map[y] && map[y][x] === 1){
//     countH++;
//     x++;
//   }
//   x = start.x;
//   y = start.y;
//   var countV = 0;
//   while(map[y] && map[y][x] === 1){
//     countV++;
//     y++;
//   }
//   var hor = countH > countV;
//   var length = hor ? countH : countV;
//   return {length: length, hor: hor};
// };

// var mark = function(map, ship, start){
//   x = start.x;
//   y = start.y;
//   if (ship.hor){
//     for(var i = x-1; i <= x+ship.length; i++){
//       if(map[y-1] && map[y-1][i]){
//         map[y-1][i] = 2;
//       } if(map[y] &&  map[y][i]){
//         map[y][i] = 2;
//       } if(map[y+1] && map[y+1][i]){
//         map[y+1][i] = 2;
//       }
//     }
//   } else {
//     for(var j = y-1; j <= y + ship.length; j++){
//       if(map[j] && map[j][x-1]){
//         map[j][x-1] = 2;
//       } if(map[j] &&  map[j][x]){
//         map[j][x] = 2;
//       } if(map[j] && map[j][x+1]){
//         map[j][x+1] = 2;
//       }
//     }
//   }
//   return map;
// }

// var validateShip = function(map, start){
//   var ship = count(map,start);
//   return ship;
// }

// var findShips = function(map){
//   var ships = [];
//   for(var i = 0; i < 10; i++){
//     for(var j = 0; j < 10; j++){
//       var ship = validateShip(map, {x:i,y:j});
//       if (ship.length !== 0){
//         ships.push(ship.length);
//         map = mark(map, ship, {x:i,y:j});
//       }
//     }
//   }
//   return ships;
// };

// var validateMap = function(map){
//   var ships = findShips(map);
//   var shipsObj = ships.reduce(function(acum, shipLength){
//     if (shipLength in acum){
//       acum[shipLength]++;
//     } else {
//       acum[shipLength] = 1;
//     }
//     return acum;
//   },{});
//   var referenceShips = { '1': 4, '2': 3, '3': 2, '4': 1 };
//   for (var length in referenceShips){
//     if (referenceShips[length] !== shipsObj[length]){
//       return false;
//     }
//   }
//   return true;
// }

// console.log(validateMap(valid));

//console.log(valid)





// /*
// Description:

// A poor miner is trapped in a mine and you have to help him to get out !

// Only, the mine is all dark so you have to tell him where to go.

// In this kata, you will have to implement a method solve(map, miner, exit) that has to return the path the miner must take to reach the exit as an array of moves, such as : ['up', 'down', 'right', 'left']. There are 4 possible moves, up, down, left and right, no diagonal.

// map is a 2-dimensional array of boolean values, representing squares. false for walls, true for open squares (where the miner can walk). It will never be larger than 5 x 5. It is laid out as an array of columns. All columns will always be the same size, though not necessarily the same size as rows (in other words, maps can be rectangular). The map will never contain any loop, so there will always be only one possible path. The map may contain dead-ends though.

// miner is the position of the miner at the start, as an object made of two zero-based integer properties, x and y. For example {x:0, y:0} would be the top-left corner.

// exit is the position of the exit, in the same format as miner.

// Note that the miner can't go outside the map, as it is a tunnel.

// Let's take a pretty basic example :

// var map = [[true, false],
//     [true, true]];

// solve(map, {x:0,y:0}, {x:1,y:1});
// // Should return ['right', 'down']

// ooox
// oxox
// xxox
// ooox

// have a fork history, if run into a space that miner cannot go any direction go back to fork and take other path

// fns
// options (map, miner pos) > (['up', 'down'])
// isFork (move options) > (n)
// miner move (direction) > (update miner location)
// isExit (miner pos, exit pos) > (true/false)

// vars
// miner move history
// fork history

// solution
//   if isExit
//     return miner move history
//   else
//     check options
//     if fork
//       push to fork history
//     if not fork
//       miner move
//       push to move history
//     if dead end
//       move miner to last fork
//       update miner move history
//  */

// var isExit = function(miner, exit){
//   return miner.x === exit.x && miner.y === exit.y;
// };

// //isExit unit test
// // var minerA = {x:1,y:1};
// // var minerB = {x:0,y:1};
// // var exitA = {x:1,y:1};
// // console.log(isExit(minerA,exitA), ' should be ', true);
// // console.log(isExit(minerB,exitA), ' should be ', false);

// var findOptions = function(miner, map, moveHistory){
//   var x = miner.x;
//   var y = miner.y;
//   var options = [];
//   if (map[x+1] && map[x+1][y]){
//     options.push('right')
//   } if (map[x-1] && map[x-1][y]){
//     options.push('left')
//   } if (map[x] && map[x][y+1]){
//     options.push('down')
//   } if (map[x] && map[x][y-1]){
//     options.push('up')
//   }
//   if (moveHistory.length > 0){
//     var last = moveHistory[moveHistory.length-1];
//     var opposites = {'up':'down','down':'up','left':'right','right':'left'}
//     var backwards = opposites[last];
//     options.splice(options.indexOf(backwards),1)
//   }
//   return options;
// }

// //options unit test
// // var minerC = {x:0,y:0};
// // var mapA = [[true, false],
// //     [true, true]];
// // var mapB = [[true, false],
// //     [false, true]];
// // var mapC = [[true, true],
// //     [true, true]]; 
// // console.log(findOptions(minerC,mapA,[]), ' should be ', ['right'])
// // console.log(findOptions(minerC,mapB,[]), ' should be ', [])
// // console.log(findOptions(minerC,mapC,[]), ' should be ', ['right', 'down'])

// var moveMiner = function(miner, direction){
//   var x = 0;
//   var y = 0;
//   if (direction === 'right'){
//     x++;
//   } if (direction === 'left'){
//     x--;
//   } if (direction === 'down'){
//     y++;
//   } if (direction === 'up'){
//     y--;
//   }
//   x = miner.x+x;
//   y = miner.y+y;
//   return {x:x,y:y}
// }

// //moveMiner unit testing
// // var minerE = {x:4,y:6};
// // var directionA = 'right';
// // console.log(moveMiner(minerE, directionA), ' should be ', {x:5,y:6})

// var solve = function(map, miner, exit, moveHistory, forkHistory){
//   moveHistory = moveHistory || [];
//   forkHistory = forkHistory || [];
//   if (isExit(miner, exit)){
//     return moveHistory;
//   } else {
//     var options = findOptions(miner,map,moveHistory,forkHistory);

//     if (options.length === 0){ //dead end, go to last fork, update move history, update map (false value for corridor)
//       var lastFork = forkHistory[forkHistory.length - 1];
//       moveHistory = lastFork.moveHistory;
//       miner = lastFork.miner;
//       options = lastFork.options
//       options.shift()
//       moveHistory.push(options[0])
//       miner = moveMiner(miner,options[0])
//       return solve(map, miner, exit, moveHistory, forkHistory);
//     }

//     if (options.length === 1){ // one way, miner.move, update move history
//       moveHistory.push(options[0])
//       miner = moveMiner(miner,options[0])
//       return solve(map, miner, exit, moveHistory, forkHistory);
//     }

//     if (options.length > 1){ // multiple ways, push to fork history, pick a way to go, update move history
//       forkHistory.push({miner:miner, options: options.slice(), moveHistory: moveHistory.slice()})
//       moveHistory.push(options[0]);
//       miner = moveMiner(miner,options[0])
//       return solve(map, miner, exit, moveHistory, forkHistory);
//     }
//   }
// }

//solve unit testing
// var mapD = [[true, false],
//     [true, true]];
// var minerD = {x:0,y:0};
// var exitB = {x:1,y:1};
// console.log(solve(mapD, minerD, exitB), ' should be ', ['right', 'down']);

// var mapE = [
//   [true,false,false,false,true],
//   [true,false,true,false,true],
//   [true,true,true,true,true]
// ]
// var minerE = {x:0,y:0};
// var exitC = {x:0,y:4};
// console.log(solve(mapE, minerE, exitC), ' should be ', ['right', 'right','down','down','down','down','left','left']);


// var mapE = [
//   [true,false,true,false,true],
//   [true,false,true,false,true],
//   [true,true,true,true,true]
// ]
// var minerE = {x:0,y:0};
// var exitC = {x:0,y:4};
// console.log(solve(mapE, minerE, exitC), ' should be ', ['right', 'right','down','down','down','down','left','left']);

//ooo
//xxo
//ooo
//xxo
//ooo
//
//


/*
Suduko validator

given an array of numbers, check that each one has 0-9

 */

// var setTrue = [1,2,3,4,5,6,7,8,9];
// var setFalse = [2,2,3,4,5,6,7,8,9];

// var solutionTrue = [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
//                [6, 7, 2, 1, 9, 5, 3, 4, 8],
//                [1, 9, 8, 3, 4, 2, 5, 6, 7],
//                [8, 5, 9, 7, 6, 1, 4, 2, 3],
//                [4, 2, 6, 8, 5, 3, 7, 9, 1],
//                [7, 1, 3, 9, 2, 4, 8, 5, 6],
//                [9, 6, 1, 5, 3, 7, 2, 8, 4],
//                [2, 8, 7, 4, 1, 9, 6, 3, 5],
//                [3, 4, 5, 2, 8, 6, 1, 7, 9]];

// var solutionFalse = [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
//                [6, 7, 2, 1, 9, 0, 3, 4, 8],
//                [1, 0, 0, 3, 4, 2, 5, 6, 0],
//                [8, 5, 9, 7, 6, 1, 0, 2, 0],
//                [4, 2, 6, 8, 5, 3, 7, 9, 1],
//                [7, 1, 3, 9, 2, 4, 8, 5, 6],
//                [9, 0, 1, 5, 3, 7, 2, 1, 4],
//                [2, 8, 7, 4, 1, 9, 6, 3, 5],
//                [3, 0, 0, 4, 8, 1, 1, 7, 9]];

// var isValid = function(set){
//   var validSet = [1,2,3,4,5,6,7,8,9];
//   var digits = set.reduce(function(digits, n){
//     digits[n] = 1;
//     return digits;
//   },{});
//   return validSet.every(function(digit){
//     return digits[digit] === 1;
//   });
// };

// var rowsToColumns = function(solution){
//   var columns = [];
//   for(var i = 0; i < 9; i++){
//     var column = [];
//     for(var j = 0; j < 9; j++){
//       column.push(solution[j][i])
//     }
//     columns.push(column);
//   }
//   return columns;
// }

// var rowsToSections = function(solution){
//   var sections = [];
//   for(var i = 0; i < 3; i++){
//     for(var j = 0; j < 3; j++){
//       var section = [];
//       for(var k = i*3; k < (i+1)*3; k++){
//         for(var l = j*3; l < (j+1)*3; l++){
//           section.push(solution[k][l])
//         }
//       }
//       sections.push(section);
//     }
//   }
//   return sections;
// }

// var solutionChecker = function(solution){
//   var rows = solution.every(isValid);
//   var columns = rowsToColumns(solution).every(isValid);
//   var sections = rowsToSections(solution).every(isValid);

//   return rows && columns && sections;
// };

// console.log(solutionChecker(solutionTrue));
// console.log(solutionChecker(solutionFalse));

/*
Description:

Create a function that finds the largest palindromic number made from the product of any amount of at least 2 numeric arguments.

Example:

numericPalindrome(937,113) === 81518
As 937 * 113 = 105881 and the largest palindromic number that can be arranged from this result is: 81518.

Further example:

numericPalindrome(57,62,23)==82128
Because you try all possible combinations (57*62,57*23,62*23 and 57*62*23) and find that the product 81282 allow to create the largest palindrome (then again: notice that you are must not necessarily use all the digits of a product, as it was by chance in this case).

Note: single digits numbers are still considered (edge) palindromes, so for:

Test.assert_equals(numeric_palindrome(15, 125, 8),8)
You try all possible combinations (15*125,15*8,125*8,15*125*8) and find that 1875 generates the largest palindrome number, namely 8.

Notes and tips

This kata is quite demanding, as you will need to manage all possible combinations to get products, then use all or some of the digits of each product to get the largest palindrome: as you can easily guess, the computing time can easily grow exponentially, so you will need to work on optimization to be able to make it in the alloted time.

Dealing with 1s and 0s when passed as parameters in a smart way could help. A lot.
*/

//create a set of products for all arguments
//push to an array
//create a function that return largest palidrome of a product
//reduce using function and return result
//
//given a number return the largest palidrome
//categorize into an object that each key (number of occurences of a given digit) that contain an array of the value of each digit
//loop through object to build number
//
//product set in > out
//s(a) > a
//s(ab) > a + s(b), b + s(a)
//abc > a + s(bc), b + s(ac), c + s(ab), ab, ac, bc
//abcd > a + s(bcd), b + s(acd), c + s(abd), d + s(bcd)
//
//abcd
//ab,ac,ad, bc, bd, cd
//abc, abd, acd, bcd
//abcd
//
//current issues
//create set is not optimized
//break out set > product map into function
//rethink palindrome function
//clean up integrations

// var createSet2 = function(values) {
//     var ps = [[]];
//     for (var i=0; i < values.length; i++) {
//       for (var j = 0, len = ps.length; j < len; j++) {
//         ps.push(ps[j].concat(values[i]));
//       }
//     }
//   return ps.filter(x => x.length >= 2);
// };

// var createSet = function(values, set){
//   set = set || [values];
//   var len = values.length;
//   if (len === 2){
//     return values;
//   } else {
//     values.forEach(function(val, index, coll){
//       var temp = coll.slice();
//       temp.splice(index,1);
//       set.push(temp);
//       createSet(temp, set);
//     });
//   }
//   return set;
// };

// var removeDuplicates = function(products){
//   var results = [];
//   var uniques = {};
//   products.forEach(function(product){
//     uniques[product] = 1;
//   });
//   for (var product in uniques){
//     results.push(Number(product));
//   }
//   return results;
// };

// var countDigits = function(product){
//   return product.toString()
//     .split('')
//     .reduce(function(digits, digit){
//       if (digit in digits){
//         digits[digit]++;
//       } else {
//         digits[digit] = 1;
//       }
//       return digits;
//     },{});
// }

// var reverseStr = function(str){
//   return str.split('').reverse().join('')
// }

// var palindrome = function(digits){
//   var result = '';
//   for(var i = 9; i >= 0; i--){
//     while(digits[i] > 1){
//       if(!(result.length === 0 && i === 0)){
//         result += i.toString();
//       };
//       digits[i] -= 2;
//     }
//   }
//   var j = 9;
//   while(digits[j] !== 1){
//     j--;
//   }
//   return Number(result + j + reverseStr(result));
// }


// var numericPalindrome = function(){
//   var values = Array.prototype.slice.call(arguments);
//   if (values.length === 2){
//     return palindrome(countDigits(values[0]*values[1]));
//   }
//   var sets = createSet2(values);
//   var products = sets.map(x => x.reduce((prod, n) => prod*n));
//   var uniqueProducts = removeDuplicates(products)
//   var digitCounts = uniqueProducts.map(countDigits)
//   var largestPalindromes = digitCounts.map(palindrome)
//   return largestPalindromes.reduce(function(max, n){
//     return Math.max(max,n)
//   })
// };

// console.log(numericPalindrome(15, 125, 8))
// console.log(numericPalindrome(57,62,23))



// var getElementsByClassName = function (className) {
//   var results = [];
//   var walkDOM = function (node) {
//     if(containsClass(node, className)){
//       results.push(node);
//     }
//     node = node.firstChild;
//     while(node) {
//       walkDOM(node);
//       node = node.nextSibling;
//     }
//   };
//   walkDOM(document.body);
//   return results;
// };


// var stringifiableObjects = [
//   9,
//   null,
//   true,
//   false,
//   "Hello world",
//   [],
//   [8],
//   ["hi"],
//   [8, "hi"],
//   [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
//   [8, [[],3,4]],
//   [[[["foo"]]]],
//   {},
//   {"a": "apple"},
//   {"foo": true, "bar": false, "baz": null},
//   {"boolean, true": true, "boolean, false": false, "null": null },
//   // basic nesting
//   {"a":{"b":"c"}},
//   {"a":["b", "c"]},
//   [{"a":"b"}, {"c":"d"}],
//   {"a":[],"c": {}, "b": true}
// ];

// //stringifyJSON
// //base case?
// //if type of value === array || object >  recursive call
// //if type of value === string || number || boolean (!array || !object) > call .toString()
// //if type of value === function || undefined > do nothing
// //
// //


// var testA = {"a":{"b":"c"}};
// var testB = [1, 2, 3];
// var testC = 9;
// var testD = {"boolean, true": true, "boolean, false": false, "null": null }
// var testE = {'a': function(a){return a}}
// var testF = {'a': undefined};



// var stringifyJSON = function(object){
//   var result = '';

//   var removeComma = function(str){
//     return str[str.length-1] === ',' ? str.slice(0,str.length-1) : str;
//   };

//   var stringifyRecurse = function(item){
//     if (typeof item === 'boolean' || typeof item === 'number'){
//       result += item.toString() + ',';
//     } else if (typeof item === 'string'){
//       result += '"' + item + '",';
//     } else if (typeof item === 'undefined' || typeof item === 'function'){
//       result += '';
//     } else if (typeof item === 'object'){
//       if(item === null){
//         result += 'null'
//       } else if(Array.isArray(item)){
//         result += '[';
//         for(var i in item){
//           stringifyRecurse(item[i]);
//         }
//         result = removeComma(result);
//         result += '],';
//       } else {
//         result += '{'
//         for(var key in item){
//           if(!(typeof item[key] === 'undefined' || typeof item[key] === 'function')){
//             result += '"' + key.toString() + '":';
//             stringifyRecurse(item[key]);
//           }
//         }
//         result = removeComma(result);
//         result += '},'
//       }
//     }
//   };
//   stringifyRecurse(object);


//   return removeComma(result);
// };

// console.log( 'stringifyJSON: ', stringifyJSON(testE))
// console.log( 'JSON.stringify: ', JSON.stringify(testE))
// console.log( 'stringifyJSON: ', stringifyJSON(testF))
// console.log( 'JSON.stringify: ', JSON.stringify(testF))

// // console.log( 'stringifyJSON: ', stringifyJSON(testA))
// // console.log( 'stringifyJSON: ', stringifyJSON(testB))
// // console.log( 'stringifyJSON: ', stringifyJSON(testC))
// // console.log( 'stringifyJSON: ', stringifyJSON(testD))
// // console.log( 'JSON.stringify: ', JSON.stringify(testA))
// // console.log( 'JSON.stringify: ', JSON.stringify(testB))
// // console.log( 'JSON.stringify: ', JSON.stringify(testC))
// // console.log( 'JSON.stringify: ', JSON.stringify(testD))



// stringifiableObjects.forEach(function(test){
//   console.log('stringifyable expected', JSON.stringify(test));
//   console.log('stringifyable result', stringifyJSON(test));
// });

// used for stringifyJSON spec
// hint: JSON does not allow you to stringify functions or
// undefined values, so you should skip those key/value pairs.
// unstringifiableValues = [
//   {
//     'functions': function(){},
//     'undefined': undefined
//   }
// ];

// unstringifiableValues.forEach(function(obj){
//   console.log('unstringifiable results', obj);
//   //n-console.log('unstringifiable result', stringifyJSON(test));
// });




// function arrayProducts(arr) {
//   return arr.map(function(val, i, col){       //n
//     var copy = col.slice();                   //c
//     copy.splice(i,1);                         //c
//     return copy.reduce(function(prod, val){   //n
//       return prod*val;
//     });
//   });
// }

// var arr = [2, 7, 3, 4];
// console.log(arrayProducts(arr), ' should be ', [84, 24, 56, 42]);


// function smallestSubstring(arr, str) {  
//   var chars = arr.reduce(function(chars, el){
//     chars[el] = 1;
//     return chars;
//   }, {});

//   var subStrLeng = arr.length;
//   var strLen = str.length;
  
//   for(var i = subStrLeng; i <= strLen; i++){
//     for(var j = 0; j + i <= strLen; j++){
//       if(checkMatch(chars, str.slice(j, i+j))){
//         return str.slice(j, i+j);
//       }
//     }
//   }
//   return false;
// }

// function checkMatch(chars, subStr){
//   for(var key in chars){
//     if (subStr.indexOf(key) === -1)
//       return false;
//   }
//   return true;
// }

// var arr1 = ['x', 'y', 'z'];
// var str = 'zxyabc';

// console.log(smallestSubstring(arr1, str));




// var temp1 = -45;
// var temp2 = -9;
// var temp3 = 4;
// var temp4 = 15;
// var temp5 = 35;

// var tempCode = function(temp){
//   return Math.min(Math.max(Math.ceil(temp/10), -1), 2);
// };

// console.log(tempCode(temp1), ' should be ', -1)
// console.log(tempCode(temp2), ' should be ', 0)
// console.log(tempCode(temp3), ' should be ', 1)
// console.log(tempCode(temp4), ' should be ', 2)

// var object = {
//   '-0': 'pizza!'
// }

// console.log(object[0])
/**
 * this is a test for JS doc
 */

// function Book(title, arthor){
//   this.title = title;
//   this.arthor = arthor;
// }


/*
Description:

Create a function that finds the largest palindromic number made from the product of any amount of at least 2 numeric arguments.

Example:

numericPalindrome(937,113) === 81518
As 937 * 113 = 105881 and the largest palindromic number that can be arranged from this result is: 81518.

Further example:

numericPalindrome(57,62,23)==82128
Because you try all possible combinations (57*62,57*23,62*23 and 57*62*23) and find that the product 81282 allow to create the largest palindrome (then again: notice that you are must not necessarily use all the digits of a product, as it was by chance in this case).

Note: single digits numbers are still  (edge) palindromes, so for
Test.assert_equals(numeric_palindrome(15, 125, 8),8)
You try all possible combinations (15*125,15*8,125*8,15*125*8) and find that 1875 generates the largest palindrome number, namely 8.

Notes and tips

This kata is quite demanding, as you will need to manage all possible combinations to get products, then use all or some of the digits of each product to get the largest palindrome: as you can easily guess, the computing time can easily grow exponentially, so you will need to work on optimization to be able to make it in the alloted time.

Dealing with 1s and 0s when passed as parameters in a smart way could help. A lot.
AlgorithmsNumbers
*/





/*
This kata is designed to test your ability to extend the functionality of built-in ruby classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared, the original array must not be changed
cube() must return a copy of the array, containing all values cubed, the original array must not be changed
average() must return the average of all array values, average() on an empty array must return NaN
sum() must return the sum of all array values
even() must return an arcray of all even numbers, the original array must not be changed
odd() must return an array of all odd numbers, the original array must not be changed
Examples:

*/
/*

Array.prototype.square = function(){
  return this.map(x => Math.pow(x,2))
}

Array.prototype.cube = function(){
  return this.map(x => Math.pow(x,3))
}

Array.prototype.average = function(){
  return this.reduce((sum,n) => sum + n) / this.length;
}

Array.prototype.sum = function(){
  return this.reduce((sum,n) => sum + n);
}

Array.prototype.even = function(){
  return this.filter(x => x % 2 === 0);
}

Array.prototype.odd = function(){
  return this.filter(x => x % 2 === 1);
}
var numbers = [1, 2, 3, 4, 5];

console.log(numbers.square(), " || ", [1, 4, 9, 16, 25])
console.log(numbers.cube(), " || ", [1, 8, 27, 64, 125])
console.log(numbers.average(), " || ", 3)
console.log(numbers.sum(), " || ", 15)
console.log(numbers.even(), " || ", [2, 4])
console.log(numbers.odd(), " || ", [1, 3, 5])

*/




// function toWeirdCase(string){
//   return string.split(" ")
//     .map(word => word.split("")
//       .map((l,i) => i % 2 === 1 ? l.toLowerCase() : l.toUpperCase())
//       .join(""))
//     .join(" ");
// }

// console.log(toWeirdCase( "String" ), ' || ' ,"StRiNg")
// console.log(toWeirdCase( "Weird string case" ), ' || ' ,"WeIrD StRiNg CaSe")
// console.log(toWeirdCase( "Weird string case" ), ' || ' ,"WeIrD StRiNg CaSe")
//     console.log(toWeirdCase( "Weird string case" ), ' || ' ,"WeIrD StRiNg CaSe")
// console.log(toWeirdCase( "Weird string case" ), ' || ' ,"WeIrD StRiNg CaSe")
// console.log(toWeirdCase( "Weird string case" ), ' || ' ,"WeIrD StRiNg CaSe")
// console.log(toWeirdCase( "Weird string case" ), ' || ' ,"WeIrD StRiNg CaSe")
// console.log(toWeirdCase( "Weird string case" ), ' || ' ,"WeIrD StRiNg CaSe")

/*
function iqTest(numbers){
  numbers = numbers.split(" ")
    .map(x => Number(x));
  return numbers.filter(x => x%2 === 1).length === 1 ?
    numbers.indexOf(numbers.find(x => x%2 === 1)) + 1 :
    numbers.indexOf(numbers.find(x => x%2 === 0)) + 1;
}


console.log(iqTest("2 4 7 8 10"), 3);
console.log(iqTest("1 2 2"), 1);
*/

/*
function position(x, y, n) {
  return x % 2 === 0 ? 
    Math.ceil(y/x) - x/2 + n : 
    y/x - Math.floor(x/2) + n;
}

console.log(position(4, 14, 3), 5);
console.log(position(2, 25, 0), 12);
console.log(position(7, 749, 5), 109);
console.log(position(3, -9, 1), -3);
console.log(position(5, 0, 0), -2);
*/
/*

Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

create an object key, value, number word


*/
/*
function sort(str){
  var sentence = str.split(" ")
    .reduce(function(words, nWord){
      var order = nWord.replace(/[^0-9]/g,"");
      words[order] = nWord;
      return words;
    },{})

  var result = [];
  var count = 1;
  for(var key in sentence){
    count++;
  }
  for(var i = 1; i <= count; i++){
    result.push(sentence[i])
  }
  return result.join(' ');
}

console.log(sort("is2 Thi1s T4est 3a"), "| should be |", "Thi1s is2 3a T4est")
console.log(sort("4of Fo1r pe6ople g3ood th5e the2"), "| should be |", "Fo1r the2 g3ood 4of th5e pe6ople")
*/

/*
function isIsogram(str){
  var charObj = str.toLowerCase()
    .split("")
    .reduce(function(charObj, nChar){
      if (nChar in charObj){
        charObj[nChar]++;
      } else {
        charObj[nChar] = 1;
      }
      return charObj;
    }, {})
  for (var key in charObj){
    if (charObj[key] >= 2){
      return false;
    }
  }
  return true;
}

console.log(isIsogram( "Dermatoglyphics" ), " should be ", true)
console.log(isIsogram( "aba" ), " should be ", false)
console.log(isIsogram( "moOse" ), " should be ", false)
*/

/*
var sheeps = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(x => !!x).length
}

console.log(countSheeps(sheeps));

*/
/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
C# sumStrings("1","2") // => "3"

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/
/*
function sumStrings(a,b) {
  var max = a.length - b.length;
  var padding = new Array(Math.abs(max) + 1).join("0");
  max > 0 ? b = padding + b : a = padding + a;

  var result = "";
  var remainder = 0;
  var temp = "";
  for (var i = a.length-1; i >= 0; i--){
    temp = (Number(a[i]) + Number(b[i]) + remainder).toString();
    if (temp.length > 1) {
      remainder = Number(temp[0])
      temp = temp[1]
    } else {
      remainder = 0;
    }
    result = temp + result;
  }

  return result;
}

console.log(sumStrings("100","1"))
*/
/*
At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 are in the same order as in s.

The interviewer gives you the following example and tells you to figure out the rest from the given test cases:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears

base case if s.length = 0
  true if p1 and p2 == 0
  false if not

each element of s, equals part1 or part2, if it does, remove that element
recursively call


*/

/*
function isMerge(s, p1, p2){
  if (s === ""){
    return p1 === "" && p2 === "" ? true : false;
  }
  if (s[0] === p1[0]){
    s = s.slice(1);
    p1 = p1.slice(1);
    return isMerge(s,p1,p2);
  }
  if (s[0] === p2[0]){
    s = s.slice(1);
    p2 = p2.slice(1);
    return isMerge(s,p1,p2)
  }
  return false;
}


console.log(isMerge("","",""), " should be ", true)
console.log(isMerge("a","",""), " should be ", false)
console.log(isMerge("","q",""), " should be ", false)
console.log(isMerge("","","a"), " should be ", false)
console.log(isMerge("codewars","cdw","oears"), " should be ", true)
console.log(isMerge("codewars","cdwe","oears"), " should be ", false)
console.log(isMerge("cgdewars","cdw","oears"), " should be ", false)
console.log(isMerge("cgdewars","cdw","oears"), " should be ", false)
*/


/*
input ['n','s','e','w']

*/

/*
function isValidWalk(walk) {
  var end = walk.reduce(function(pos,direction){
      if (direction === 'n'){
        pos[0]++;
      }
      if (direction === 's'){
        pos[0]--;
      }
      if (direction === 'e'){
        pos[1]++;
      }
      if (direction === 'w'){
        pos[1]--;
      }
      return pos;
    }, [0,0])
  return end[0] === 0
    && end[1] === 0
    && walk.length === 10;
}

console.log(isValidWalk(['n','e']), ' should be ', false)
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), ' should be ', true)
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), ' should be ', false)
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), ' should be ', false)
*/
/*
Sum of Pairs

Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
*/

//10 + 5 > false
//10 + 2 > false
//5 + 2 > false
//10 + 3 > false
//5 + 3 > false
//3 + 2 > false

/*
function sum_pairs(ints, target){
  for(var i = 1; i < ints.length; i++){ //linear
    var sum = ints.slice(0,i).filter(function(int){  
      return int + ints[i] === target;  //linear
    })
    if (sum.length === 1){
      return sum.concat(ints[i])
    }
  }
  return null;
}
*/



/*
mis read instructions => thought it was first, not last number that summed
function sum_pairs(ints, target){
  if(ints.length === 2){
    return ints[0] + ints[1] === target ? ints : null;
  }
  for(var i = 1; i < ints.length; i++){
    if(ints[0] + ints[i] === target){
      return [ints[0], ints[i]];
    }
  }
  ints.shift();
  return sum_pairs(ints, target);
}

*/
/*
console.log(sum_pairs([3,7], 10), " should be ", [3,7])
console.log(sum_pairs([3,7], 11), " should be ", null)
console.log(sum_pairs([3,7,1], 10), " should be ", [3,7])
console.log(sum_pairs([4, 3, 2, 3, 4], 6), " should be ", [4,2])
console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10), " should be ", [3,7])
*/
/*
This kata is to practice simple string output. Jamie is a programmer, and girlfriend of James. She likes diamonds, and this time she expects String of diamond from James. As James doesn't know how to do it, he needs your help.

Task:

You need to print a shape on the screen using asterisk ("*") characters.

The shape that will be returned from print method resembles a diamond, where the number provided as input represents the number of *’s printed on the middle line. The line above and below will be centered and will have 2 less *’s than the middle line. This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure.

Return null if input is even number (as it is not possible to print diamond with even number).

Please see provided test case(s) for examples.

Python Note

Since print is a reserved word in Python, Python students must implement the diamond(n) method instead, and return None for invalid input.

JS Note

JS students, like Python ones, must implement the diamond(n) method, and return null for invalid input.

//3
//1 , 3

//5
//1,3,5 > 3 , 1

//7
//1,3,5,7

*/
/*
function diamonds(n){
  if(n % 2 === 0){
    return null;
  }
  var stars = new Array((n + 1)/2+1)
    .join("x")
    .split("")
    .map((x,i) => 2*i+1);
  stars = stars
    .concat(stars
      .slice(0,stars.length-1)
      .reverse())
  return stars
    .map(x => new Array((n-x)/2+1).join(" ")
      + new Array(x+1).join("*")
      + new Array((n-x)/2+1).join(" "))
    .join("\n") + "\n";

}

console.log(diamonds(0), " should be ", null)
console.log(diamonds(2), " should be ", null)
console.log(diamonds(6), " should be ", null)
console.log(diamonds(1), " should be ", "*")
console.log(diamonds(3), " should be ", "\n * \n***\n * \n")
console.log(diamonds(5), " should be ", "\n  *  \n *** \n*****\n *** \n  *  \n")
console.log(diamonds(7), " should be ", "\n   *   \n  ***  \n ***** \n*******\n ***** \n  ***  \n   *   \n")
*/


/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

*/

/*
function spinWords(str){
  return str.split(" ")
    .map(function(word){
      return word.length >= 5 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

console.log(spinWords( "Hey fellow warriors" ), " should be ", "Hey wollef sroirraw")
console.log(spinWords( "This is a test" ), " should be ", "This is a test")
console.log(spinWords( "This is another test" ), " should be ", "This is rehtona test")
*/

/*
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.

*/

/*
function stringy(n){
  return new Array(n+1)
    .join(1)
    .split("")
    .map((x,i) => i % 2 ? 0 : 1)
    .join("");
}

console.log(stringy(0), " should be ", "")
console.log(stringy(1), " should be ", "1")
console.log(stringy(4), " should be ", "1010")
console.log(stringy(12), " should be ", "101010101010")

*/
/*
The museum of incredible dull things

The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task

Given an array of integers, remove the smallest value. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples

removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1]
*/

/*
function removeSmallest(ratings){
  var min = Math.min.apply(null, ratings);
  ratings.splice(ratings.indexOf(min),1)
  return ratings;
}

console.log(removeSmallest([1,2,3,4,5]), " should be ", [2,3,4,5]);
console.log(removeSmallest([5,3,2,1,4]), " should be ", [5,3,2,4]);
console.log(removeSmallest([2,2,1,2,1]), " should be ", [2,2,2,1]);
*/
/*
Create a function with two arguments that will return a list of length (n) with multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python or Haskell.)

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

*/

/*

function countBy(n,x){
  var result = [];
  var step = n;
  while(result.length < x){
    result.push(n);
    n += step;
  }
  return result;
}

function countByF(n,x){
  return new Array(x+1)
    .join(n)
    .split('')
    .map((x,i) => x*(i+1));
}

console.log(countByF(1,10), " should be ", [1,2,3,4,5,6,7,8,9,10])
console.log(countByF(2,5), " should be ", [2,4,6,8,10])

*/
/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples

maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
*/


// function maskify(str){
//   return str.length <= 4 ? 
//     str :
//     new Array(str.length-4 + 1).join("#") +
//     str.slice(str.length-4);
// }

// console.log(maskify(""), " should be ", "")
// console.log(maskify("a"), " should be ", "a")
// console.log(maskify("ab"), " should be ", "ab")
// console.log(maskify("abc"), " should be ", "abc")
// console.log(maskify("abcd"), " should be ", "abcd")
// console.log(maskify("abcde"), " should be ", "#bcde")
// console.log(maskify("abcdefg k"), " should be ", "#####fg k")
