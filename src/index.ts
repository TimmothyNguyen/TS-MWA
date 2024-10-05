// TODO 1. uloha

var strType: string = '';
var boolType: boolean = true;
var numType: number = 200;
var numArray: number[] = [1, 2, 3, 4, 5, 6, 7]


const multiply = (first: number, second: number, showResult: boolean = false): number => {
    if (showResult) {
        console.log(first * second)
        return 0
    }
    return first * second
}
console.log(multiply(numArray[1], numArray[numArray.length - 1],));

// TODO 2. uloha

const getFullName = (firstName: string, lastName: string) : string => {
    return `${firstName} ${lastName}`
}
console.log(getFullName('Tim', 'Nguyen'));


// TODO 3. uloha

class car {
    private readonly make: string
    private readonly model: string
    private readonly year: number

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public printMakeAndModel() {
        console.log(`Značka auta - ${this.make} ; Model auta - ${this.model}`)
    }
}

const carInstance: car = new car('Audi', 'R8', 2024)
carInstance.printMakeAndModel()

// TODO 4. uloha

function greet(greeting: string = 'Hello', name: string) : string {
    return `${greeting}, ${name}!`
}

console.log(greet('YOo', 'babushka'));

// TODO 5. uloha

function printId(id: any) {
    typeof id === 'number' ? console.log(`ID je typu Number hodnoty ${id}`) : console.log(`ID je typu String hodnoty ${id}`);
}

printId('2')

// TODO 6. uloha

function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<string>('ZPIVAM PRVNIII, ZPIVAM NA LETNYYY, TAM KDE TO MAM RAAAD, TAM KDE JA UZ PATRIIIM, JA NEPRIJDU DOMUUUUUU, JA NEPRIJDU VCASSS, KDYZ MAM RUCE NAHORE TAK NIKDY NEJSEM SAAAAAAAM... WOOOOOOOAAH OH OH OOOOH, WOOOOAH OOHHHH OOOHHH OOHHH'))


