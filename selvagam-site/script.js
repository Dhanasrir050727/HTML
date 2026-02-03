// small script for nav and admissions
document.addEventListener('DOMContentLoaded',()=>{
  const burger = document.getElementById('navToggle');
  if(burger){
    const ul = document.getElementById('mainNav');
    burger.setAttribute('aria-controls','mainNav');
    burger.setAttribute('aria-expanded','false');
    burger.addEventListener('click',()=>{
      const isOpen = ul.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(!!isOpen));
    });
  }

  const form = document.getElementById('admissionForm');
  if(form){form.addEventListener('submit',e=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const subs = JSON.parse(localStorage.getItem('school_admissions')||'[]');
    subs.push({...data,submittedAt:new Date().toISOString()});
    localStorage.setItem('school_admissions', JSON.stringify(subs));
    alert('Application saved locally.');
    form.reset();
  })}

  const contact = document.getElementById('contactForm');
  if(contact){
    contact.addEventListener('submit', e=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(contact).entries());
      const list = JSON.parse(localStorage.getItem('school_contacts')||'[]');
      list.push({...data, submittedAt: new Date().toISOString()});
      localStorage.setItem('school_contacts', JSON.stringify(list));
      alert('Thank you — your message has been saved. We will contact you soon.');
      contact.reset();
    });
  }
});