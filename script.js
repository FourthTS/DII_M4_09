// function onLoad() {
//     fetch('https://dv-student-backend-2019.appspot.com/students').then(response => {
//         return response.json()
//     }).then(data => {
//         let students = data
//         addStudentList(students)
//     })
// }
function onLoad(){
    // student = {
    //     name: "Fourth",
    //     surname : "Tanachard",
    //     studentId : "642110317",
    //     gpa:"1.00",
    //     image:"https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-1/264617009_3104370826486387_8707539062872234591_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFx-TQLL4UjG2LLTOjxxSaAEbWKivqOfoMRtYqK-o5-g_h8fyQtp85dFE_5WufW9wzROzi3l1z9U89oKXwyuh72&_nc_ohc=jF_C8aVJt3YAX8jU5wV&_nc_ht=scontent.fbkk10-1.fna&oh=00_AT9SatLS2IntOz0x25q40EDfutLs2_F-BwkvxRppKX7CCQ&oe=62901B55"
    // }
    //     deleteStudent()
        showAllStudent()
}
function showAllStudent(){
    fetch('https://dv-student-backend-2019.appspot.com/students')
    .then((response) => {
        return response.json()
    }).then(data =>{
        addStudentList(data)
    })
}
function onAddStudentClick() {
    let student ={}
    student.name = document.getElementById('nameInput').value
    student.surname = document.getElementById('surnameInput').value
    student.studentId = document.getElementById('studentIdInput').value
    student.gpa = document.getElementById('gpaInput').value
    student.image = document.getElementById('imageLinkInput').value
    addStudentToDB('student')
}
function addStudentList(studentList) {
    let counter = 1
    for (student of studentList) {
        addStudentToTable(counter++, student)
    }
}
function addStudentToDB(student){
    fetch('https://dv-student-backend-2019.appspot.com/students',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    }).then(response => {
        return response.json()
    }).then(response => {
        if(response.status === 200){
            return response.json()
        }else{
            throw Error (response.statusText)
        }
    }).then(data =>{
        console.log('success', data)
        showAllStudent()
    })
}

function addStudentData(student){
    let idElem = document.getElementById('id')
    idElem.innerHTML = student.id
    let studentIdElem = document.getElementById('studentId')
    studentIdElem.innerHTML = student.studentId
    let nameElem = document.getElementById('name')
    nameElem.innerHTML = `${student.name} ${student.surname}`
    let gpaElem = document.getElementById('gpa')
    gpaElem.innerHTML = student.gpa
    let profileElem = document.getElementById('image')
    profileElem.setAttribute('src', student.image)
}

function deleteStudent(id){
    fetch(`https://dv-student-backend-2019.appspot.com/student/${id}`,{
        method: 'DELETE'
    }).then(response =>{
        if(response.status === 200){
            return response.json()
        }else{
            throw Error (response.statusText)
        }
    }).then(data =>{
        alert(`student name ${data.name} is now deleted`)
        showAllStudent()
    })
}

function addStudentToTable(index, student) {
    const tableBody = document.getElementById('tableBody')
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    cell.setAttribute('scope', 'row')
    cell.innerHTML = index
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = `${student.name} ${student.surname}`
    row.appendChild(cell)
    cell = document.createElement('td')
    let someDiv = document.createElement('div')
    cell.appendChild(someDiv)
    let imgElem = document.createElement('img')
    someDiv.appendChild(imgElem)
    imgElem.setAttribute('src', student.image)
    imgElem.style.width = '150px'
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.gender
    row.appendChild(cell)
    cell = document.createElement('td')
    let button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.classList.add('btn')
    button.classList.add('btn-danger')
    button.innerText = 'delete'
    button.addEventListener('click',function(){ 
        let ok = confirm(`ท่านต้องการลบ ${student.name} หรือไม่`)
       if(ok){
            deleteStudent(student.id)
       }
    })

    row.appendChild(button)
    row.appendChild(cell)
    row.appendChild(cell)
    tableBody.appendChild(row)
}

document.getElementById('searchButton').addEventListener('click',()=>{
    let id = document.getElementById('inputText').value
    console.log('id')
    fetch(`https://dv-student-backend-2019.appspot.com/student/${id}`).then(response=>{
        return response.json()
    }).then(student=>{
        addStudentData(student)
    })
})