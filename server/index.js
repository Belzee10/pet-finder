const faker = require('faker');
const cuid = require('cuid');

module.exports = () => {
  const data = { pets: [] };

  for (let i = 0; i < 5; i++) {
    const type = faker.random.number(1) === 1 ? 'dog' : 'cat';
    data.pets.push({
      id: cuid(),
      name: faker.name.firstName(),
      adopted: faker.random.boolean(),
      type
    });
  }
  return data;
};
