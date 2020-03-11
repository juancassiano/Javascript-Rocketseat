var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');
var btnElement = document.querySelector('.button');
 

function adicionar(name){
    for(repo of name){
    var linhaElement = document.createElement('li');
    var nameElement = document.createTextNode(repo.name);

    linhaElement.appendChild(nameElement);
    listElement.appendChild(linhaElement);
    }
}

function repository(){
  var user = inputElement.value;

  var usuario = `https://api.github.com/users/${user}/repos`;
  axios.get(usuario)
  .then(function(response){
    adicionar(response.data);
  })
  .catch(function (error) {
    console.warn(error);
  })
}

btnElement.onclick = function(){
  repository();
};
