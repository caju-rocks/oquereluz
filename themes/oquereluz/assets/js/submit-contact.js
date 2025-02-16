document.addEventListener('DOMContentLoaded', () => {
  const handleSubmit = event => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);
    console.log(myForm);
    console.log(formData);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => console.log("Form successfully submitted"))
      .catch(error => alert(error));
  };

  document.getElementById("contact-form").addEventListener("submit", handleSubmit);
});
