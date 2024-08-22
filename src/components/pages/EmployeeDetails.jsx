import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../styles/EmployeeDetails.css";

const EmployeeDetails = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    aadhaarNo: "",
    panCardNo: "",
    localAddress: "",
    permanentAddress: "",
    age: "",
    education: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset any previous error
    setSuccess(""); // Reset any previous success message

    try {
      const response = await axios.post("/employee-details", formData);
      setSuccess("Employee details added successfully.");
      history.push("/special-page"); // Redirect after successful submission
    } catch (err) {
      console.error("Error submitting employee details:", err);
      setError(err.response?.data || "An error occurred while submitting the form.");
    }


    // Validate form data here if needed
    // For example, check if all required fields are filled

    // If form data is correct, redirect to SpecialPage
    history.push("/special-page");
  };

  return (
    <div className="employee-details-container">
      <h4>Employee Details</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Aadhaar No:</label>
          <input
            type="text"
            name="aadhaarNo"
            value={formData.aadhaarNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>PAN Card No:</label>
          <input
            type="text"
            name="panCardNo"
            value={formData.panCardNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Local Address:</label>
          <input
            type="text"
            name="localAddress"
            value={formData.localAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Permanent Address:</label>
          <input
            type="text"
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Education:</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
    </div>
  );
};

export default EmployeeDetails;
