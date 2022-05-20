var student ={}
student.name ='คุณลุง'
student.username = 'a@b.com'
student.gender ='ชาย'

var secondStudent ={}
secondStudent.name ='ไอโอ'
secondStudent.username = 'IO@b.com'
secondStudent.gender ='ชาย'

var students =[
    student,
    secondStudent,
    {
        name :'วิด',
        username : 'IO@b.com',
        gender :'ชาย'
    }
    
]

function addTable(index, IP) {
    const tableBody = document.getElementById('tableBody')
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    cell.setAttribute('scope','row')
    cell.innerHTML = index
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = IP.name
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = IP.username
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = IP.gender
    row.appendChild(cell)
    tableBody.appendChild(row)
}
 

function addStudentList(StudentList){
    let counter = 1
    for (student of StudentList){
        addTable(counter++,student)
    }
}
window.addEventListener("load",function(e) {
    addStudentList(students)
})