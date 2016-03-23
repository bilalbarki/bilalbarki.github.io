//Establishing a prototype for toggle class to be reused again and again

HTMLElement.prototype.toggle = function (togClass) {
    if (this.classList.contains(togClass)) {
        this.classList.remove(togClass);
    } else {
        this.classList.add(togClass);
    }
}
