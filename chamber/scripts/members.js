
const membersSection = document.querySelector('#members');

const membersURL = "https://augustusyakana.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(membersURL);

    if (response.ok) {
        const data = await response.json();
        console.log(data.members);
        displayMembers(data.members);
    }
}

function displayMembers(members) {
    members.forEach((member) => {
        let card = document.createElement('div');
        card.classList.add('card');

        let company = document.createElement('h3').textContent = member.company;
        let name = document.createElement('p').textContent = `${member.firstname} ${member.lastname}`;
        let position = document.createElement('p').textContent = member.position;
        let department = document.createElement('p').textContent = `Chamber Dept: ${member.department}`;
        let ceoImg = document.createElement('img').setAttribute('src', member.photo)

        console.log(department);
    })
}

getMembers();