import React from 'react';

// helper
let h = {
    // server hosted at
    server: "http://localhost:3000/",
    // check for authentication
    isAuthenticated: async () => {
            let prom =  fetch(h.server + '/verify_auth')
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
    // retrieve token
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    // save user
    set_user: (user) => { localStorage.setItem('u_id', user) },
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

