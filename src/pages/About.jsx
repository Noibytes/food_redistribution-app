function About() {
  return (
    <div>
      <div className="page-header text-center">
        <h1 className="fw-bold">About FoodShare</h1>
        <p className="mb-0">Food is for eating, not for throwing away</p>
      </div>

      <div className="container mt-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card info-card p-4 h-100">
              <div className="icon-circle"><i className="bi bi-basket2"></i></div>
              <h5 className="fw-bold text-center">What is FoodShare?</h5>
              <p className="mb-0">FoodShare is a simple platform where homes, hostels, restaurants and events can list extra food, and people in need can find it nearby.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card info-card p-4 h-100">
              <div className="icon-circle"><i className="bi bi-exclamation-triangle"></i></div>
              <h5 className="fw-bold text-center">Why is food waste a problem?</h5>
              <p className="mb-0">Tons of edible food is thrown away every day while many people go hungry. Wasted food also harms the environment because it rots and creates harmful gases.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card info-card p-4 h-100">
              <div className="icon-circle"><i className="bi bi-heart"></i></div>
              <h5 className="fw-bold text-center">How do we help?</h5>
              <p className="mb-0">We connect donors and receivers quickly, so extra food is collected while it is still fresh. Less waste, fewer hungry people.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
