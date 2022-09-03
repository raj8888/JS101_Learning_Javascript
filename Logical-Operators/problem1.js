//Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

let yob=2005;
let person_age=2022-yob;

if (person_age>=13 && person_age<=19){
  console.log("Teenage");
} else if(person_age>=20 && person_age<=29){
  console.log("Twenties")
}else{
  console.log("NA")
}