export const pickRandomArrayItem = <T>(array: Readonly<Array<T>>) => array[Math.floor(Math.random() * array.length)];
