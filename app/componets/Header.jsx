import Link from "next/link";

export default function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#ddd" }}
      >
        <div className="container">
          <Link
            href={"/"}
            className="navbar-brand"
            style={{ fontWeight: "500", fontSize: "25px" }}
          >
            Task Management
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link
                href={"/login"}
                className="btn btn-dark me-2 col-lg-7 link"
                type="submit"
                style={{ borderRadius: "0" }}
              >
                Log in
              </Link>

              <Link
                href={"/register"}
                className="btn btn-dark col-lg-7"
                type="submit"
                style={{ borderRadius: "0" }}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
