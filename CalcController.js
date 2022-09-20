class CalcController {

    constructor(){
        
// "._tributo" o ponto junto com barra significa que este esta encapsulado em tipo "privado"
      // incrementando variaveis pelo query
     let displayCalcEl = document.querySelector("#display");
     let dateEl = document.querySelector("#date");
     let  timeEl = document.querySelector("#hour");
     this.currentdate;
     this.initialize();
     buttons.addEventListener();

    }

    initialize(){

    
  setInterval(() => {


this.displayDate = this.currentdate.toLocaletDateString('pt-br');
this.displayTime = this.currentdate.toLocaletDateString('pt-br'); 
    
  }, 1000);

   setTimeout(()=>{

   clearInterval(interval);

   }, 1000);

   setDisplayDateTime{}{
    this.displayDate = this.currentdate.toLocaletDateString(this.locale,{
   day: "2-digit",
   month: "long",
   year: "numeric"
    });
    
this.displayTime = this.currentdate.toLocaletDateString(this.locale) 
   };
        
    }
   buttons.forEach(btn, indexI => {
    
  
    initButtonsEvents(){
    let buttons =  document.querySelectorAll("#buttons > g, #parts > g");
    buttons.addEventListener('click' , e=>{
          console.log(btn.classname.baseval.replace("btn-", ""));
    })
    }
  });
    //atribuiçao de valor es e definição de regras ou tarefas por get
   get displayCalc{value}{
  this._displayCalc = value;
   }
   // alteração de valor es por set
   set displayCalc{value}{
    this._displayCalc = value;
   }
   get currentdate{}{
    return new Date();
     }
     set currentdate{value}{
        this._displayCalc = value;
         }

         get displaytime(){
           return this.timeEl.innerHTML;
         }

         get displayDate(){
          return this.dateEl.innerHTML;
        }

        set displaytime(value){
          return this.timeEl.innerHTML = value;
        }

        set displayDate(value){
         return this.dateEl.innerHTML = value;
       }

}