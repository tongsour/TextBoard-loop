'use strict';

class Modal {
    constructor() {
        this.parent = document.querySelector('.modal-parent');
        this.X = document.querySelector('.X');
        this.section = document.querySelector('section');

        this.X.addEventListener('click', this.disappearX.bind(this));
        this.parent.addEventListener('click', this.disappearParent.bind(this));
    }

    appear() {
        this.parent.style.display = 'block';
        this.section.style.filter = 'blur(10px)';
    }

    disappearX() {
        this.parent.style.display = 'none';
        this.section.style.filter = 'blur(0px)';
    }

    disappearParent(e) {
        if (e.target.className === 'modal-parent') {
            this.parent.style.display = 'none';
            this.section.style.filter = 'blur(0px)';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    new Modal();
    
});

function openDialog() {
    document.querySelector('.modal-parent').style.display = 'block';
    document.querySelector('section').style.filter = 'blur(10px)';
}

function closeDialog() {
    document.querySelector('.modal-parent').style.display = 'none';
    document.querySelector('section').style.filter = 'blur(0px)';
}
