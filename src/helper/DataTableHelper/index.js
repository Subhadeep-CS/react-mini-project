import { faker } from '@faker-js/faker';
import Button from '../../common/Button';

export const generateMockAirlineData = (numItems = 10) => {
    const statuses = ['On Time', 'Delayed', 'Cancelled', 'Boarding', 'Departed', 'Landed'];
    const mockData = [];
    for (let i = 0; i < numItems; i++) {
        mockData.push({
            flightNumber:faker.airline.flightNumber({length: 4}),
            airline:faker.airline.airline(),
            airplane:faker.airline.airplane(),
            airport:faker.airline.airport(),
            status: statuses[Math.floor(Math.random() * statuses.length)],
        });
    }
    return mockData;
};

const buttonStyle={'margin':'2px','padding':'2px','boxSizing':'border-box','opacity':'0.8','outline':'none','borderRadius':'20px','cursor':'not-allowed'}

export const getFlightStatus=(flightStatus)=>{
    const status=flightStatus;
    switch(status){
        case "On Time":
            return <Button backgroundColor='green' name="On Time" height='30px' width='100px' cssStyle={buttonStyle}/>
        case "Delayed": 
            return <Button backgroundColor='#FFAA1D' name="Delayed" height='30px' width='100px' cssStyle={buttonStyle}/>
        case "Cancelled": 
            return <Button backgroundColor='red' name="Cancelled" height='30px' width='100px' cssStyle={buttonStyle}/>
        case "Boarding": 
            return <Button backgroundColor='blue' name="Boarding" height='30px' width='100px' cssStyle={buttonStyle}/>
        case "Departed": 
            return <Button backgroundColor='gray' name="Departed" height='30px' width='100px' cssStyle={buttonStyle}/>
        case "Landed": 
            return <Button backgroundColor='tomato' name="Landed" height='30px' width='100px' cssStyle={{...buttonStyle,
                "opacity":"0.9"}}/>
    }
}
