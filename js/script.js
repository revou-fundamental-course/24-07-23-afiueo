
const validateEmail = email => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(email.match(regex)){
    return true;
  }

  return false;
};

const submitForm = () => {
  const form = document.getElementById("contact-form");

  form.addEventListener('submit', e => {

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const interest = document.querySelector("#interest").value;
    
    const feedback = document.createElement("p");
    feedback.innerHTML = "";
    feedback.style.color = '#FF8DA0';
    feedback.style.margin = '0';

    if(!name) {
      feedback.innerHTML = "Mohon isi kolom nama";     
    } else if (!email) {
      feedback.innerHTML = "Mohon isi kolom email";
    } else if (!validateEmail(email)) {
      feedback.innerHTML = "Format email tidak tepat";
    } else if(!interest) {
      feedback.innerHTML = "Opsi tidak valid";
    } else {
      feedback.innerHTML = "Data berhasil dikirim!";
      feedback.style.color = '#232323';
    }

    console.log(form.querySelector("p"));

    if(form.children.length == 4) {
      form.appendChild(feedback);
    } else {
      const update = form.querySelector("p");
      update.innerHTML = feedback.innerHTML;
      update.style.color = feedback.style.color;
    }

    e.preventDefault();

  });
};

const bannerSlide = () => {
  const slideItems = document.querySelectorAll(".banner-item"); 
  let i = 1;

  setInterval(() => {
    Array.from(slideItems).forEach((item, index) => {
      if(i < slideItems.length){
        item.style.transform = `translateX(-${i*100}%)`
      }
    })
    
    if (i < slideItems.length) {
      i++;
    } else {
      i = 0;
    }
  }, 3000)
};

document.addEventListener('DOMContentLoaded', e => {
  submitForm();
  bannerSlide();
});