import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5 className="fw-bold"><i className="bi bi-basket2-fill"></i> FoodCourt</h5>
            <p>Sharing extra food with people who need it. Less waste, more smiles.</p>
          </div>
          <div className="col-md-6 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <p className="mb-1"><Link to="/find-food">Find Food</Link></p>
            <p className="mb-1"><Link to="/donate">Donate Food</Link></p>
            <p className="mb-1"><Link to="/about">About Us</Link></p>
          </div>
        </div>
        <hr />
        <p className="text-center mb-0">© 2026 FoodCourt</p>
      </div>
    </footer>
  );
}

export default Footer;
