import { useState } from 'react';
import Users from './Users';
import "./UserGrid.css";

export const UserGrid = () => {
  const [users] = useState(Users);

  const randomUsers = users.sort(() => 0.5 - Math.random()).slice(0, 12);

  const formatEmail = (email) => {
    const [username, domain] = email.split("@");
    const firstThree = username.substring(0, 3);
    const lastThree = username.substring(username.length - 3);
    const formattedUsername = `${firstThree}...${lastThree}`;
    const formattedEmail = `${formattedUsername}@${domain}`;
    return formattedEmail;
  };

  return (
    <>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-8">
          <div className="row g-3 user-list">
            {randomUsers.map(user => (
              <div key={user.email} className="col-sm-12 col-md-6 col-lg-4">
                <div className="card">
                  <figure className="image">
                    <img src={user.picture.large} alt="user" className="img-top" />
                    <figcaption className="name">{user.name.first}</figcaption>
                  </figure>
                  <div className="card-contents">
                    <p>Email: {formatEmail(user.email)}</p>
                    <p>Date of Birth: {new Date(user.dob.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};