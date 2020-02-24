const login = async (email, password) => {
    const res = await axios(
        {
            method: 'POST',
            url: 'http://127.0.0.1:7000/api/v1/user/signup',
            data: {
                email,
                password
            }
        });
};


document.querySelector('.form').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').Value;
    const password = document.getElementById('password').Value;
    login(email, password);
});