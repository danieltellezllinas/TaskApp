import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Task list</Link>
      <Link to="/create-task">Create task</Link>
    </div>
  );
};

export default Navbar;
