console.log('im here')
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  console.log(email)
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
 
      if (response.ok) {
        console.log(response)
        // If successful, redirect the browser to the profile page
        document.location.replace('/landing');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  console.log(response)
      if (response.ok) {
        console.log(response)
        document.location.replace('/landing');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
    
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  
    const searchGame = (e) => { console.log('search-game')
    const search = document.querySelector('#gamesInput').value
    const response = fetch('/api/getGame/' + search, {
        method: 'GET',
       
        headers: { 'Content-Type': 'application/json' },
      });
}
console.log(response)
document.querySelector('#searchBtn').addEventListener('submit', searchGame)