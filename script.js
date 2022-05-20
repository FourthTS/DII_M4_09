var student ={};
student.name = 'คุณลุง'
student.username = 'a@b.com'
student.gender ='ชาย'
// console.log(student.name)
// document.getElementById('output').innerText = student;

function addRow(container,key,value) {
    const output = document.getElementById('output')
    let row = document.createElement('div')
    row.classList.add("row")
    let columnName = document.createElement('div')
    columnName.classList.add("col-1")
    columnName.classList.add("offset-1")
    columnName.innerHTML = key
    let columnValue = document.createElement('div')
    columnValue = document.createElement('row')
    columnValue.classList.add('col')
    columnValue.innerHTML= value
    row.appendChild(columnName)
    row.appendChild(columnValue)
    output.appendChild(row)
}
function addStudentData(student){
    const output = document.createElement('output')
    addRow(output,'ชื่อ',student.name)
    addRow(output,'username',student.username)
    addRow(output,'gender',student.gender)
}
var student =[
    student,
    secondStudent,
    {
        name :'ไอโอ',
        username :'ten@b.com',
        gender :'male'
    }
]
window.addEventListener("load",function(e) {
    addStudentData(student)
})