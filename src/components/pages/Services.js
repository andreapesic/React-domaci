import React from 'react'
import Cards from '../Cards';

function Services() {

    const services1=[
        {
            name: 'Massage',
            text: 'Caring, gentle, receptive and calming. Julie’s responsiveness to what I needed was reassuring and I left feeling back in my body – and very grateful!',
            src: 'https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            name: 'Sauna',
            text: 'Caring, gentle, receptive and calming. Julie’s responsiveness to what I needed was reassuring and I left feeling back in my body – and very grateful!',
            src: 'https://images.unsplash.com/photo-1585815157396-ad62043f721b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            name: 'Pool',
            text: 'Caring, gentle, receptive and calming. Julie’s responsiveness to what I needed was reassuring and I left feeling back in my body – and very grateful!',
            src: 'https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
        },

    ];

    const services2=[
        {
            name: 'Manicure',
            text: 'Caring, gentle, receptive and calming. Julie’s responsiveness to what I needed was reassuring and I left feeling back in my body – and very grateful!',
            src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            name: 'Pedicure',
            text: 'Caring, gentle, receptive and calming. Julie’s responsiveness to what I needed was reassuring and I left feeling back in my body – and very grateful!',
            src: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        {
            name: 'Facial treatment',
            text: 'Caring, gentle, receptive and calming. Julie’s responsiveness to what I needed was reassuring and I left feeling back in my body – and very grateful!',
            src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },

    ];

    return (
        <div>
            <Cards data1={services1} data2 = {services2} title='SERVICES' type='services' />
        </div>
    )
}

export default Services
