import React, { useState } from "react";

import "./record.css";

function Record() {
    const [isRecorded, setIsRecorded] = useState(false);
  
    const handleRecordClick = (event) => {
        event.preventDefault();
      
        // Check if all input values are filled
        const form = event.target.form;
        const inputs = form.querySelectorAll("input[required]");
      
        let isFormValid = true;
      
        inputs.forEach((input) => {
          if (!input.value) {
            isFormValid = false;
            input.classList.add("error");
          } else {
            input.classList.remove("error");
          }
        });
      
        if (isFormValid) {
          setIsRecorded(true);
        }
      };

    return (
        <div>
            <div class="form-container">
    <h1>Dorm Information Form</h1>
    <form>
      <div class="form-group">
        <label for="dormNumber">Dorm Number:</label>
        <input 
        type="text"
         id="dormNumber"
          name="dormNumber"
           required
           />
      </div>
      <div class="form-group">
        <label for="numStudents">Number of Students:</label>
        <input
         type="number" 
         id="numStudents"
          name="numStudents" 
          required/>
      </div>
      <div class="form-group">
        <label for="beds">Beds:</label>
        <input
         type="number"
          id="beds" 
          name="beds" 
          required
         />
      </div>
      <div class="form-group">
        <label for="lockers">Lockers:</label>
        <input
         type="number" 
         id="lockers"
          name="lockers" 
          required
          />
      </div>
      <div class="form-group">
        <label for="tables">Tables:</label>
        <input
         type="number"
          id="tables" 
          name="tables"
           required
           />
      </div>
      <div class="form-group">
        <label for="chairs">Chairs:</label>
        <input
         type="number" 
         id="chairs" 
         name="chairs" 
         required
         />
      </div>
      <div class="form-group">
        <label for="mattresses">Matress:</label>
        <input 
        type="number"
         id="mattresses"
          name="mattresses"
           required/>
      </div>
      <div class="form-group">
        <button className="btn1" type="submit" value="Record" onClick={handleRecordClick}> Record </button>
        <button className="btn2" type="button" value="Record"> Cancel </button>
      </div>
    </form>
  </div>
  {isRecorded && (
        <div className="popup-container">
          <div className="popup">
            <p>Successfully recorded!</p>
            <button className="close-btn" onClick={() => setIsRecorded(false)}>
              Close
            </button>
          </div>
        </div>
      )}
        </div>
    );
}

export default Record;



