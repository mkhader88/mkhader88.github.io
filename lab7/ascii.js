
const Animation = function () {

    this.animationType='Blank';
    this.speed= 250;
    this._currentType = 0;
    this._timeInterval = null;
    
    this.startAnimation = () => {
        let animationType = ANIMATIONS[this.animationType].split("=====\n");
        this.disable();
        this._timeInterval = setInterval(() => {
            if (this._currentType === animationType.length)
				this._currentType = 0;
            document.getElementById('text-area').value = animationType[this._currentType++];
        }, this.speed);
    }

    this.disable = () => {
        
        document.getElementById('start').disabled = true;
        document.getElementById('stop').disabled = false;
        document.getElementById('fontsize').disabled = true;
        document.getElementById('animation').disabled = true;
        document.getElementById('turbo').disabled = true;
        
    }



    this.turboSpeed = (isTurbo) => {
        this.speed = isTurbo ? 50 : 250;
    }

    this.enable = () => {
        document.getElementById('start').disabled = false;
        document.getElementById('stop').disabled = true;
        document.getElementById('fontsize').disabled = false;
        document.getElementById('animation').disabled = false;
        document.getElementById('turbo').disabled = false;
    }
    this.stopAnimation = () => {
        if (this._timeInterval) {
            clearInterval(this._timeInterval);
        }
        this.enable();
    }

    this.changeSize = (size) => {
        let SIZE = ['7pt', '10pt', '12pt', '16pt', '24pt', '32pt'];
        let index = ['Tiny', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'].indexOf(size);
        if (index >= 0) {
            document.getElementById('text-area').style.fontSize = SIZE[index];
        }
    }
    this.changeAnimationType = (type) => {
        if (this.animationType !== type) {
            this._currentType = 0;
            this.animationType = type;
        }
    }

}

window.onload = () => {
    let animation = new Animation();

    document.getElementById('start').onclick = () => {
        animation.startAnimation();
    }
    document.getElementById('stop').onclick = () => {
        animation.stopAnimation();
    }

    document.getElementById('animation').onchange = (e) => {
        animation.changeAnimationType(e.target.value);
    }
    document.getElementById('turbo').onchange = (e) => {
        animation.turboSpeed(e.target.checked);
    }

    document.getElementById('fontsize').onchange = (e) => {
        animation.changeSize(e.target.value);
    }
}