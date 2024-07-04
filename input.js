const btn = document.getElementById("sub_btn");
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  Submit();
});

function Submit() {
  var parameters = {
    name: document.getElementById('name').value,
    email: document.getElementById('Email').value,
    phone: document.getElementById('Phone').value,
    room_type: document.getElementById('Room-type').value,
    message: document.getElementById('Message').value,
  };

  const serviceID = 'service_at7gs1c';
  const templateID = 'template_jho6yxc';


  emailjs.send(serviceID, templateID, parameters)
    .then(res => {
      document.getElementById('name').value = "";
      document.getElementById('Email').value = "";
      document.getElementById('Phone').value = "";
      document.getElementById('Room-type').value = "";
      document.getElementById('Message').value = "";
      
      console.log(res);
      alert("Your message sent successfully!!");
      alert(`Thank you ${parameters.name} for Booking. Hope to see you soon!!`);
    })
    .catch(err => console.log(err));
}