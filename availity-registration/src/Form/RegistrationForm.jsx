import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    npiNumber: "",
    businessAddress: "",
    telephoneNumber: "",
    emailAddress: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   alert(formData.firstName + "Registered Successfully!!!")
  };

  return (
    <div className="form-container">
        <h1>Availity Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="npiNumber">NPI Number:</label>
          <input
            type="text"
            name="npiNumber"
            id="npiNumber"
            value={formData.npiNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="businessAddress">Business Address:</label>
          <input
            type="text"
            name="businessAddress"
            id="businessAddress"
            value={formData.businessAddress}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telephoneNumber">Telephone Number:</label>
          <input
            type="text"
            name="telephoneNumber"
            id="telephoneNumber"
            value={formData.telephoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailAddress">Email Address:</label>
          <input
            type="email"
            name="emailAddress"
            id="emailAddress"
            value={formData.emailAddress}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
