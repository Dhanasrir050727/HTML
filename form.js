const f=document.getElementById("forms");
f.addEventListener('submit',(e)=>{
    e.preventDefault();
    const fn=document.getElementById('fname').value;
    const ln=document.getElementById('lname').value;
    const gen=document.getElementById('gender').value;
    const age=document.getElementById('age').value;
    const dob=document.getElementById('day').value;
    const ph=document.getElementById('phone').value;
    const em=document.getElementById('email').value;
    const ad=document.getElementById('add').value;
    if(fn=="" || ln=="" || gen=="" || age=="" || dob=="" || ph=="" || em=="" || ad==""){
        alert("All fields are required");
        return;
    }
    else{
        alert("Form Submitted Successfully");
        f.reset();
    }
    localStorage.setItem('fname',fn);
    localStorage.setItem('lname',ln);
    localStorage.setItem('gender',gen);
    localStorage.setItem('age',age);
    localStorage.setItem('dob',dob);
    localStorage.setItem('phone',ph);
    localStorage.setItem('email',em);
    localStorage.setItem('address',ad);
    window.location.href="form1.html";
});