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
      .then(() => {
        console.log("Form successfully submitted");
        const modal = document.querySelector("#modal-newsletter-form-success")
        if (modal) {
          modal.classList.add("is-active");
          modal.addEventListener("click", event => {
            if (event.target.classList.contains("modal-background") || 
                event.target.classList.contains("modal-close")) {
                modal.classList.remove("is-active");
            }
          });
        }
      })
      .catch(error => alert(error));
  };

  document.getElementById("newsletter-form").addEventListener("submit", handleSubmit);
});
