let secretKey = 'sk_test_5813ac2ceb0ec5f09043b0d65670035c06cd6e55';
let select = document.getElementsByTagName('select')[0];
let allBanks = []

function createRequest(url){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.setRequestHeader('Authorization', `Bearer ${secretKey}`)
  return xhr;
}

function createOptions(bank){
  let option = document.createElement('option');
  option.innerHTML = bank;
  select.appendChild(option);
}

let bankUrl = 'https://api.paystack.co/bank'
let xmlh = createRequest(bankUrl);
xmlh.send();

xmlh.onload = function(){
  allBanks = JSON.parse(xmlh.response);
  console.log(allBanks);
  allBanks.data.forEach((bank) => {
    createOptions(bank.name)
  })
  
}

function changeName(bankName){

  let bankCode = allBanks.data.find(bank => bank.name === bankName);
  return bankCode.code;
   
}

let form = document.getElementById('input_form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let accountNumber = document.getElementById('account').value;
  let bankName = document.getElementById('bank_name').value;
  let bankCode = changeName(bankName);

  let url = `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`;

  let xhr = createRequest(url);
  xhr.send();

  xhr.onload = function(){
    let resp = JSON.parse(xhr.response);
    console.log(resp);
    
    if(JSON.stringify(resp.status) == 'true'){
      document.getElementById('name').innerHTML = resp.data.account_name;
    }

  }

})


let new_url="https://api.paystack.co/bank"

let xhr = new XMLHttpRequest();
  xhr.open('GET', new_url);
  xhr.setRequestHeader('Authorization', `Bearer ${secretKey}`);
  xhr.send();