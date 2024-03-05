function Reservation() {
  return (
    <div className="row">
      <div className="col-md-3"> </div>
      <div className="col-md-6">
        <h3 className="text-center text-secondary">Reservation form</h3>
        <div className="input-group mb-3 mt-3">
          User name :
          <input type="text" id="name" readOnly className="form-control" />
        </div>
        <div className="input-group mb-3 mt-3">
          Boat ame :
          <input type="text" id="name" readOnly className="form-control" />
        </div>
        <div className="input-group mb-3 mt-3">
          date :
          <input type="date" id="name" className="form-control" />
        </div>
        <div className="input-group mb-3 mt-3">
          City :
          <input type="text" id="name" className="form-control" />
        </div>
      </div>
      <div className="col-md-3"> </div>
    </div>
  );
}

export default Reservation;
