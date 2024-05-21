// OBJECT ASSIGNMENTS //
// PART 1: Employee Data //
let employee = {
    name: "Emily smith",
    Department: "Marketing",
    Role: "Manager",
    contact: {
        emailInfo: "emilysmith@gmail.com"
    },
    skills: ["Marketing strategy", "Content creation", "Social media management"],
};
console.log(employee);
let Car = {
    engine: {
        horsepower: 789,
    },
    getHorsepower: function () {
        console.log((Object.values(Car.engine).join('')));
    },
};
Car.getHorsepower();
console.log(Car);
let Product = {
    name: 'T-Shirts',
    price: 3000,
    color: "Red",
    inventory: {
        stock: 15,
        colorOptions: ["red", "black", "white", "green", 'yellow'],
        changecolor: (color) => {
            let newcolor = color.toLowerCase();
            if (newcolor === "black") {
                Product.price = Product.price + (Product.price * 15 / 100);
                Product.color = newcolor;
            }
            else if (newcolor === "white") {
                Product.price = Product.price + (Product.price * 10 / 100);
                Product.color = newcolor;
            }
            else if (newcolor === "green") {
                Product.price = Product.price - (Product.price * 5 / 100);
                Product.color = newcolor;
            }
            else if (newcolor === "yellow") {
                Product.price = Product.price + (Product.price * 5 / 100);
                Product.color = newcolor;
            }
            else if (newcolor === "red") {
            }
            else {
                console.log(`Please Enter a color from the given choices:\n${Product.inventory.colorOptions}`);
            }
        }
    }
};
Product.inventory.changecolor('YellOW');
console.log(Product.color, Product.price);
export {};
// THE END :D //
