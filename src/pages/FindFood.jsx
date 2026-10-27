import { useState } from "react";
import FoodCard from "../components/FoodCard.jsx";

function FindFood(props) {

  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const filteredFoods = props.foods.filter((food) => {
    const search = searchText.toLowerCase();                                   

    const nameMatches = food.name.toLowerCase().includes(search);              
    const locationMatches = food.location.toLowerCase().includes(search);     
    const typeMatches = selectedType === "All" || food.type === selectedType;

    return (nameMatches || locationMatches) && typeMatches;                    
  });

  return (
    <div>
      <div className="page-header text-center">
        <h1 className="fw-bold">Find Food</h1>
        <p className="mb-0">Search available food near you</p>
      </div>

      <div className="container mt-4">

        <div className="row g-3 mb-4">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search by food name or location..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-select form-select-lg"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="All">All Types</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
              <option value="Fruits">Fruits</option>
              <option value="Bakery">Bakery</option>
            </select>
          </div>
        </div>

        {filteredFoods.length === 0 ? (
          <p className="text-center text-muted fs-5">No food found. Try a different search.</p>
        ) : (
          <div className="row g-4">
            {filteredFoods.map((food) => {
              return (
                <div className="col-lg-4 col-md-6" key={food.id}>
                  <FoodCard food={food} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default FindFood;