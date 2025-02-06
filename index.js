// map with objet entires

const person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
  };

  let map = new Map(Object.entries(person));
  map.set("name","Mamta")
  console.log("map==== ",map) // will return map array of size 3 with kry value pair, key should be unique, if u are going to add same key, will will take and repalces value with new one, only once