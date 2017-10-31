class TrafficLight {
    constructor(id, color){  
        var elem = document.getElementById(id);
        elem.setAttribute('class', 'light-background');
        var lightElem = document.createElement('div');
        lightElem.classList.add('light');
        lightElem.classList.add(color);
        elem.appendChild(lightElem);
        this.element = lightElem;
    }

    on(){
        this.element.classList.add('on');        
        this.state = 'on';
    }

    off(){
        this.element.classList.remove('on');                
        this.state = 'off';
    }

    stop(){
        this.element.classList.add('on');        
        this.state = 'on';
        this.element.classList.add('red');
        this.color = 'red';
    }
    
    warning(){
        this.element.classList.add('on');        
        this.state = 'on';
        this.element.classList.add('orange');
        this.color = 'orange';
    }

    go(){
        this.element.classList.add('on');        
        this.state = 'on';
        this.element.classList.add('green');
        this.color = 'green';
    }

    blink(){
        setInterval(() => {
            if (this.state === 'on') {
                this.off();
            } else {
                this.on();
            };

        }, 1000);
    }

    status(){
        return "This is a " + this.color + " light and it is currently " + this.state;
    }
};

// var light = new TrafficLight('light', color)

var redLight = new TrafficLight('light', 'red');
var orangeLight = new TrafficLight('light', 'orange');
var greenLight = new TrafficLight('light', 'green');

var onButt = document.querySelector('.onButt');
var offButt = document.querySelector('.offButt');
var stopButt = document.querySelector('.stopButt');
var warningButt = document.querySelector('.warningButt');
var goButt = document.querySelector('.goButt');
var blinkButt = document.querySelector('.blinkButt');

onButt.addEventListener('click', () => {
   redLight.on();
   orangeLight.on();
   greenLight.on();
});

offButt.addEventListener('click', () => {
    redLight.off();
    orangeLight.off();
    greenLight.off();
 });

 stopButt.addEventListener('click', () => {
    redLight.stop();
 });

 warningButt.addEventListener('click', () => {
    orangeLight.warning();
 });

 goButt.addEventListener('click', () => {
    greenLight.go();
 });

 blinkButt.addEventListener('click', () => {
    redLight.blink();
    orangeLight.blink();
    greenLight.blink();
 });