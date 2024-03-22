
const membersSection = document.querySelector('#members');

const membersURL = "https://augustusyakana.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(membersURL);

    if (response.ok) {
        const data = await response.json();
        // console.log(data.members);
        displayMembers(data.members);
    }
}

function displayMembers(members) {

    members.forEach((member) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const contactInfo = document.createElement('div');
        contactInfo.classList.add('contactInfo');
        const companyInfo = document.createElement('div');
        companyInfo.classList.add('companyInfo');
        const membershipInfo = document.createElement('div');
        membershipInfo.classList.add('memberInfo');
        const personalInfo = document.createElement('div');
        personalInfo.classList.add('personalInfo');

        let company = document.createElement('h3').textContent = member.company;
        let name = document.createElement('p').textContent = `${member.firstname} ${member.lastname}`;
        let position = document.createElement('p').textContent = `Chamber Position: ${member.position}`;
        let department = document.createElement('p').textContent = `Chamber Dept: ${member.department}`;
        let ceoImg = document.createElement('img').setAttribute('src', member.photo);
        let membership = document.createElement('p').textContent = `${member.membership} Member`;
        let email = document.createElement('p').textContent = `Email: ${member.email}`;
        let phone = document.createElement('p').textContent = `Phone: ${member.phone}`;
        let companyEmail = document.createElement('p').textContent = `Company Email: ${member.companyEmail}`;

        personalInfo.appendChild(name);
        contactInfo.appendChild(phone);
        contactInfo.appendChild(email);
        companyInfo.appendChild(company);
        companyInfo.appendChild(companyEmail);
        membershipInfo.appendChild(position);
        membershipInfo.appendChild(department);
        membershipInfo.appendChild(membership);

        card.appendChild(companyInfo);
        card.appendChild(membershipInfo);
        card.appendChild(personalInfo);
        card.appendChild(ceoImg);

        membersSection.appendChild(card);
    })
}

getMembers();