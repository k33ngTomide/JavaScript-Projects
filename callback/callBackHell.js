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

function success(data){
  console.log("Success");
  console.log(data);
  
}

function error(err) {
  console.log(`An error occurred - ${err}`);
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

getData("https://reqres.in/api/users/1", (data) => {
  console.log("Response1 ->", data );
  getData("https://reqres.in/api/users/2", (data2) => {
    console.log("Response2 ->", data2 );
    getData("https://reqres.in/api/users/3", (data3) => {
      console.log("Response3 ->", data3 );
    }, error)
  }, error)
}, error);

