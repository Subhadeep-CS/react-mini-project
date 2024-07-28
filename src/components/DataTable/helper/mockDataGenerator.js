import { faker } from '@faker-js/faker';

const generateMockAirlineData = (numItems = 10) => {
    const statuses = ['On Time', 'Delayed', 'Cancelled', 'Boarding', 'Departed', 'Landed'];
    const mockData = [];
    for (let i = 0; i < numItems; i++) {
        const departureTime = faker.date.future();
        const arrivalTime = faker.date.future();

        mockData.push({
            flightNumber:faker.airline.flightNumber(),
            airline:faker.airline.airline(),
            airplane:faker.airline.airplane(),
            airport:faker.airline.airport(),
            status: statuses[Math.floor(Math.random() * statuses.length)],
        });
    }
    return mockData;
};

export default generateMockAirlineData;
