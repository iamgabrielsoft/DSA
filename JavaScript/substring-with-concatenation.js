
//first
const firstMethod = (s, words) => {
    let ans = []; 

    const totalWords = words.reduce((total, word) => (total += word.length), 0); 

    for(let i = 0; i<=s.length - totalWords; i++){
        //we expect here to give us 6
        if(simpleCheck(s.substring(i), words.slice())){
            ans.push(i); //out final movement
            //console.log(ans); 
        }  
    }

    console.log(ans); //to  see our result
    return ans;
}; 


const simpleCheck = (str, words) => {
    if(!words.length) return true; 

    for(let i = 0; i<words.length; i++){
        const targetedLength = words[i].length; 

        //to grab the targetedLength
        if(str.substring(0, targetedLength) === words[i]){
            words.splice(i, 1); 

            return simpleCheck(str.substring(targetedLength), words); 
        }
    }

    return false; 
}; 





//second way


const secondMethod = (s, words) => {
    let map = new Map(); 

    let wordCount = words.length; 
    let wordLength = words[0].length; 

    let totalWords = wordCount * wordLength; 

    let leftIndex = 0; 
    let result = []; //used to store our total result
    let rightIndex = totalWords - 1; 

    console.log(rightIndex); 

    const helper = (tmptStr) => {
        let visited = new Map(); 
        for(let i = 0; i<tmptStr.length; i+=wordLength) {
            console.log(i); 
            let word = tmptStr.substr(i, wordLength); //one word
            
            //allowed duplicate
            visited.has(word) ? visited.get(word, visited.get(word) + 1) : visited.set(word, 1); 
        }


        for (let [key, value] of visited) {
            console.log('key', key, value); 
            if(map.get(key) != null) return false; 
        }

        return true; 
    }

    while(rightIndex < s.length) {
        if(rightIndex - leftIndex + 1 == totalWords) {
            let tmptStr = s.substring(leftIndex, rightIndex + 1); 
            //result.push(leftIndex); 
            if(helper(tmptStr)) result.push(leftIndex); 
            leftIndex++; 
        }
       
        rightIndex++ //increment rightIndex
    }

    console.log('result', result); 
    return result; 
}

secondMethod("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]);