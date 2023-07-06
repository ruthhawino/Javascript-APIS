
const getUsers = () => {
    return fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(response => response)
      .catch(error => error);
  };
  const displayUsers = async () => {
    let users = await getUsers();
    console.log({ users });
    let userContainer = document.getElementById('users');
    users.users.map(item => {

      let div = document.createElement('div');
      div.className = `person`
      let img = document.createElement('img');
      let name = document.createElement('h2');
      let userName = document.createElement('p');
      img.src = item.image;
      name.innerHTML = `${item.firstName} ${item.lastName}`;
      userName.innerHTML = item.username;
      div.appendChild(img);
      div.appendChild(name);
      div.appendChild(userName);
      userContainer.appendChild(div);
    });
    // userContainer.innerHTML = `loading`
  };
  displayUsers();







    
// })
// }
//  console.log (displayUsers());