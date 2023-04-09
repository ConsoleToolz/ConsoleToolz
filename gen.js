//Fake name generator adress adn zip code 


const firstNames = ['Oliver', 'Sophia', 'Liam', 'Emma', 'Noah', 'Ava', 'Ethan', 'Isabella', 'Lucas', 'Mia', 'Mason', 'Charlotte', 'Logan', 'Amelia', 'Jacob', 'Harper', 'William', 'Evelyn', 'Elijah', 'Abigail', 'Michael', 'Emily', 'Alexander', 'Elizabeth', 'Benjamin', 'Avery', 'Daniel', 'Sofia', 'Matthew', 'Chloe'];

const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Perez', 'Taylor', 'Anderson', 'Wilson', 'Moore', 'Jackson', 'Martin', 'Lee', 'Parker', 'Hall', 'Turner', 'Wright', 'King', 'Green', 'Baker', 'Adams', 'Nelson'];

const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia', 'Phoenix', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];

const zipCodes = {
  'New York': ['10001', '10002', '10003', '10004', '10005'],
  'Los Angeles': ['90001', '90002', '90003', '90004', '90005'],
  'Chicago': ['60601', '60602', '60603', '60604', '60605'],
  'Houston': ['77001', '77002', '77003', '77004', '77005'],
  'Philadelphia': ['19102', '19103', '19104', '19105', '19106'],
  'Phoenix': ['85001', '85002', '85003', '85004', '85005'],
  'San Antonio': ['78201', '78202', '78203', '78204', '78205'],
  'San Diego': ['92101', '92102', '92103', '92104', '92105'],
  'Dallas': ['75201', '75202', '75203', '75204', '75205'],
  'San Jose': ['95101', '95102', '95103', '95104', '95105']
};

function generateRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
}

const city = cities[Math.floor(Math.random() * cities.length)];
const zipCode = zipCodes[city][Math.floor(Math.random() * zipCodes[city].length)];
const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
const birthday = generateRandomDate(new Date(1970, 0, 1), new Date());

console.log(`${firstName} ${lastName}, born on ${birthday}, living at ${Math.floor(Math.random() * 1000) + 1} ${city} St., ${city}, ${zipCode}`);
