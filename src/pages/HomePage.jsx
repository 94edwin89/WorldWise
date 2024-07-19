import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>
        <PageNav />
      </h1>
      <h1>WorldWise</h1>

      <Link to="/app">Go to the App</Link>
    </div>
  );
}
