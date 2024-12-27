{ 

let i =0;
while (i<6){
    if(i===3){
    break;
}
i++;
    
 
} 
console.log(i);
}
//continue statement


let text = '';
for (let i = 0; i < 5; i++) {
    if (i === 4) {
        continue; // Skip the iteration when i is 4
    }
    text += `Number: ${i}\n`; // Append the current value of i to text
}
console.log(text);

