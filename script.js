async function getAddressByCep(){
    const cep = document.getElementById('cep').value;
    try{
        const response = await fetch (`http://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()
        // console.log(data);
        document.querySelector('#rua').value = data.logradouro
        document.querySelector('#Bairro').value = data.bairro
        document.querySelector('#estado').value = data.uf
    } catch (error) {
        alert(error.message)
    }
    
}

async function getPrevisao(){
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('long').value;
    try{
        const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`)
        const data1 = await response.json()
        console.log(data1);
        document.getElementById('resposta').innerHTML = ""
        
                document.getElementById('resposta').innerHTML += `${data1.hourly.temperature_2m[0]} Cº`          
      
    } catch (error) {
        alert(error.message)
    }
    
}

const campos = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')

var emailRegex = /^\S+@\S+\.\S+$/;

function setError(index){
  campos[index].style.border = "2px solid red"
  spans[index].style.display = "block"
}
function removeError(index){
  campos[index].style.border = ""
  spans[index].style.display = "none"
}
function nameV(){
  if(campos[0].value.length < 3){
          
      setError(0)
  }else{
      removeError(0)
  }
}
function emailV(){
  if(!emailRegex.test(campos[1].value)){
      setError(1)
  }else{
      removeError(1)
  }
}

function acessar(){
    getPrevisao()
    getAddressByCep()
}