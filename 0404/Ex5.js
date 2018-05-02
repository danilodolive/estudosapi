let tabuada = {1:"1 x", 2:"2 x", 3:"3 x", 4:"4 x ", 5:"5 x ", 6:"6 x ", 7:"7 x ", 8:"8 x ", 9:"9 x ", 10:"10 x " }
// FORIN exibe o rótulo o FOROF exibe o conteúdo
let cont=0;
let num = 1;

for (let pos in tabuada){
    console.log("Tabuada do ", pos)
    for (let id=1; id <= 10; id++){
        num = pos * id;    
        console.log(tabuada[pos], id, " = ", num);
    } 
   // console.log(cont, tabuada[cont], pos);
   // tabuada[cont]=tabuada[cont]*pos;
   // console.log(cont, "X", tabuada[cont]);
}