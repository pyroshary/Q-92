 function removeLastelement<T>(arr:T[]): T | undefined{
    return arr.pop()
 }
   
 const fruits: string[] = ["APPLE","BANANA","MANGO"]
 console.log(fruits)

 console.log(removeLastelement(fruits));
 console.log(fruits)