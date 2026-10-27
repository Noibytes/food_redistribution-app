import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      
      <section className="hero">
        <div className="container text-center">
          <h1>Don't waste food.<br />Share it.</h1>
          <p className="lead my-4">
            FoodShare connects people who have extra food with people who need it,
            so good meals reach plates instead of dustbins.
          </p>
          <Link to="/find-food" className="btn btn-light btn-lg rounded-pill px-5 me-3 mb-2">Find Food</Link>
          <Link to="/donate" className="btn btn-warning btn-lg rounded-pill px-5 mb-2">Donate Food</Link>
        </div>
      </section>

     
      <section className="container my-5">
        <div className="row text-center g-4">
          <div className="col-md-3 col-6">
            <div className="card info-card p-3">
              <h2 className="text-brand fw-bold">1/3</h2>
              <p className="mb-0">of all food produced is wasted</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card info-card p-3">
              <h2 className="text-brand fw-bold">500+</h2>
              <p className="mb-0">meals shared (sample)</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card info-card p-3">
              <h2 className="text-brand fw-bold">120</h2>
              <p className="mb-0">donors joined (sample)</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card info-card p-3">
              <h2 className="text-brand fw-bold">15</h2>
              <p className="mb-0">areas covered (sample)</p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-4">How It Works</h2>
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="card info-card p-4 h-100">
              <div className="icon-circle"><i className="bi bi-pencil-square"></i></div>
              <h5 className="fw-bold">1. Donate</h5>
              <p className="mb-0">Add the food you have left, with quantity, place and time.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card info-card p-4 h-100">
              <div className="icon-circle"><i className="bi bi-search"></i></div>
              <h5 className="fw-bold">2. Find</h5>
              <p className="mb-0">People nearby search the list and open the food details.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card info-card p-4 h-100">
              <div className="icon-circle"><i className="bi bi-heart-fill"></i></div>
              <h5 className="fw-bold">3. Share</h5>
              <p className="mb-0">They request the food and collect it before it goes to waste.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
