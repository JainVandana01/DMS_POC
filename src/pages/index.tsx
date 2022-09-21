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
      <li>
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
      </li>
      <li>
        <Link href="/customerDetails">
          <a>CustomberDetails</a>
        </Link>
      </li>
    </ul>
  );
};

export default App;