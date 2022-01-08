import React from 'react'
import Cards from '../Cards';

function Services({services1, services2, makeAnAppointment}) {
    return (
        <div>
            <Cards 
                data1={services1} 
                data2 = {services2} 
                title='SERVICES' 
                type='services' 
                makeAnAppointment={makeAnAppointment} />
        </div>
    )
}

export default Services
