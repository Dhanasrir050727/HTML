const f=document.getElementById('loginform');
f.addEventListener('submit',(e)=>{
    e.preventDefault();
    const n=document.getElementById('name').value;
    const p=document.getElementById('pass').value;
    if(n == "" || p == ""){
        alert("All fields are required");
        return;
    }
    else{
        alert("Login Successful");
        f.reset();
    }
    localStorage.setItem('name',n);
    localStorage.setItem('pass',p);
    window.location.href="login1.html";
    window.prompt("Welcome "+n);
});
