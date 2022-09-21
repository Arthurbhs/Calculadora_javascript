class CalcController {

    constructor(){
        
// "._tributo" o ponto junto com barra significa que este esta encapsulado em tipo "privado"
      // incrementando variaveis pelo query

      this._lastNumber = '';
      this._lastOp = '';
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#date");
    this._locale = 'pt-BR';
    this._timeEl = document.querySelector("#hour");
    this.currentdate;
    this._operation = [];
    this.initialize();
     buttons.addEventListener();

    }
  }

    initialize();{
      this.setLastNumberDisplay();
    
  setInterval(() => {


this.displayDate = this.currentdate.toLocaletDateString('pt-br');
this.displayTime = this.currentdate.toLocaletDateString('pt-br'); 
    
  }, 1000);

   setTimeout(()=>{

   clearInterval(interval);

   }, 1000);
  }


  set.DisplayDateTime();{
    this.displayDate = this.currentdate.toLocaletDateString(this.locale,{
   day: "2-digit",
   month: "long",
   year: "numeric"
    });
    
this.displayTime = this.currentdate.toLocaletDateString(this.locale) 
   };
   addEventListenerAll(element, events, fn);{
    events.split('').forEach (event => {
       element.addEventListener(event, fn, false);
    }
    )};

    getLastOp();{
      this._operation[this._operation.length-1];

    }
    
    clearAll();{
      this._operation = [];
      this._lastNumber = '';
      this._lastOp = '';
      this.setLastNumberDisplay();
    }
    isOp();{

    return  (['+','-','*','%','/'].indexOf(value) > -1);
       
      
    }
    

    clearEntry();{
   this._operation.pop();
   this.setLastNumberDisplay();
    }
    setLastOp(value){
        this._operation[this._operation.length - 1] = value;
    }

    PushOp();{
      this._operation.push(value);
      if (this._operation.length > 3) {
           
      

      this.calc();

    

      }

      getResult();{


          


          return eval(this._operation.join(""));



      }

      calc();{
        let last = '';
        this._lastOp = this. getLastItem();
      if (this._operation.length < 3){

        let firstItem = this._operation[0];       
         this._operation = [firstItem, this._lastOp, this._lastNumber];

      }
        if (this._operation.length > 3) {
         last = this._operation.pop();

         this._lastOp = this. getLastItem();
         this._lastNumber = this.getResult();
 }
 if (this._operation.length == 3) {
    this._lastNumber = this. getLastItem(false);
 }

        
 this._lastNumber = this.getResult;

        if (last == '%') {
              result /= 100;
              this._operation = [result];
        } 
        else{
          this._operation = [result];

          if (last) this._operation.push(last);
        }

        

        

        this.setLastNumberDisplay();
      }
    }

    getLastItem(isop = true){
        let lastItem;
        for (let i = this._operation.length - 1; i >= 0; i--){
         

         if (this.isOp(this._operation[i]) == isOp){
              lastItem = this._operatio[i];
              breack;
   
        
        }
    }
      if (!lastItem){
            lastItem = (isOp) ? this._lastOp : this._lastNumber;

      }


   return lastItem;
}
   
    addDot(){

      let getLastOp = this.getLastOp();

      if (typeof lastOp == 'string' && lastOp.split('').indexOf('.') > -1) return;

      if(this.isOp(_lastOp) || !lastOp)  {
this.PushOp('0.');

      }
      else{
          this.setLastOp(_lastOp.toString() + '.');

      }
      this.setLastNumberDisplay();


    }


    setLastNumberDisplay();{

     let lastNumber = this. getLastItem(false);


     if (!lastNumber) lastNumber = 0;
     this.displayCalc = lastNumber;

    }
     
    addOperator(value);{

      if (isNaN(this.getLastOp())){
        if (this.isOp(value)){
          this.setLastOp(value);
        }
        
        else{
          this._operation.push(value);
        }
      }
      else{
        let newvalue = this.getLastOp().toString() + value.toString();
        this.setLastOp(parseFloat(newvalue));
      }
       this._setLastNumberDisplay();
    }

    setError();{
      this.displayCalc = "error"
    }
    execBtn(value){
      switch (value){
      case 'ac':
         this.clearAll();
         breack;

         case 'ce':
         this.clearEntry();
         breack;

         case 'sum':
            this.addOperator('+');
         breack;

         case 'mult':
            this.addOperator('*')
         breack;

         case 'sub':
            this.addOperator('-')
         breack;

         case 'percentage':
            this.addOperator('%')
         breack;

         case 'div':
            this.addOperator('/')
          breack;

          case 'resul':
         this.addOperator('.');  
         breack;

         case 'dot':
          this.addDot('.')
         breack;

          case '0':
            case '1':
              case '2':
                case '3':
                  case '4':
                    case '5':
                      case '6':
                        case '7':
                          case '8':
                            case '9':
                     
             breack;               
                              
             default:
              this.setError();
          
      }
    }

   
    
  
    initButtonsEvents();{
    let buttons =  document.querySelectorAll("#buttons > g, #parts > g");
    buttons.fprEach((btn, index)=>{
      this.addEventListenerall(btn, "click drag", e => {
        );
      }
    };

    this.addEventListenerAll(btn, "mouseover mouseup mousedow", e => {
        btn,style,cursor = "pointer",
  });

    
   
  //atribuiçao de valor es e definição de regras ou tarefas por get
  
   get.displayCalc;{value}{
   this._displayCalc = value;
   }
   // alteração de valor es por set
   set.displayCalc;{value}{
    this._displayCalc = value;
   }
  
   get.currentdate;{}{
    return new Date();
     }
     set.currentdate;{value}{
        this._displayCalc = value;
         }

         get.displaytime();{
           return this.timeEl.innerHTML;
         }

         get.displayDate();{
          return this.dateEl.innerHTML;
        }

        set.displaytime(value);{
          return this.timeEl.innerHTML = value;
        }

        set.displayDate(value);{
         return this.dateEl.innerHTML = value;
       }

      
    