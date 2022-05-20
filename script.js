var student ={};
student.name ='คุณลุง'
student.username = 'a@b.com'
student.gender ='ชาย'
// console.log(student.name)
// document.getElementById('output').innerText = student;

function addTable(index, student) {
    const tableBody = document.getElementById('tableBody')
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    cell.setAttribute('scope','row')
    cell.innerHTML = index
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.name
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.username
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.gender
    row.appendChild(cell)
    tableBody.appendChild(row)
}
 
window.addEventListener("load",function(e) {
    let counter = 1
    addTable(counter,student)
})