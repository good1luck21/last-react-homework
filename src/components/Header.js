import Button from "./Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="App-header">
        <Link to="/">last home work.</Link>
        <Link to="/posts/new">
          <Button text="create a new post" color="green" />
        </Link>
      </header>
    </>
  );
}
