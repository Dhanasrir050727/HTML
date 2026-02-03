const dobEl=document.getElementById('dob');
const btnEl=document.getElementById('btn');
const finalEl=document.getElementById('final');

function calAge() {
  const birth = dobEl.value;
  if (birth === "") {
    alert("Enter your birthday");
  } else {
    const age = getAge(birth);
    finalEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}