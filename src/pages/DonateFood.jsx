import { useState } from "react";
import { Link } from "react-router-dom";   
import FoodCard from "../components/FoodCard";

function DonateFood(props) {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("Veg");
  const [phone, setPhone] = useState("");

  const [submittedFood, setSubmittedFood] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const newFood = {
      id: Date.now(),
      name: name,
      quantity: quantity,
      location: location,
      time: time,
      type: type,
      phone: phone,
      donor: props.currentUser.username, 
      image: "https://loremflickr.com/600/400/food,meal?lock=" + Date.now(),
    };

    props.addFood(newFood);
    setSubmittedFood(newFood);

    setName("");
    setQuantity("");
    setLocation("");
    setTime("");
    setType("Veg");
    setPhone("");
  }

  
  if (props.isLoggedIn === false) {
    return (
      <div className="container text-center my-5">
        <h3>Please login to donate food</h3>
        <Link to="/login" className="btn btn-brand rounded-pill mt-3">Go to Login</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="page-header text-center">
        <h1 className="fw-bold">Donate Food</h1>
        <p className="mb-0">Fill in the details and help someone today</p>
      </div>

      <div className="container mt-4">
        <div className="row g-4">
          
          <div className="col-lg-6">
            <div className="card info-card p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Food Name</label>
                  <input type="text" className="form-control" required
                    value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Quantity</label>
                  <input type="text" className="form-control" placeholder="e.g. 20 plates" required
                    value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input type="text" className="form-control" required
                    value={location} onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Available Time</label>
                  <input type="text" className="form-control" placeholder="e.g. Today 6 PM - 8 PM" required
                    value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Food Type</label>
                  <select className="form-select" value={type}
                    onChange={(e) => setType(e.target.value)}>
                    <option value="Veg">Veg</option>
                    <option value="Non-Veg">Non-Veg</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Bakery">Bakery</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Contact Number</label>
                  <input type="tel" className="form-control" placeholder="e.g. 9876543210" required
                    value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-brand w-100 rounded-pill py-2">Donate Food</button>
              </form>
            </div>
          </div>

          <div className="col-lg-6">
            {submittedFood !== null ? (
              <div>
                <div className="alert alert-success">Thank you! Your food is now listed.</div>
                <FoodCard food={submittedFood} />
              </div>
            ) : (
              <div className="text-center text-muted mt-5">
                <i className="bi bi-basket2 display-1"></i>
                <p>Your donated food will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonateFood;