document.addEventListener('DOMContentLoaded', () => {
  const handleSubmit = event => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);
    console.log(myForm);
    console.log(formData.get("email"));

    var substackURL = "https://oquereluz.substack.com/api/v1/free?email=" + encodeURIComponent(formData.get("email"));
    console.log(substackURL);

    fetch(substackURL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
      .then(response => {
        if (response.ok) {
          console.log("deu tudo certo, veja lá");
        } else {
          console.log("algo deu errado, tem que ver lá");
        }
      })
      .catch(error => {
        console.log("algo deu muito errado :(");
      });
    //     const modal = document.querySelector("#modal-contact-form-success")
    //     if (modal) {
    //       modal.classList.add("is-active");
    //       modal.addEventListener("click", event => {
    //         if (event.target.classList.contains("modal-background") || 
    //             event.target.classList.contains("modal-close")) {
    //             modal.classList.remove("is-active");
    //         }
    //       });
    //     }
    //   })
    //   .catch(error => alert(error));
  }; 

  document.getElementById("newsletter-form").addEventListener("submit", handleSubmit);
});
