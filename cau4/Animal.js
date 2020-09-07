
function Animal(name,weight) {
    this.name = name;
    this.weight = weight;
    this.setName = function (name) {
        this.name = name;
    }
    this.setWeight = function (weight) {
        this.weight = weight;
    }
    this.toString = function () {
        return document.write("name: " + this.name + " weight: " + this.weight);
    }
}