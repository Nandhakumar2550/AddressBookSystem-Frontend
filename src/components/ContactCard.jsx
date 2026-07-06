import { Link } from "react-router-dom";
import api from "../api/api";

function ContactCard({contact,refresh}){

    async function deleteContact(){

        await api.delete(`/${contact.id}`);

        refresh();

    }

    return(

        <div
            style={{
                border:"1px solid gray",
                padding:"15px",
                margin:"10px"
            }}
        >

            <h3>{contact.name}</h3>

            <p>{contact.city}</p>

            <p>{contact.state}</p>

            <Link to={`/edit/${contact.id}`}>
                Edit
            </Link>

            <button
                onClick={deleteContact}
                style={{marginLeft:"20px"}}
            >
                Delete
            </button>

        </div>

    )

}

export default ContactCard;