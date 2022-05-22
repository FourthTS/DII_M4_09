function onLoad() {
    fetch('https://dv-student-backend-2019.appspot.com/students').then(response => {
        return response.json()
    }).then(data => {
        let students = data
        console.log(data)
        addStudentList(students)
    })
}
function addStudentList(studentList) {
    let counter = 1
    for (student of studentList) {
        addStudentToTable(counter++, student)
    }
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
    cell.innerHTML = student.description
    row.appendChild(cell)
    tableBody.appendChild(row)
}
