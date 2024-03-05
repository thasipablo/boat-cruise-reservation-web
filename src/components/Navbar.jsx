import './nav.css';
import LogoutButton from './logout_button/LogoutButton';

function Navbar() {
  return (
    <div className="" id="nav">
      <ul className="nav flex-column border border-1">
        <h1 className="marge pt-3 pb-3 ">Logo</h1>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">MODELS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/reservation">RESERVE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/">MY RESERVATIONS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/">ADD MOTOCYCLE</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-dark" href="/">DELETE MOTOCYCLE</a>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
