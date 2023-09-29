import Link from "next/link";

export default function TaskCard({ props }) {
  return (
    <Link href={"/tasks/" + props.key} style={{ textDecoration: "none" }}>
      <div className="rounded">
        <div className="card mt-3 shadow">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5>{props.title} </h5>
              <span>
                <i
                  class="fa-regular fa-pen-to-square"
                  style={{ color: "#7b8493" }}
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
