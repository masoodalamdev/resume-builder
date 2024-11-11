var generateResume = function () {
    var _a, _b, _c;
    var name = document.getElementById('name').value;
    var jobTitle = document.getElementById('job-title').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var website = document.getElementById('website').value;
    var linkedin = document.getElementById('linkedin').value;
    var github = document.getElementById('github').value;
    var address = document.getElementById('address').value;
    var aboutMe = document.getElementById('about-me').value;
    var education1 = document.getElementById('education1').value;
    var education2 = document.getElementById('education2').value;
    var education3 = document.getElementById('education3').value;
    var workExperience1 = document.getElementById('work-experience1').value;
    var workExperience2 = document.getElementById('work-experience2').value;
    var workExperience3 = document.getElementById('work-experience3').value;
    var skills1 = document.getElementById('skills1').value;
    var skills2 = document.getElementById('skills2').value;
    var skills3 = document.getElementById('skills3').value;
    var skills4 = document.getElementById('skills4').value;
    var skills5 = document.getElementById('skills5').value;
    var skills6 = document.getElementById('skills6').value;
    if (name && jobTitle && email && phone && address && aboutMe && education1 && workExperience1 && skills1) {
        document.getElementById('resume-name').textContent = name;
        document.getElementById('resume-job-title').textContent = jobTitle;
        document.getElementById('resume-email').textContent = "Email: ".concat(email);
        document.getElementById('resume-phone').textContent = "Phone: ".concat(phone);
        document.getElementById('resume-website').textContent = "Website: ".concat(website);
        document.getElementById('resume-linkedin').textContent = "Linkedin: ".concat(linkedin);
        document.getElementById('resume-github').textContent = "Github: ".concat(github);
        document.getElementById('resume-address').textContent = "Address: ".concat(address);
        document.getElementById('resume-about-me').textContent = "".concat(aboutMe);
        document.getElementById('resume-education1').textContent = education1;
        document.getElementById('resume-education2').textContent = education2;
        document.getElementById('resume-education3').textContent = education3;
        document.getElementById('resume-work-experience1').textContent = workExperience1;
        document.getElementById('resume-work-experience2').textContent = workExperience2;
        document.getElementById('resume-work-experience3').textContent = workExperience3;
        document.getElementById('resume-skills1').textContent = skills1;
        document.getElementById('resume-skills2').textContent = skills2;
        document.getElementById('resume-skills3').textContent = skills3;
        document.getElementById('resume-skills4').textContent = skills4;
        document.getElementById('resume-skills5').textContent = skills5;
        document.getElementById('resume-skills6').textContent = skills6;
        localStorage.setItem("my-resume", JSON.stringify({ name: name, jobTitle: jobTitle, email: email, phone: phone, website: website, linkedin: linkedin, github: github, aboutMe: aboutMe, education1: education1, education2: education2, education3: education3, workExperience1: workExperience1, workExperience2: workExperience2, workExperience3: workExperience3, skills1: skills1, skills2: skills2, skills3: skills3, skills4: skills4, skills5: skills5, skills6: skills6 }));
        var uniqueUrl = "https://milestone-5-three.vercel.app/?username=my-resume";
        document.getElementById('share-link').href = uniqueUrl;
        document.getElementById('share-link').textContent = uniqueUrl;
        (_a = document.getElementById('share-link-container')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
        (_b = document.getElementById('resume')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
        (_c = document.getElementById('resume-form-container')) === null || _c === void 0 ? void 0 : _c.classList.add('hidden');
        // document.getElementById('resume-form')?.classList.add('hidden');
    }
    else {
        alert("Please fill all the required fields");
    }
};
var makeEditable = function () {
    var editableElements = document.querySelectorAll('.editable p');
    editableElements.forEach(function (element) {
        var _a;
        element.addEventListener('input', function (event) {
            var _a;
            var target = event.target;
            var section = (_a = target.closest('.editable')) === null || _a === void 0 ? void 0 : _a.getAttribute('data-section');
            if (section) {
                localStorage.setItem(section, target.textContent || '');
            }
        });
        var section = (_a = element.closest('.editable')) === null || _a === void 0 ? void 0 : _a.getAttribute('data-section');
        if (section) {
            var savedContent = localStorage.getItem(section);
            if (savedContent) {
                element.textContent = savedContent;
            }
        }
    });
};
var downloadPDF = function () {
    window.print();
};
var sharePage = function () {
    var shareButton = document.getElementById('share-page');
    var pageUrl = window.location.href;
    var pageTitle = document.title;
    if (navigator.share) {
        navigator.share({
            title: pageTitle,
            url: pageUrl
        }).then(function () {
            console.log('Thanks for sharing!');
        }).catch(function (error) {
            console.log('Error sharing:', error);
        });
    }
    else {
        alert('Share functionality is not supported on this browser.');
    }
};
// Add event listeners to buttons
var generateButton = document.getElementById('generate-resume');
var downloadButton = document.getElementById('download-pdf');
var shareButton = document.getElementById('share-page');
if (generateButton) {
    generateButton.addEventListener('click', function () {
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
