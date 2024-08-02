export default function groceriesList() {
  const groceriesMap = new Map();
  const recipeDict = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  const array = Array.from(Object.keys(recipeDict));
  array.map((item) => groceriesMap.set(item, recipeDict[item]));
  return groceriesMap;
}
