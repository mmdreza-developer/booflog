let nameProfile = document.querySelector(".nameProfile");
let descriptoinProfile = document.querySelector(".contentBiographyProfile");
let changeName = document.querySelector(".changeEditNameProfile");
let changeBiography = document.querySelector(".changeEditBiographyProfile")
let btnEditProfile = document.querySelector("#btnEditProfile");

function editProfile(name, description) {
    changeName.value = name,
        changeBiography.value = description
}
editProfile(nameProfile.textContent, descriptoinProfile.textContent)
btnEditProfile.onclick = () => {
    nameProfile.textContent = changeName.value;
    descriptoinProfile.textContent = changeBiography.value;
}

let emailUser = document.querySelector(".emailUser")
let numberUser = document.querySelector(".mobileNumberUser")
let passUser = document.querySelector(".passwordUser")

let changeEmail = document.querySelector(".changeEditEmailUser")
let changeNumber = document.querySelector(".changeEditNumberUser")
let changePassword = document.querySelector(".changeEditPasswordUser")
let btnEditUser = document.querySelector("#btnEditUser")

function editSettingUser(email, number, password) {
    changeEmail.value = email,
        changeNumber.value = number,
        changePassword.value = password
}
editSettingUser(emailUser.textContent, numberUser.textContent, passUser.textContent)

btnEditUser.onclick = () => {
    emailUser.textContent = changeEmail.value;
    numberUser.textContent = changeNumber.value;
    passUser.textContent = changePassword.value;
}