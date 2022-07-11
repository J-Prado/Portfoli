import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
  const position = [-17.402051, -66.219557];
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'default_service',
        'template_wezh4pl',
        form.current,
        'Gm_9wiPXzvlJUVvHs'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        (e) => {
          // console.log(e);
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am really interested in working with an IT company. You can be
            sure that I will do a great job. I can not wait to work with
            challenging projects. If you want know more about me, you can
            contact me here.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Juan Prado,
          <br />
          Bolivia,
          <br />
          Colcapirhua, Cochabamba
          <br />
          Cochabamba
          <br />
          <br />
          <span>juan_prado_rojas@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>Hey!, this is where I live.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
