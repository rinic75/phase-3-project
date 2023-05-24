import React, { useState } from 'react';
import './Form.css';

const Register = ( { clients, onHandleSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: '',
  });

  const handleChange = (e) => {
    const value = e.target.name === 'phone' ? parseInt(e.target.value) : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
    
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch('http://localhost:9292/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        onHandleSubmit(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <label htmlFor="comment">Comment:</label>
      <textarea
        id="comment"
        name="comment"
        value={formData.comment}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
    <div>
      <br />
      <br />
      <h2>Registered Clients</h2>
      {clients.map((client) => (
        <li key={client.id}>  
          <strong>{client.name}</strong>: {client.phone} / {client.comment}
          <br />
          <br />
        </li>
      ))}
    </div>
    
    </div>
  );
};

export default Register;

// const BookAppointment = ({ golfPros }) => {

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);
//     const data = {};
//     formData.forEach((value, key) => {
//       data[key] = value;
//     });
//     console.log('Form submitted:', data);
  
//     fetch('http://localhost:9292/appointments', {
//       method: 'POST', 
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((responseData) => {
//         console.log('Response:', responseData);
//         form.reset();
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit} className='bookappointments-form'>
//       <h1>Book Appointment</h1>
//       <label>
//         Golf Pro:
//         <select name="golfPro">
//           <option value="">Select a golf pro</option>
//           {golfPros.map((golfpro) => ( 
//             <option key={golfpro.id} value={golfpro.id}>
//               {golfpro.name} in {golfpro.location.name}
//             </option>
//           ))}
//         </select>
//       </label>
//       <br />
//       <label>
//         Time:
//         <input type="datetime-local" name="time" />
//       </label>
//       <br />
//       <label>
//         Name:
//         <input type="text" name="name" />
//       </label>
//       <br />
//       <label>
//         Phone Number:
//         <input type="tel" name="phoneNumber" />
//       </label>
//       <br />
//       <label>
//         Comment:
//         <textarea name="comment" />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default BookAppointment;