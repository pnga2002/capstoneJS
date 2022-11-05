var token_cybersoft = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.u471oZWr9EMgIb7oeyuaxfi8spgAgUuTkUHYSS9pBWg';
function Employ(){
    this.email = '';
    this.password='';
    this.name='';
    this.gender = '';
    this.phone = '';
    
}

document.querySelector('#btnSubmit').onclick = function (){
    var emp = new Employ();
    emp.email = document.querySelector('#email').value;
    emp.password = document.querySelector('#password').value;
    emp.name = document.querySelector('#name').value;
    emp.phone = document.querySelector('#phone').value;
    // lay ra gia tri gioi tinh
    let male = document.querySelector('#male').checked;
    let female = document.querySelector('#female').checked;
    if(male=== true){
        emp.gender=true;
    }else{
        emp.gender=false;
    }
    var promise = axios({
        url :  `https://shop.cyberlearn.vn/api/Users/signup`,
        method:'POST',
        headers:{
            TokenCybersoft: token_cybersoft
        },
        data:emp
    })
    promise.then(function(res){
        console.log(res.data);
        alert('Dang Ky Thanh Cong')
    })
    promise.catch(function(err){
        console.log(err)
    })
}
