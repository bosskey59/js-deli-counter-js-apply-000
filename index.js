function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  let number = katzDeliLine.length ;
  return "Welcome, " + name + ". You are number "+ number +" in line.";
}

  let counter = 0;
  
function takeANumber_2(line){
    line.push(counter)
    counter++;
    return "You are customer  number:" + counter;
}

function nowServing(line){
  let currentName = line.shift();
  if (currentName === undefined){
    return "There is nobody waiting to be served!";
  }
  else{
    return "Currently serving " + currentName +".";
  }
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  }
    
  else{
    let array = [];
      for (let x=0; x<line.length; x++){
       //let numberOfPerson = x+1;
       array.push ( " "+ (x+1) +". "+ line[x] );
     }
     return "The line is currently:"+ array;
  }

}
