let profiles = [
    {
        username: 'Ammar',
        gender : 'Male',
        age: 24,
        birthday: '09 February 1990',
    },
    {
        username: 'Mohammad',
        gender : 'Male',
        age: 24,
        birthday: '08 May 1990',
    },
    {
        username: 'Majd',
        gender : 'Female',
        age: 24,
        birthday: '09 May 1990',
    },
    {
        username: 'Yaso',
        gender : 'Female',
        age: 24,
        birthday: '09 May 1990',
    }
]

let profilesContainer = document.getElementById("birthday__profile-container");
let currentDate = new Date ();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();

console.log(month);
console.log(day);
console.log(currentDate);
// console.log(typeof currentDate.toLocaleDateString());

let counter = 0;
for(let profile of profiles) {
    let birthday = profile.birthday.split(" ");
    
    if (birthday[0] == day) {
        //way 1
        counter++;
        profilesContainer.innerHTML +=` <div class="birthday__profile">
        <img src="${setProfileImage(profile.gender)}" alt="">
        <div class="birthday__info">
            <p>${profile.username}</p>
            <p>${profile.age}</p>
        </div>
    </div>`
    }
}
document.getElementById("dayCounter").innerHTML = `${counter} birthdays today`;
function setProfileImage (gender) {
    let number = Math.floor(Math.random() * 3) + 1;
    
    if (gender == "Male") {
        return `assets/img/male-${number}.png`
    }
    else {
        return `assets/img/female-${number}.png`
    }
}

function calcAge(CurrentYear , userYear) {
    return CurrentYear - userYear
}

function clear () {
    let cards = document.getElementById("birthday__profile-container").innerHTML = "";
    counter = 0;
    document.getElementById("dayCounter").innerHTML = `${counter} birthdays today`;
}

document.getElementById("btn__clear").onclick = clear;