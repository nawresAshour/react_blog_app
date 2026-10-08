import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <span className="not-found-label">ERROR 404</span>

        <h2>
          Page <span>Not Found</span>
        </h2>

        <p>
          Sorry, the page you are looking for doesn't exist or may have been
          moved.
        </p>

        <Link to="/" className="back-home">
          Back to Home
          <span>→</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;