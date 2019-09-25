// Add your Circle class here
class Circle{

    constructor (radius){
        this.radius = radius;
    }

    get diameter(){
        return 2 * this.radius
    }

    set diameter(diameter){
        this.radius = diameter / 2
    }

    get circumference(){
        return (2 * Math.PI * this.radius)
    }

    set circumference(circumference){
        this.radius = circumference / (Math.PI*2)
    }

    get area(){
        return this.radius * this.radius * Math.PI
    }
}