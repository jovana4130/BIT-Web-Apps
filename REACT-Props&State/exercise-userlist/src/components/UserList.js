import { useState } from 'react';
import Users from './Users';
import "./UserList.css";

export const UserList = () => {
    const [users] = useState(Users);

    const randomUsers = users.sort(() => 0.5 - Math.random()).slice(0, 10);

    const formatDate = (dob) => {
        const date = new Date(dob);
        const formattedDate = date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        return formattedDate;
    };

    return (
        <>
           <div className="container-fluid">
                {randomUsers.map(user => (
                    <div className="row mb-3 justify-content-center align-items-center">
                        <div className="col-sm-12 col-md-4 col-lg-2">
                            <img src={user.picture.large} alt="user" className="rounded-circle" />
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-10">
                            <p className="name">name: {user.name.first} {user.name.last}</p>
                            <p className="email">email: {user.email}</p>
                            <p className="dob">date of birth: {formatDate(user.dob.date)}</p>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </>
    );    
};