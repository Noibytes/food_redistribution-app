import { Link } from "react-router-dom";

function FoodCard(props) {
  const food = props.food;

  // check if the food is still available, using the end time in text like "1-3pm"
  function isAvailable(timeText) {
    // "1-3pm" -> take the part after "-" -> "3pm"
    const endPart = timeText.split("-")[1];

    // "3pm" -> take the number -> 3
    let hour = parseInt(endPart);

    // if it says pm, add 12 (3pm -> 15)
    if (endPart.toLowerCase().includes("pm") && hour !== 12) {
      hour = hour + 12;
    }

    // current hour from the system clock
    const currentHour = new Date().getHours();

    // available if the current hour is before the end hour
    return currentHour < hour;
  }

  return (
    <div className="card food-card h-100">
      <img
        src={food.image}
        alt={food.name}
        onError={(e) => {
          e.target.src = "/images/default-food.jpg";
        }}
      />

      <div className="card-body">
        <span className="badge bg-success mb-2">{food.type}</span>

        <h5 className="card-title fw-bold">{food.name}</h5>

        <p className="mb-1">
          <i className="bi bi-box-seam text-brand"></i> {food.quantity}
        </p>

        <p className="mb-1">
          <i className="bi bi-geo-alt text-brand"></i> {food.location}
        </p>

        <p className="mb-1">
          <i className="bi bi-clock text-brand"></i> {food.time}
        </p>

        {/* Available / Unavailable badge (only when the time has a "-" like 1-3pm) */}
        {food.time.includes("-") && (
          isAvailable(food.time)
            ? <span className="badge bg-success mb-2">Available</span>
            : <span className="badge bg-danger mb-2">Unavailable</span>
        )}

        <Link
          to={"/food/" + food.id}
          className="btn btn-brand w-100 rounded-pill"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default FoodCard;