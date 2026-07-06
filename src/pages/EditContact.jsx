import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";

function EditContact() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [contact, setContact] = useState({

        name: "",

        city: "",

        state: ""

    });

    useEffect(() => {

        loadContact();

    }, []);

    async function loadContact() {

        try {

            const response = await api.get(`/${id}`);

            setContact(response.data);

        }

        catch (error) {

            console.log(error);

        }

    }

    function handleChange(event) {

        setContact({

            ...contact,

            [event.target.name]: event.target.value

        });

    }

    async function updateContact(event) {

        event.preventDefault();

        try {

            await api.put(`/${id}`, contact);

            alert("Contact Updated Successfully");

            navigate("/");

        }

        catch (error) {

            console.log(error);

        }

    }

    return (

        <div>

            <h2>Edit Contact</h2>

            <form onSubmit={updateContact}>

                <input

                    type="text"

                    name="name"

                    value={contact.name}

                    onChange={handleChange}

                />

                <br /><br />

                <input

                    type="text"

                    name="city"

                    value={contact.city}

                    onChange={handleChange}

                />

                <br /><br />

                <input

                    type="text"

                    name="state"

                    value={contact.state}

                    onChange={handleChange}

                />

                <br /><br />

                <button>

                    Update Contact

                </button>

            </form>

        </div>

    );

}

export default EditContact;