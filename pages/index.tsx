import type { NextPage } from "next";
import Dashboard from "./dashboard";
import Link from "next/link";

const App = () => {
  return (
    <ul>
      <li>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </li>
      <li>
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
      </li>
      <li>
        <Link href="/home">
          <a>Home</a>
        </Link>
      </li>
    </ul>
  );

const Home: NextPage = () => {
  return <Dashboard />;
};

export default App;
