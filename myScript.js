const form = document.querySelector("#userinfo");

async function sendData() {

    // Associate the FormData object with the form element
    const formData = new FormData(form);

    try {
        const response = await fetch("https://www.instagram.com/", {
            method: "POST",
            // Set the FormData instance as the request body
            body: formData,
        });
        console.log(await response.json());
    } catch (e) {
        console.error(e);
    }
}

// Take over form submission
form.addEventListener("submit", (event) => {
    cono
    event.preventDefault();
    sendData();
});
