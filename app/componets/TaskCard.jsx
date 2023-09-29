import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export default function TaskCard({ props }) {
  return (
    <Link href={"/tasks/" + props.key} style={{ textDecoration: "none" }}>
      <div className="rounded">
        <div className="card mt-3 shadow">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5>{props.title} </h5>
              {/* <span>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  style={{ color: "#7b8493" }}
                />
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
