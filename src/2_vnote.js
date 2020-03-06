VNote = class VNote_CLASS {
    constructor(note) {
        this.note = note;
        this.position = {
            x: 0,
            y: 0,
        };
        this.display = false;
        this.color = '#FFFFFF';
    }

    reset(width, height) {
        this.position.x = width / 2;
        this.position.y = height / 2;
    }

    draw(p5_inst) {
        if (this.display == true) {
            p5_inst.ellipse(this.position.x, this.position.y, this.note * 2, this.note * 2);
            p5_inst.fill(this.color)
        }
    }

    setDisplay(d) {
        this.display = d;
    }

    getDisplay() {
        return this.display;
    }
}

vnotes = new Array(128);
for (let i = 0; i < vnotes.length; i++) {
    vnotes[i] = new VNote(i);

}