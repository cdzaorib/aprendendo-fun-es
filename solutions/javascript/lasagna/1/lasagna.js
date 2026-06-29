export const EXPECTED_MINUTES_IN_OVEN = 40
export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}
export function preparationTimeInMinutes(numbersOfLayers){
  return numbersOfLayers * 2;
}
 export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven){
   return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
 } 