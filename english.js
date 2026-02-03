const name=['👉 If you can dream it, you can do it. — Walt Disney',
'👉 Do the best you can. No one can do more than that. — John Wooden', 
'👉 It is never too late to be what you might have been. — George Eliot', 
'👉 Keep your face always toward the sunshine, and shadows will fall behind you. — Unknown', 
'👉 Opportunities do not happen, you create them. — Chris Grosser'];
const button=document.getElementById('english');
const quote=document.getElementById('quotes');
button.addEventListener("click",()=>{
    const randomIndex = Math.floor(Math.random() * name.length);
    quote.textContent = name[randomIndex];
});