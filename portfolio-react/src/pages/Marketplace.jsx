import React from 'react'
import { useState } from 'react';
import '../styles/Marketplace.css'; // Assuming you have a CSS file for styles
const adsData = [
  {
    title: "Media Top",
    image: "img/img2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    contact: "contact1@example.com"
  },
  {
    title: "Another Ad",
    image: "img/img3.jpg",
    description: "Another great product you should see.",
    contact: "contact2@example.com"
  },
  {
    title: "Sample Ad",
    image: "img/img3.jpg",
    description: "Another great product you should see.",
    contact: "contact2@example.com"
  }
];

const Marketplace = () => {
  const [filter, setFilter] = useState('');
  const [shownContacts, setShownContacts] = useState({});

  const filteredAds = adsData.filter(ad =>
    ad.title.toLowerCase().includes(filter.toLowerCase())
  );

  const toggleContact = (index) => {
    setShownContacts((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Advertisement List</h2>

      {/* Filter Input */}
      <div className="mb-3">
        <label htmlFor="filterTitle">Filter by Title:</label>
        <input
          type="text"
          className="form-control"
          id="filterTitle"
          placeholder="Enter title"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {/* Advertisement Titles List */}
      <ul className="list-group mb-5">
        {filteredAds.length === 0 ? (
          <li className="list-group-item text-muted">No advertisements found</li>
        ) : (
          filteredAds.map((ad, index) => (
            <li key={index} className="list-group-item">
              {ad.title}
            </li>
          ))
        )}
      </ul>

      {/* Advertisement Cards */}
      <div className="row">
        {filteredAds.map((ad, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={ad.image} alt="Ad visual" width="100%" height="auto" />
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">{ad.title}</h3>
                <p>{ad.description}</p>
                <p>
                  <span>{shownContacts[index] ? ad.contact : '***'}</span>{' '}
                  <button
                    className="uk-button uk-button-text"
                    onClick={() => toggleContact(index)}
                  >
                    {shownContacts[index] ? 'Hide Contact' : 'Show Contact'}
                  </button>
                </p>
              </div>
              <div className="button">
                <button className="uk-button uk-button-default">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Marketplace;