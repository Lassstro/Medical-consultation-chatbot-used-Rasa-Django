const patientsTable = document.querySelector('#patients-table tbody');

fetch('http://127.0.0.1:8000/healthRecord/patients/', {
    method: 'GET'
})
.then(response => response.json())
.then(data => {
    data.forEach((patient, index) => {
        const patientHTML = `
            <tr>
                <th>${index}</th>
                <td>${patient.ss_code}</td>
                <td>${patient.full_name}</td>
                <td>${patient.sex}</td>
                <td>${patient.birth_day}</td>
                <td>${patient.address}</td>
                <td>${patient.primary_healthcare}</td>
                <td>${patient.first_date_use}</td>
                <td>${patient.last_date_use}</td>
            </tr>
        `
        patientsTable.insertAdjacentHTML("beforeend",patientHTML)
    })
})
.catch(error => console.error(error));

a = {
    "ss_code": "QN5989877845",
    "full_name": "Hoàng Anh",
    "sex": "F",
    "birth_day": "2011-11-11",
    "address": "P Cổ Nhuế 3, Bắc Từ Liêm, TP Hà Nội",
    "primary_healthcare": "Học viện Kỹ thuật Mật mã",
    "first_date_use": "2222-12-12",
    "last_date_use": "2222-02-22"
}

const btn_post = document.querySelector(".btn-post-patient")
btn_post.addEventListener('click', event => postPatients(a))

function postPatients(requestText) {
    fetch('patients/', {
        method: 'POST',
        credentials: "same-origin",
        headers: {
          "X-CSRFToken": getCookie("csrftoken"),
          "Accept": "application/json",
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestText)
    })
    
}
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}