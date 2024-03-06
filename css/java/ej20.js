class Square {
    constructor(side) {
    this.side = side;
    }
    }
    
    class Rectangle {
    constructor(width, height) {
    this.width = width;
    this.height = height;
    }
    }
    
    class Circle {
    constructor(radius) {
    this.radius = radius;
    }
    }
    
    class AreaCalculator {
        static calculate (objeto) {
            if (objeto instanceof Square) {
                let area = objeto.side * objeto.side
                return area
            } else if (objeto instanceof Rectangle) {
                let area = objeto.height * objeto.width
                return area
            } else {
                let area = objeto.radius**2 * Math.PI
                return area
            }
        }
    }
    
    const square = new Square(4);
    const rectangle = new Rectangle(4, 2);
    const circle = new Circle(5);
    
    console.log(AreaCalculator.calculate(square));
    console.log(AreaCalculator.calculate(rectangle));
    console.log(AreaCalculator.calculate(circle));