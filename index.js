// Code your solutions in this file


 function writeCards(names, event){
    let messages = [];
       for(let i = 0; i< names.length; i++){
           let newMessage = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
           messages.push(newMessage);
      }
     return messages;
   
   };


   function countDown(int){
    let count = int;
    while(count > count -1 && count >= 0){
        console.log(count--);
        
    }
}

