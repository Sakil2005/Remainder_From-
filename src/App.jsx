import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [datetime, setDatetime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !phone || !datetime) {
      alert("Please fill all fields");
      return;
    }

    const reminderMessage = `Hi ${name}, this is a reminder for your salon appointment on ${new Date(datetime).toLocaleString()}`;

    console.log("SMS Sent To:", phone);
    console.log("Message:", reminderMessage);

    alert("SMS reminder sent successfully!");
    setName('');
    setPhone('');
    setDatetime('');
  }

  return (
    <div class="container">
      <h1> SMS Reminder</h1>
      <p>Send personalized SMS reminders to your customers easily</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Customer Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="tel"
          placeholder="Enter Phone Number (e.g., 9735244559)"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <input
          type="datetime-local"
          value={datetime}
          onChange={(event) => setDatetime(event.target.value)}
        />
        <button type="submit">Send SMS Reminder</button>
      </form>
    </div>
  )
}

export default App;




