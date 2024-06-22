// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { getUsers } from '../api'; // Assuming you have an api.js file for API calls

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>Welcome to Women's Safety</h1>
      <p>
        Your safety is our priority. Explore our resources, services, and emergency contacts to ensure you have the support you need at all times. We are committed to providing comprehensive and accessible safety information to empower women everywhere.
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Resources</h5>
              <p className="card-text">Find a variety of resources to help you stay safe, including articles, videos, and guides.</p>
              <a href="/resources" className="btn btn-primary">Explore Resources</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Services</h5>
              <p className="card-text">Learn about the services we offer, from counseling to legal assistance.</p>
              <a href="/services" className="btn btn-primary">Our Services</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Emergency Contacts</h5>
              <p className="card-text">Access emergency contact information for immediate assistance.</p>
              <a href="/emergency" className="btn btn-danger">Emergency Contacts</a>
            </div>
          </div>
        </div>
      </div>

      <h2>Registered Users</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
