const generateResume = () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const website = (document.getElementById('website') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const github = (document.getElementById('github') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const aboutMe = (document.getElementById('about-me') as HTMLInputElement).value;
    const education1 = (document.getElementById('education1') as HTMLTextAreaElement).value;
    const education2 = (document.getElementById('education2') as HTMLTextAreaElement).value;
    const education3 = (document.getElementById('education3') as HTMLTextAreaElement).value;
    const workExperience1 = (document.getElementById('work-experience1') as HTMLTextAreaElement).value;
    const workExperience2 = (document.getElementById('work-experience2') as HTMLTextAreaElement).value;
    const workExperience3 = (document.getElementById('work-experience3') as HTMLTextAreaElement).value;
    const skills1 = (document.getElementById('skills1') as HTMLTextAreaElement).value;
    const skills2 = (document.getElementById('skills2') as HTMLTextAreaElement).value;
    const skills3 = (document.getElementById('skills3') as HTMLTextAreaElement).value;
    const skills4 = (document.getElementById('skills4') as HTMLTextAreaElement).value;
    const skills5 = (document.getElementById('skills5') as HTMLTextAreaElement).value;
    const skills6 = (document.getElementById('skills6') as HTMLTextAreaElement).value;

    if(name && jobTitle && email && phone && address && aboutMe && education1 && workExperience1 && skills1) {

    (document.getElementById('resume-name') as HTMLHeadingElement).textContent = name;
    (document.getElementById('resume-job-title') as HTMLHeadingElement).textContent = jobTitle;
    (document.getElementById('resume-email') as HTMLParagraphElement).textContent = `Email: ${email}`;
    (document.getElementById('resume-phone') as HTMLParagraphElement).textContent = `Phone: ${phone}`;
    (document.getElementById('resume-website') as HTMLParagraphElement).textContent = `Website: ${website}`;
    (document.getElementById('resume-linkedin') as HTMLParagraphElement).textContent = `Linkedin: ${linkedin}`;
    (document.getElementById('resume-github') as HTMLParagraphElement).textContent = `Github: ${github}`;
    (document.getElementById('resume-address') as HTMLParagraphElement).textContent = `Address: ${address}`;
    (document.getElementById('resume-about-me') as HTMLParagraphElement).textContent = `${aboutMe}`;
    (document.getElementById('resume-education1') as HTMLParagraphElement).textContent = education1;
    (document.getElementById('resume-education2') as HTMLParagraphElement).textContent = education2;
    (document.getElementById('resume-education3') as HTMLParagraphElement).textContent = education3;
    (document.getElementById('resume-work-experience1') as HTMLParagraphElement).textContent = workExperience1;
    (document.getElementById('resume-work-experience2') as HTMLParagraphElement).textContent = workExperience2;
    (document.getElementById('resume-work-experience3') as HTMLParagraphElement).textContent = workExperience3;
    (document.getElementById('resume-skills1') as HTMLParagraphElement).textContent = skills1;
    (document.getElementById('resume-skills2') as HTMLParagraphElement).textContent = skills2;
    (document.getElementById('resume-skills3') as HTMLParagraphElement).textContent = skills3;
    (document.getElementById('resume-skills4') as HTMLParagraphElement).textContent = skills4;
    (document.getElementById('resume-skills5') as HTMLParagraphElement).textContent = skills5;
    (document.getElementById('resume-skills6') as HTMLParagraphElement).textContent = skills6;

    localStorage.setItem(`my-resume`, JSON.stringify({ name, jobTitle, email, phone, website, linkedin, github, aboutMe, education1, education2, education3, workExperience1, workExperience2, workExperience3, skills1, skills2, skills3, skills4, skills5, skills6 }));

    const uniqueUrl = `https://milestone-5-three.vercel.app/?username=my-resume`;
    (document.getElementById('share-link') as HTMLAnchorElement).href = uniqueUrl;
    (document.getElementById('share-link') as HTMLAnchorElement).textContent = uniqueUrl;
    document.getElementById('share-link-container')?.classList.remove('hidden');

    document.getElementById('resume')?.classList.remove('hidden');
    document.getElementById('resume-form-container')?.classList.add('hidden');
    // document.getElementById('resume-form')?.classList.add('hidden');
    }
    else {
        alert("Please fill all the required fields")
    }
};

const makeEditable = () => {
    const editableElements = document.querySelectorAll('.editable p');

    editableElements.forEach(element => {
        element.addEventListener('input', (event) => {
            const target = event.target as HTMLElement;
            const section = target.closest('.editable')?.getAttribute('data-section');
            if (section) {
                localStorage.setItem(section, target.textContent || '');
            }
        });

        const section = element.closest('.editable')?.getAttribute('data-section');
        if (section) {
            const savedContent = localStorage.getItem(section);
            if (savedContent) {
                element.textContent = savedContent;
            }
        }
    });
};

const downloadPDF = () => {
    window.print()
};
const sharePage = () => {
    const shareButton = document.getElementById('share-page') as HTMLButtonElement;
    const pageUrl = window.location.href; 
    const pageTitle = document.title; 

    if (navigator.share) {
        navigator.share({
            title: pageTitle,
            url: pageUrl
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch((error) => {
            console.log('Error sharing:', error);
        });
    } else {
        alert('Share functionality is not supported on this browser.');
    }
};

// Add event listeners to buttons
const generateButton = document.getElementById('generate-resume');
const downloadButton = document.getElementById('download-pdf');
const shareButton = document.getElementById('share-page');

if (generateButton) {
    generateButton.addEventListener('click', () => {
        generateResume();
        makeEditable();
    });
}


if (downloadButton) {
    downloadButton.addEventListener('click', downloadPDF);
}

if (shareButton) {
    shareButton.addEventListener('click', sharePage);
}
document.addEventListener('DOMContentLoaded', makeEditable);
