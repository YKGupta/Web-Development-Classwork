// Count number of Vowels in String
function countVowel(s){
    let ans = 0;
    s = s.toUpperCase();
    for (let i = 0; i < s.length; i++){
        if(s[i] == 'A' || s[i] == 'E' || s[i] == 'I' || s[i] == 'O' || s[i] == 'U'){
            ans++;
        }
    }
    return ans;
}
console.log(countVowel("Yash Kumar Gupta"));