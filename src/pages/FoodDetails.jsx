import { useParams, Link } from "react-router-dom";

function FoodDetails(props) {

  const params = useParams();

  const food = props.foods.find((item) => {
    return item.id === Number(params.id);
  });

  if (food === undefined) {
    return (
      <div className="container text-center my-5">
        <h3>Food not found</h3>
        <Link to="/find-food" className="btn btn-brand rounded-pill mt-3">Back to Find Food</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <Link to="/find-food" className="text-brand text-decoration-none">
        <i className="bi bi-arrow-left"></i> Back to Find Food
      </Link>

      <div className="row g-4 mt-2">
        <div className="col-md-6">
          <img
            src={food.image}
            alt={food.name}
            className="details-image"
            onError={(e) => { e.target.src = "/images/default-food.jpg"; }}
          />
        </div>
        <div className="col-md-6">
          <span className="badge bg-success mb-2">{food.type}</span>
          <h1 className="fw-bold">{food.name}</h1>
          <p className="fs-5 mb-2"><i className="bi bi-box-seam text-brand"></i> <strong>Quantity:</strong> {food.quantity}</p>
          <p className="fs-5 mb-2"><i className="bi bi-geo-alt text-brand"></i> <strong>Location:</strong> {food.location}</p>
          <p className="fs-5 mb-4"><i className="bi bi-clock text-brand"></i> <strong>Available:</strong> {food.time}</p>

          
          {props.isLoggedIn ? (
            <div>
              <p className="fs-5 mb-4"><i className="bi bi-telephone text-brand"></i> <strong>Contact:</strong> {food.phone}</p>
              <a href={"tel:" + food.phone} className="btn btn-brand btn-lg rounded-pill px-5">
                <i className="bi bi-telephone-fill"></i> Call Donor
              </a>
            </div>
          ) : (
            <Link to="/login" className="btn btn-brand btn-lg rounded-pill px-5">
              <i className="bi bi-lock"></i> Login to see contact
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;