import navbar from "./navbar.js";
let nav = navbar();
document.getElementById('navbar').innerHTML=nav;
document.getElementById('search').style.visibility='hidden';
document.getElementById('loginn').style.visibility='hidden';

class User {
    constructor() {

    }

    validateUsername(username) {
       return username.includes('@')? false : true;
    }    
    validatePassword(password) {
       return password.length < 8 ? false : true;
    }
    async signUp(n, e, u, p, m, d) {
        let isValidated = this.validateUsername(u) && this.validatePassword(p);

        if(isValidated) {
            this.name = n;
            this.email = e;
            this.username = u;
            this.password = p;
            this.mobile = m;
            this.description = d;

            const register_api = `https://masai-api-mocker.herokuapp.com/auth/register`;
            let response = await fetch(register_api, {
                method: 'POST',
                body: JSON.stringify(this),
                headers: {
                    'Content-Type':'application/json',
                },
            });
            const data = await response.json();

        }
    }
    async login(u, p) {
        const loginData = {
            username: u,
            password: p,
        }
        const login_api = `https://masai-api-mocker.herokuapp.com/auth/login`;
        let response = await fetch(login_api, {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: {
                'Content-Type':'application/json',
            }
        }); 
        const data = await response.json();
        console.log('data:', data);
        return data;
    };
    
}

let user = new User();

const Register = () => {
    let form = document.getElementById('reg_form');
    let name = form.name.value;
    let email = form.email.value;
    let username = form.username.value;
    let password = form.password.value;
    let mobile = form.mobile.value;
    let description = form.description.value;

    user.signUp(name, email, username, password, mobile, description);
    console.log(user);
}

const Login = async () => {
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;
    let data = await user.login(username, password);
    getProfile(username, data.token);
}

const getProfile = async (username, token) => {
    const profileApi = `https://masai-api-mocker.herokuapp.com/user/${username}`;
    let response = await fetch(profileApi, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type':'application/json',
        }
    });
    let data = await response.json();
    console.log('data', data);
    localStorage.setItem('username', JSON.stringify(data.username));
    document.getElementById('loginn').innerText=data.username;
    // let btn = document.createElement(button);
    // btn.innerText = data.username;
    // let end = document.getElementById('end');
    // end.append(btn);
    window.location.href='index.html';
}

document.getElementById('Login').addEventListener('click', Login);
document.getElementById('Register').addEventListener('click', Register);