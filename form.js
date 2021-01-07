class form{
    constructor(){
        this.input = createInput("Enter your pet Name");
        this.button = createButton('Play');
        this.title = createElement('h2');
        this.button2 = createButton('Add food');
    }
    display(){
        this.title.html("Virtual pet 2");
        this.title.position(700, 10);
    
        this.input.position(690,200);
        this.button.position(750,280);
        this.button2.position(860,40);
this.button2.hide();

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.button2.show();
            gamestate=1;
          });
          this.button2.mousePressed(()=>{
              bottle3.visible=true;
        });
    }
}