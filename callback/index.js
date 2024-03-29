
function getData(url, success, error){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send()
  xhr.onload = function(){
    if(xhr.status === 200){
      let newResponse = JSON.parse(xhr.response).data;
      success(newResponse);

      createElements(newResponse);
      
    } else{
      error(xhr.response);
    }
  }
}

function createElements(newResponse){
  let {avatar, email, first_name, id, last_name } = newResponse;
  console.log(first_name);
  let img = document.createElement("img");
  let fullName = document.createElement("h1");
  let mail = document.createElement("p");
  mail.innerText = email;
  img.setAttribute("src", avatar);
  fullName.innerText = first_name + " " + last_name;


  let allUsers = document.getElementById("user");
  allUsers.append(img);
  allUsers.append(fullName);
  allUsers.append(mail);
      
}

function success(data){
  console.log("Success");
  console.log(data);
  
}


function error(err) {
  console.log(`An error occurred - ${err}`);
}

getData("https://reqres.in/api/users/2", success, error);
getData("https://reqres.in/api/users/3", success, error);
getData("https://reqres.in/api/users/4", success, error);
