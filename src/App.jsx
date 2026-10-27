import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FindFood from "./pages/FindFood";
import DonateFood from "./pages/DonateFood";
import FoodDetails from "./pages/FoodDetails";
import About from "./pages/About";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {

  const [foods, setFoods] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);   // stores the logged-in user (or null)
  const isLoggedIn = currentUser !== null;                // true when someone is logged in

  useEffect(() => {
    const locations = ["Thiruvananthapuram", "Kochi", "Thrissur", "Kozhikode", "Kannur", "Alappuzha", "Kottayam", "Palakkad", "Munnar", "Kasaragod"];
    const times = ["Today 1-2 PM", "Today 6-8 PM", "Today 8-10 PM", "Tomorrow 7-10 AM", "Tomorrow 9-10 AM", "Tomorrow 12-3 PM", "Tomorrow 6-9 PM", "Today 5-9 PM", "Today 7-10 PM", "Tomorrow 8-11 AM"];
    const phones = ["9876543210", "9876543211", "9876543212", "9876543213", "9876543214", "9876543215", "9876543216", "9876543217", "9876543218", "9876543219"];

    let apiFoods = [];

    // Step 1: get foods from TheMealDB
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.meals !== null) {
          const meals = data.meals.slice(0, 12);

          apiFoods = meals.map((meal, index) => {
            let foodType = "Non-Veg";

            if (meal.strCategory === "Dessert") {
              foodType = "Bakery";
            } else if (
              meal.strCategory === "Vegetarian" ||
              meal.strCategory === "Vegan" ||
              meal.strCategory === "Pasta" ||
              meal.strCategory === "Side" ||
              meal.strCategory === "Starter" ||
              meal.strCategory === "Breakfast"
            ) {
              foodType = "Veg";
            }

            return {
              id: Number(meal.idMeal),
              name: meal.strMeal,
              image: meal.strMealThumb,
              location: locations[index % locations.length],
              time: times[index % times.length],
              phone: phones[index % phones.length],
              quantity: "20 plates",
              type: foodType,
            };
          });
        }

        // Step 2: get the donated foods saved in json-server
        return fetch("http://localhost:3001/foods");
      })
      .then((response) => {
        return response.json();
      })
      .then((savedFoods) => {
        // donated foods first, then the API foods
        setFoods([...savedFoods.reverse(), ...apiFoods]);
      })
      .catch(() => {
        // if json-server is not running, show only the API foods
        setFoods(apiFoods);
      });
  }, []);

  // save the new food in json-server, then add it to the page
  function addFood(newFood) {
    fetch("http://localhost:3001/foods", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFood),
    })
      .then((response) => {
        return response.json();
      })
      .then((savedFood) => {
        setFoods((prevFoods) => [savedFood, ...prevFoods]);
      });
  }

  return (
    <div>
      <Navbar
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-food" element={<FindFood foods={foods} />} />
        <Route path="/donate" element={<DonateFood addFood={addFood} isLoggedIn={isLoggedIn} currentUser={currentUser} />} />
        <Route path="/food/:id" element={<FoodDetails foods={foods} isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;