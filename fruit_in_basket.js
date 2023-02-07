

//you can test own your own
var totalFruit = function (fruits) {
    let right = 0;
    let left = 0;
    let map = new Map();

    while (right < fruits.length) {
        if (map.get(fruits[right])) map.set(fruits[right], map.get(fruits[right]) + 1);

        else map.set(fruits[right], 1); //move to our currentindex by 1



        if (map.size > 2) {
            if (map.get(fruits[left]) === 1) map.delete(fruits[left]);

            else map.set(fruits[left], map.get(fruits[left]) - 1); 

            left++; 
             
        }

        right++;
    }; 


    console.log(map); 
    return right - left; 
}; 


///test 
totalFruit([1, 1, 2]); 