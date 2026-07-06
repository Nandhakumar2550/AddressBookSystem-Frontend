import { Link } from "react-router-dom";

function Navbar() {

    return (

        <div
            style={{
                display:"flex",
                justifyContent:"space-between",
                padding:"20px",
                background:"#1976d2",
                color:"white"
            }}
        >

            <h2>Address Book</h2>

            <Link
                to="/add"
                style={{
                    color:"white",
                    textDecoration:"none"
                }}
            >
                Add Contact
            </Link>

        </div>

    )

}

export default Navbar;