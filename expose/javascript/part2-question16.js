/*Just a reference:
let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
}; */

for(const property in statistics){
  if(statistics[property] % 2 != 0){
    console.log(`${statistics[property]}`);
  }
  else if( Array.from(property)[0] == 'r'){
    console.log(`${statistics[property]}`);
  }
}