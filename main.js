function PesquisarEnderecoGet(url){
    let request = new XMLHttpRequest();
    request.open("GET",url,false);
    request.send();
    return request.responseText;     
}


function PreencherResultadoPesquisa(){
    let name = document.getElementById("idname").value;
    let resultado = PesquisarEnderecoGet('https://restcountries.eu/rest/v2/name/' +name);
    let dadospais = JSON.parse(resultado);
    document.getElementById("idregion").value = dadospais[0]['name'];
    document.getElementById("idsubregion").value = dadospais[0]['subregion'];
    document.getElementById("idpopulation").value = dadospais[0]['population'];
    document.getElementById("idcode").value = dadospais[0]['numericCode'];
    document.getElementById("idnativeName").value = dadospais[0]['nativeName'];
    document.getElementById("idarea").value = dadospais[0]['area'];
    document.getElementById("idborders").value = dadospais[0]['borders'];
    document.getElementById("idtimezones").value = dadospais[0]['timezones'];
 }