function checkAge(age){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      return age >=18 ? resolve(): reject();
    },2000);
  })  
}

checkAge(22)
  .then(function(){
    console.log("Maior de 18")
  })
  .catch(function(){
    console.log("Menor de 18")
  })
;