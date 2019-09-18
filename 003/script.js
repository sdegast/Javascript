const plaatjes = document.getElementsByTagName("img");
const randomNumbers = [];
let random = 0;

while(randomNumbers.length < 9) {
    random = Math.floor(Math.random() * 9) + 1;
    if(randomNumbers.lastIndexOf(random) === -1) {
        randomNumbers.push(random);
    }
}

random = 0;
for(var plaatje in plaatjes) {
    plaatjes[plaatje].src = "./resources/kat" + randomNumbers[random] + ".jpg";
    random++;
}
