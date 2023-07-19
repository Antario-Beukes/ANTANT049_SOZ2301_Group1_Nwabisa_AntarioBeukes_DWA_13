const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// Use forEach to console log each name to the console
names.forEach(name => {
  console.log(name);
});

// Use forEach to console log each name with a matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Using map, loop over all province names and turn the string to all uppercase
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// Create a new array with map that has the amount of characters in each name
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Using sort to sort all provinces alphabetically
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// Use filter to remove all provinces that have the word "Cape" in them and return the count
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);

// Create a boolean array using map and some to determine whether a name contains an 'S' character
const nameContainsS = names.map(name => name.includes('S'));
console.log(nameContainsS);

// Using reduce, create an object that indicates the province of an individual
const provinceObject = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(provinceObject);

// Additional exercises

const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Use forEach to console.log each product name to the console
products.forEach(product => {
  console.log(product.product);
});

// Use filter to filter out products that have a name longer than 5 characters
const filteredProducts = products.filter(product => product.product.length <= 5);
console.log(filteredProducts);

// Using both filter and map, convert prices that are strings to numbers and remove products without prices
const validProducts = products
  .filter(product => product.price !== '' && !isNaN(product.price))
  .map(product => ({ ...product, price: Number(product.price) }));

// Use reduce to calculate the combined price of all remaining products
const totalPrice = validProducts.reduce((sum, product) => sum + product.price, 0);
console.log(totalPrice);

// Use reduce to concatenate all product names to create a string
const concatenatedNames = products.reduce((str, product, index) => {
  if (index === 0) {
    return product.product;
  } else if (index === products.length - 1) {
    return `${str} and ${product.product}`;
  } else {
    return `${str}, ${product.product}`;
  }
}, '');
console.log(concatenatedNames);

// Use reduce to calculate both the highest and lowest-priced items
const { highest, lowest } = products.reduce(
  (result, product) => {
    if (product.price > result.highest.price) {
      result.highest = product;
    }
    if (product.price < result.lowest.price) {
      result.lowest = product;
    }
    return result;
  },
  { highest: { price: -Infinity }, lowest: { price: Infinity } }
);
console.log(`Highest: ${highest.product}. Lowest: ${lowest.product}`);

// Using only Object.entries and reduce, recreate the object with changed keys
const changedKeys = Object.entries(products).reduce((newObj, [key, value]) => {
  const modifiedKey = key === 'product' ? 'name' : key === 'price' ? 'cost' : key;
  newObj[modifiedKey] = value;
  return newObj;
}, {});
console.log(changedKeys);