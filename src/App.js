import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import React from 'react';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Appointments from './components/pages/Appointments';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [appts, setAppts] = useState([]);


  const [services1] = useState([
    {
        id: 1,
        star: 305,
        name: 'Massage',
        added: false,
        date: '20th Jan 2022 09:30 AM',
        text: 'Massage therapy draws on a number of techniques from many traditions including Swedish Massage, combining them with the massage therapist’s natural sensitivity, to meet the needs of each individual as a whole. This means whether you are looking for deep relaxation, relief from pain or to be left feeling revitalised and renewed, a qualified holistic massage therapist is ideally suited. We have been trained in a wide variety of techniques that may be adapted to you rather than applying a set routine to treat all.',
        src: 'https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: 2,
        star: 476,
        name: 'Sauna',
        added: false,
        date: '24th Jan 2022 09:30 AM',
        text: 'Saunas have been used for thousands of years and are still popular today. A sauna can help people to unwind and relax, and it may have other health benefits. Regardless of how a sauna is heated, or the humidity level, the effects on the body are similar. When a person sits in a sauna, their heart rate increases and blood vessels widen. This increases circulation, in a similar way to low to moderate exercise depending on the duration of sauna use. The reduction in stress levels when using a sauna may be linked to a lower risk of diseases.',
        src: 'https://images.unsplash.com/photo-1585815157396-ad62043f721b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: 3,
        star: 621,
        added: false,
        date: '13th Jan 2022 09:30 AM',
        name: 'Pool',
        text: 'Endless Pools has been revolutionizing home fitness and recreation for decades, and we are not done yet! With an Endless Pools swim spa, you will enjoy swimming, refreshing private workouts, hydromassage, and active family fun, all in one beautifully designed package. With our exclusive current technology and stunning design, our E-Series spas deliver peak experiences for all, plus our exclusive treadmill option. Rethink what a swim spa can be. Our revolutionary pools assemble on site, indoors or outside.',
        src: 'https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
    },

]);

const [services2] = useState([
    {
        id: 4,
        star: 456,
        name: 'Manicure',
        added: false,
        date: '1st Feb 2022 09:30 AM',
        text: 'For both men and women, manicures are excellent for maintaining healthy nails, cuticles and skin. Regardless of your profession, people notice other’s hands and the presentation and cleanliness of your hands will be judged. Having your hands and nails groomed by a skilled therapist achieves a clean and professional look that can be difficult attain yourself. The pampering aspect of a manicure allows you to de-stress, relax and enjoy some "me time". ',
        src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: 5,
        star: 534,
        added: false,
        date: '6th Jun 2022 09:30 AM',
        name: 'Pedicure',
        text: 'Getting a pedicure is a wonderful way to pamper your feet. It can be a perfect excuse for some “me time’ to sit back and relax. Alternatively, you can catch up with friends over a pedicure. Regular pedicures keep your feet fresh and healthy. They help prevent nail disorders like ingrown nails and can tend to excess or hardened skin on your feet. Even though not all pedicures involve painting your nails, for those that do it can be a fun and creative.',
        src: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        id: 6,
        star: 234,
        added: false,
        date: '17th May 2022 09:30 AM',
        name: 'Face treatment',
        text: 'The short-term benefits of facial treatment can be seen during and after treatment. When the treatment is finished, the face feels completely fresh and clean. Skin feels softer and more hydrated right away, and the client feels relaxed. Acne breakouts may fade or disappear gradually after treatment. The skin may feel plumper in the case of mature skin. Regular facial treatments lead to a better appearance of the skin, especially every month.',
        src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },

]);

const makeApnt = (serviceId) => {
  console.log(serviceId);
  services1.forEach(element => {
    if(element.id === serviceId) {
      element.added = true;
    }
  });
  services2.forEach(element => {
    if(element.id === serviceId) {
      element.added = true;
    }
  });
  let addedServices1 = services1.filter((item) => item.added == true);
  let addedServices2 = services2.filter((item) => item.added == true);
  let addedServices = [...addedServices1, ...addedServices2];
  console.log(addedServices);
  setAppts(addedServices);
}

const deleteApnt = (serviceId) => {
  console.log(serviceId);
  
  appts.forEach(element => {
    if(element.id == serviceId) {
      element.added = false;
    }
  });

  let newApp = appts.filter((item) => item.added == true);
  setAppts(newApp);
}

  return (
    <BrowserRouter className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services services1={services1} services2={services2} makeAnAppointment={makeApnt} />}/>
        <Route path="/appointments" element={<Appointments data={appts} deleteAnAppointment={deleteApnt} />}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
