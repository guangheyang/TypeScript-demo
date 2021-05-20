enum Sex {
    male = "man",
    female = "woman"
}

type Gender = "man" | "woman";
let gender: Gender;

let sex: Sex;

gender = "man";
gender = "woman";

sex = Sex.male
sex = Sex.female
function searchUser(l:Level, g?: Gender, s?: Sex) {
    console.log(l)
}

function printSex() {
    const vals = Object.values(Sex);
    vals.forEach(item => console.log(item))
}

printSex()

enum Level {
    level1 = 1,
    level2,
    level3
}

let l = Level.level2;
console.log(l)
l = Level.level3
console.log(l)

searchUser(Level.level3)