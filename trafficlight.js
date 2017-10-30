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

redLight.stop();
// redLight.blink();

orangeLight.warning();
// orangeLight.blink();

greenLight.go();
// greenLight.blink();