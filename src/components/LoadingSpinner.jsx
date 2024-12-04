const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center" style={{ margin: "100px 0px" }}>
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default LoadingSpinner;
