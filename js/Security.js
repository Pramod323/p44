class Security {

    constructor(){

        this.input_variable = createInput("").attribute("placeholder", "Code1");
        this.input_variable.position(100,90);
        this.input_variable.style('background', 'white');  

        this.button_variable = createButton('Check');
        this.button_variable.position(100,120);
        this.button_variable.style('background', 'lightgrey');    

        this.input_function = createInput("").attribute("placeholder", "Code2");
        this.input_function.position(700,190);
        this.input_function.style('background', 'white');  

        this.button_function = createButton('Check');
        this.button_function.position(700,220);
        this.button_function.style('background', 'lightgrey');

        this.input_database = createInput("").attribute("placeholder", "Code3");
        this.input_database.position(100,290);
        this.input_database.style('background', 'white');  

        this.button_database = createButton('Check');
        this.button_database.position(100,320);
        this.button_database.style('background', 'lightgrey'); 
        
        this.vr = null;
        this.func = null;
        this.data = null;
    }

    display(){
        this.button_variable.mousePressed(()=>{
            this.vr = this.input_variable.value();
            if (this.vr === accessCode1) {
                this.input_variable.hide();
                this.button_variable.hide();
                score++
            }
        })

        this.button_function.mousePressed(()=>{
            this.func = this.input_function.value();
            if (this.func === accessCode2) {
                this.button_function.hide();
                this.input_function.hide();
                score++
            }
        })        

        this.button_database.mousePressed(()=>{
            this.data = this.input_database.value();
            if (this.data === accessCode3) {
                this.button_database.hide();
                this.input_database.hide();
                score++
            }
        })
    }
}