import React from 'react';

const Map = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.4481971596992!2d0.018080715912231097!3d51.48664222004142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a839030ef577%3A0x5fc2fd60774b5712!2sEaTurkish!5e0!3m2!1sru!2s!4v1660752636255!5m2!1sru!2s"
            width="100%"
            title='map'
            style={{ "border": "none", "aspectRatio": "16/9" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    );
}

export default Map;
