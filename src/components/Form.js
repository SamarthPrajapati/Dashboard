// Form.js
import React, { useState } from "react";

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
    <div className="center-container">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="mb-3">
          <label className="form-label">Leave Type:</label>
          <select
            className="form-select"
            name="leaveType"
            value={formData.leaveType}
            onChange={handleChange}
          >
            <option value="">Select Leave Type</option>
            <option value="sick">Sick Leave</option>
            <option value="vacation">Vacation</option>
            <option value="personal">Personal Leave</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Date Range:</label>
          <input
            type="date"
            className="form-control"
            name="dateRange"
            value={formData.dateRange}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Manager:</label>
          <input
            type="text"
            className="form-control"
            name="manager"
            value={formData.manager}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Leave Reason:</label>
          <textarea
            className="form-control"
            name="leaveReason"
            value={formData.leaveReason}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex justify-content-end mb-3">
          <button
            type="button"
            className="btn btn-outline-dark me-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
