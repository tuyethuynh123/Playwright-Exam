export const BillingAddressData = {
  default: {
    firstName: 'Tuyet',
    lastName: 'Huynh',
    company: 'Agest',
    country: 'Vietnam',
    address1: '123 Le Loi',
    address2: 'District 1',
    city: 'Ho Chi Minh City',
    state: 'Ho Chi Minh',
    postcode: '700000',
    phone: '0909123456',
    email: 'tuyet.huynh@agest.vn',
  },

  random: () => {
    const randomNumber = () => Math.floor(Math.random() * 10000);
    const countries = ['Vietnam', 'American Samoa', 'UK'];
    const states = ['Ho Chi Minh', 'Hanoi', 'Da Nang'];
    const cities = ['District 1', 'District 2', 'District 3'];

    return {
      firstName: `User${randomNumber()}`,
      lastName: `Test${randomNumber()}`,
      company: `Company${randomNumber()}`,
      country: countries[Math.floor(Math.random() * countries.length)],
      address1: `${randomNumber()} Le Loi`,
      address2: `Apartment ${Math.ceil(Math.random() * 100)}`,
      city: cities[Math.floor(Math.random() * cities.length)],
      state: states[Math.floor(Math.random() * states.length)],
      postcode: `${100000 + Math.floor(Math.random() * 900000)}`,
      phone: `09${Math.floor(10000000 + Math.random() * 90000000)}`,
      email: `user${randomNumber()}@example.com`,
    };
  },
};
