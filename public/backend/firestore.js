const db = firebase.firestore();

function addData(){
    let sponsorName = document.getElementById('sponsorName');
    let companyName = document.getElementById('companyName');
    let whatsappNo = document.getElementById('whatsappNo');
    let companyEmail = document.getElementById('companyEmail');
    let designation = document.getElementById('designation');
    let companyWebsite = document.getElementById('companyWebsite');
    let error = document.getElementById('error');
    let spinner = document.getElementById('spinner');
    let button = document.querySelector("button p");
    if (sponsorName.value || companyName.value || whatsappNo.value || companyEmail.value || designation.value || companyWebsite.value) {
        spinner.style.display = 'block';
        button.innerHTML = "Loading..."
        error.innerHTML = "";
        db.collection("Sponsors").doc(sponsorName.value).set({
            name: sponsorName.value,
            companyName: companyName.value,
            whatsappNo: whatsappNo.value,
            Email: companyEmail.value,
            designation: designation.value,
            website: companyWebsite.value,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        })
        .then(() => {
            error.innerHTML = "Message Sent!"
            spinner.style.display = "none";
            button.innerHTML = "Submit"
            document.querySelector("form").reset()
        })
        .catch((error) => {
            console.log(error.message);
            spinner.style.display = "none";
            button.innerHTML = "Submit"
        })
    }else{
        error.innerHTML = "Please Fill All The Input Fields!";
    }
}