import React from 'react';

let h = {
    server: "http://localhost:3000/",
    user: localStorage.getItem('u_id') ? localStorage.getItem('u_id') : '',
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    set_user: (user) => { localStorage.setItem('u_id', user)},
    set_token: (token) => { localStorage.setItem('token', token)}
}

export default h;

