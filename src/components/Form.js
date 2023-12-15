// Form.js
import React, { useState } from "react";

import "../components/style.css";

const initialFormData = {
  leaveType: "",
  dateRange: "",
  manager: "",
  leaveReason: "",
};

const Form = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log("Form data submitted:", formData);
  };

  const handleCancel = () => {
    setFormData(initialFormData);
  };

  return (
    <div className=" center-container">
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          Leave Type:
          <select
            name="leaveType"
            value={formData.leaveType}
            onChange={handleChange}
          >
            <option value="">Select Leave Type</option>
            <option value="sick">Sick Leave</option>
            <option value="vacation">Vacation</option>
            <option value="personal">Personal Leave</option>
          </select>
        </label>
        <br />

        <label>
          Date Range:
          <input
            type="date"
            name="dateRange"
            value={formData.dateRange}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Manager:
          <input
            type="text"
            name="manager"
            value={formData.manager}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Leave Reason:
          <textarea
            name="leaveReason"
            value={formData.leaveReason}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default Form;
