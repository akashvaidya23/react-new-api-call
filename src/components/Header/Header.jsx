const Header = ({ switchToHome, switchToCreateUser }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            User Profiles
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  onClick={switchToHome}
                >
                  Show Users Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={switchToCreateUser}>
                  Create Users Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
