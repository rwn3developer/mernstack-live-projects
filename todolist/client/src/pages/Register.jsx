import React, { useState } from 'react'
import Header from '../components/Header'
import { json } from 'react-router-dom';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [contact, setContact] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let users = fetch(`http://localhost:9000/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                city: city,
                contact: contact
            })
        })
    }


    return (
        <>
            <Header />
            <div className='container mt-5'>
                <div className='row'>
                    <div className="col-md-8 mx-auto">
                        <div className="card">
                            <h5 className="card-header">Register User</h5>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" />
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
