function gets(s) {
    // let s;
    // Write your code here
    let letter;
    switch(s[0]){
        case 'a':  
        case 'e':  
        case 'i':  
        case 'o':  
        case 'u':  
            letter='B';
            break;
        case 'b':    
        case 'c':    
        case 'd':    
        case 'f':    
        case 'g': 
            letter='C';
              break; 
        case 'h' :
        case 'j' :
        case 'k' :
        case 'l' :
        case 'm' :
            letter='A';
            break;
        default:
            letter='D';
            break;
    }
    return letter;
}
const result=gets('hsdf');
console.log(result);