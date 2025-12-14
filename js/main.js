document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Collapsible sections (accordion)
const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach(collapsible => {
    const trigger = collapsible.querySelector('.collapsible-trigger');

    trigger.addEventListener('click', () => {
        // Close all other collapsibles
        collapsibles.forEach(otherCollapsible => {
            if (otherCollapsible !== collapsible) {
                otherCollapsible.classList.remove('active');
            }
        });

        // Toggle the clicked collapsible
        collapsible.classList.toggle('active');
    });
});

// Scroll animations
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 150) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

const generatePdf = () => {
    const element = document.getElementById('main-content');
    const opt = {
        margin:       1,
        filename:     'Ronie_Martinez_CV.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
};

document.getElementById('download-cv-btn').addEventListener('click', generatePdf);
