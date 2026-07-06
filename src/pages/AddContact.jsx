import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function AddContact() {

    const navigate = useNavigate();

    const [contact, setContact] = useState({
        name: "",
        city: "",
        state: ""
    });

    function handleChange(event) {

        setContact({

            ...contact,

            [event.target.name]: event.target.value

        });

    }

    async function saveContact(event) {

        event.preventDefault();

        try {

            await api.post("/", contact);

            alert("Contact Added Successfully");

            navigate("/");

        } catch (error) {

            console.log(error);

        }

    }

    return (

        <div>

            <h2>Add Contact</h2>

            <form onSubmit={saveContact}>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={contact.name}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    value={contact.city}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="text"
                    name="state"
                    placeholder="Enter State"
                    value={contact.state}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <button type="submit">
                    Save
                </button>

            </form>

        </div>

    );

}

export default AddContact;