import "../Components/NotFound.scss"

export const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="error-code"> 404</h1>
      <h2 className="error-message">Page Not Found !</h2>
      <p className="error-msg">
        Oops! The page you are searching for does not exist.
      </p>
      <a className="link" style={{ color: "white", textDecoration: "none" }} href="/">Go back to home</a>
    </div>
    
  );
};
