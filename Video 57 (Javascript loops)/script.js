a = (1)
for (let i = 0; i < 100; i++) {
    console.log (a + 1)
    
}

let hamza = {
    name: "Hamza",
    role : "teacher",
    age : 21
};



for (let key in hamza) {
    
        console.log(key)
      console.log(hamza[key])
    
}

const name = "Harry";

for (let question of name) {
    console.log(question)
}

let number = 10;


while (number < 20) {
    console.log(number)

    ++number
} 