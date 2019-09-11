import React from 'react';

// helper
let h = {
    // server hosted at
    server: "http://localhost:3000/",
    // check for authentication
    isAuthenticated: async () => {
        let prom = fetch(h.server + 'current_user')
            .then(res => res.json())
            .then(json => {
                return json.authenticated
            })
        await prom
        console.log(prom);
        return prom
    },
    // retrieve user
    user: localStorage.getItem('u_id') ? localStorage.getItem('u_id') : '',
    // retrieve user name
    name: localStorage.getItem('u_name') ? localStorage.getItem('u_name') : '',
    // retrieve token
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    // retrieve user_email
    email: localStorage.getItem('u_email') ? localStorage.getItem('u_email') : '',
    // set user email memory
    set_email: (email) => { localStorage.setItem('u_email', email) },
    // save user
    set_user: (user, name) => { localStorage.setItem('u_id', user); localStorage.setItem('u_name', name) },
    // save token
    set_token: (token) => { localStorage.setItem('token', token) },
    // clear user
    clear_user: async () => {
        let prom = fetch(h.server + '/logout')
        await prom
        return prom
    },
    // clear token
    clear_token: () => { localStorage.removeItem('token') }
}

export default h;

