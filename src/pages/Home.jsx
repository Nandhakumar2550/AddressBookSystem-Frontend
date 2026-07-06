import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";

function Home() {

    const [contacts, setContacts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        loadContacts();
    }, []);

    async function loadContacts() {

        try {

            const response = await api.get("/");

            setContacts(response.data);

        } catch (error) {

            console.log(error);

        }

    }

    async function deleteContact(id) {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this contact?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            await api.delete(`/${id}`);

            alert("Contact Deleted Successfully");

            loadContacts();

        } catch (error) {

            console.log(error);

        }

    }

    return (

        <div style={{ padding: "20px" }}>

            <h1>Address Book</h1>

            <button onClick={() => navigate("/add")}>
                Add Contact
            </button>

            <br />
            <br />

            <table border="1" cellPadding="10">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Name</th>

                        <th>City</th>

                        <th>State</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {contacts.map((contact) => (

                        <tr key={contact.id}>

                            <td>{contact.id}</td>

                            <td>{contact.name}</td>

                            <td>{contact.city}</td>

                            <td>{contact.state}</td>

                            <td>

                                <Link to={`/edit/${contact.id}`}>
                                    <button>Edit</button>
                                </Link>

                                <button
                                    onClick={() => deleteContact(contact.id)}
                                    style={{ marginLeft: "10px" }}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default Home;