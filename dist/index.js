var Sex;
(function (Sex) {
    Sex["male"] = "man";
    Sex["female"] = "woman";
})(Sex || (Sex = {}));
let gender;
let sex;
gender = "man";
gender = "woman";
sex = Sex.male;
sex = Sex.female;
function searchUser(g, s) {
}
function printSex() {
    const vals = Object.values(Sex);
    vals.forEach(item => console.log(item));
}
printSex();
var Level;
(function (Level) {
    Level[Level["level1"] = 1] = "level1";
    Level[Level["level2"] = 2] = "level2";
    Level[Level["level3"] = 3] = "level3";
})(Level || (Level = {}));
let l = Level.level2;
console.log(l);
l = Level.level3;
console.log(l);
