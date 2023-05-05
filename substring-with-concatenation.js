
const substringAndConcatenation = (s, words) => {
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

