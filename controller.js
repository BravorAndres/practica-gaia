
const profesiones = [["Arquitectura","Profesional","salario promedio: 5'000.000","xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
                     ["Ing civil","Profesional","salario promedio: 7'000.000","xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
                     ["Ing Quimico","Profesional","salario promedio: 5'000.000","xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"]];


function caragarProfesion(){
    let profesion = document.getElementById("profesion");
    let nivel = document.getElementById("nivelAcademico");
    let salario = document.getElementById("salario");
    let descripcion = document.getElementById("descripcion");
    profesion.textContent=profesiones[0][0];
    nivel.textContent=profesiones[0][1];
    salario.textContent=profesiones[0][2];
    descripcion.textContent=profesiones[0][3];
}

window.onload = caragarProfesion;