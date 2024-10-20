const narutoCharacters = [
    "Naruto Uzumaki", // 0
    "Sasuke Uchiha", // 1
    "Sakura Haruno", // 2
    "Kakashi Hatake", // 3
    "Hinata Hyūga", // 4
    "Shikamaru Nara", // 5
    "Chōji Akimichi", // 6
    "Tobirama", // 7
    "Ino Yamanaka", // 8
    "Neji Hyūga", // 9
    "Rock Lee", // 10
    "Kiba Inuzuka", // 11
    "Shino Aburame", // 12
    "Gaara", // 13
    "Temari", // 14
    "Kankurō", // 15
    "Itachi Uchiha", // 16
    "Madara Uchiha", // 17
    "Obito Uchiha", // 18
    "Jiraiya", // 19
    "Tsunade", // 20
    "Orochimaru", // 21
    "Minato Namikaze", // 22
    "Kushina Uzumaki", // 23
    "Hashirama Senju" // 24
  ];

/**
 * Returns a subList of an original array from a starting index (inclusive) to an ending index (exclusive)
 * @param {array} originalList
 * @param {number} [minIndex=0] 
 * @param {number} [maxIndex=originalList.length - 1]
 * @returns {array}
 */
function getSublist(originalList, minIndex = 0, maxIndex = originalList.length - 1){

    if (minIndex < 0) minIndex *= -1;
    if (maxIndex < 0) maxIndex *= -1;
    
    const newList = [];
    while (minIndex <= maxIndex){
        newList.push(originalList[minIndex]);
        minIndex ++;
    }
    return newList;
}

console.log(getSublist(narutoCharacters, 5, 16));
console.log(getSublist(narutoCharacters, 9, 16));
console.log(getSublist(narutoCharacters, 6, 4));
console.log(getSublist(narutoCharacters, 11, 12));
console.log(getSublist(narutoCharacters, 19, 19));
console.log(getSublist(narutoCharacters));
console.log(getSublist(narutoCharacters, maxIndex = 5));
console.log(getSublist(narutoCharacters, -5, 16));
console.log(getSublist(narutoCharacters, 5, -16));

console.log(getSublist(maxIndex = 8, minIndex= 4, originalList = narutoCharacters)); // this doesn't work