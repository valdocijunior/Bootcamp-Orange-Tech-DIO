let arr = gets().split(''); 
let arrVazio = []; 


arr.forEach((item) => {
 if(item % 2 ==0){
  arrVazio.unshift(item)
 } else {
  arrVazio.push(item)
 }
})
print(arrVazio)