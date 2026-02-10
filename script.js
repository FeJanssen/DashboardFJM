// Project Data
const projectsData = {
    thunbier: {
        title: "Thunbier",
        category: "Packaging Design",
        image: "Assets/Thunbier.jpeg",
        description: "Für die traditionsreiche Brauerei Thunbier haben wir ein komplett neues Flaschendesign entwickelt.",
        details: [
            "Komplette Neugestaltung des Flaschendesigns",
            "Moderne Interpretation traditioneller Braukunst",
            "Erhöhte Markenwahrnehmung am Point of Sale",
            "Positives Kundenfeedback und gesteigerter Absatz"
        ],
        result: "Das neue Design verbindet Tradition mit Moderne und hat die Marke Thunbier erfolgreich im Markt repositioniert."
    },
    landgartenschau: {
        title: "Landgartenschau",
        category: "Event Marketing",
        pdf: "Assets/Landgartenschau.pdf",
        description: "Für die Landgartenschau-Ausstellung haben wir eine umfassende Flyer-Kampagne entwickelt, um eine neue Brücke vorzustellen.",
        details: [
            "Entwicklung ansprechender Informationsflyer",
            "Vorstellung einer neuen Brücke auf der Ausstellung",
            "Über 20.000 begeisterte Besucher erreicht",
            "Erfolgreiche Integration in das Gesamtkonzept der Ausstellung"
        ],
        result: "Die Kampagne erreichte über 20.000 Menschen und trug maßgeblich zum Erfolg der Ausstellung bei."
    },
    tsv: {
        title: "TSV Landsberg",
        category: "Social Media Management",
        image: "Assets/TSVLandsberg.png",
        description: "Als Social Media Partner des TSV Landsberg betreuen wir sämtliche Social-Media-Kanäle des Sportvereins.",
        details: [
            "Komplette Social Media Betreuung",
            "Content-Erstellung für alle Kanäle",
            "Community Management",
            "Erhöhung der Reichweite und Engagement-Rate",
            "Regelmäßige Berichterstattung über Vereinsaktivitäten"
        ],
        result: "Durch unsere Arbeit konnte der TSV Landsberg seine Online-Präsenz deutlich steigern und eine aktivere Community aufbauen."
    },
    acs: {
        title: "ACS",
        category: "Logo Design & Branding",
        image: "Assets/ACS.svg",
        description: "Für ACS haben wir ein modernes Logo entwickelt, das nun auf mehreren Flugzeugen zu sehen ist.",
        details: [
            "Entwicklung eines neuen Corporate Logos",
            "Moderne und professionelle Gestaltung",
            "Implementierung auf verschiedenen Flugzeugen",
            "Komplettes Branding-Konzept",
            "Internationale Sichtbarkeit"
        ],
        result: "Das neue ACS-Logo ist nun auf mehreren Flugzeugen vertreten und sorgt für internationale Markenpräsenz."
    },
    restaurant: {
        title: "Restaurant",
        category: "Print Design",
        pdf: "Assets/Restaurent.pdf",
        description: "Wir haben eine neue Speisekarte und Flyer für ein Restaurant gestaltet, die zu einer erheblichen Umsatzsteigerung führten.",
        details: [
            "Neugestaltung der Speisekarte",
            "Design ansprechender Werbeflyer",
            "Optimierung der Produktpräsentation",
            "Professionelles Layout und hochwertige Optik",
            "Messbare Umsatzsteigerung nach Einführung"
        ],
        result: "Die neue Speisekarte und die Flyer haben den Umsatz des Restaurants erheblich gesteigert und das Kundenerlebnis verbessert."
    },
    millionen: {
        title: "Millionen Exposé",
        category: "Immobilien Marketing",
        pdf: "Assets/Millionen Expose.pdf",
        description: "Für eine Immobilienagentur haben wir ein hochwertiges Exposé erstellt, das zum schnellen Verkauf einer millionenschweren Landhaus-Villa führte.",
        details: [
            "Erstellung eines Premium-Exposés",
            "Professionelle Präsentation einer Luxus-Villa",
            "Hochwertige Aufbereitung aller Informationen",
            "Zielgruppengerechte Ansprache",
            "Verkauf innerhalb von nur 2 Wochen"
        ],
        result: "Dank unseres Exposés wurde die millionenschwere Landhaus-Villa innerhalb von nur 2 Wochen erfolgreich verkauft."
    },
    csb: {
        title: "CSB Banner",
        category: "Sponsoring Design",
        image: "Assets/CSB Banner.png",
        description: "Für CSB, eine der größten Software-Firmen Europas, haben wir ein riesiges Sponsoring-Banner gestaltet.",
        details: [
            "Design eines großformatigen Sponsoring-Banners",
            "Für eine der größten Software-Firmen Europas",
            "Hohe Sichtbarkeit bei Events",
            "Professionelle Markenpräsentation",
            "Erfolgreiche Umsetzung im Großformat"
        ],
        result: "Das Banner repräsentiert CSB professionell bei großen Events und sorgt für maximale Sichtbarkeit der Marke."
    },
    "csb-website": {
        title: "CSB System SE",
        category: "Web Development",
        description: "Komplette Gestaltung der Website für CSB System SE inklusive der innovativen Virtual Meat Factory.",
        details: [
            "Entwicklung und Design der Unternehmenswebsite",
            "Integration der Virtual Meat Factory",
            "Moderne, benutzerfreundliche Oberfläche",
            "Responsive Design für alle Geräte",
            "Optimierte User Experience",
            "Professionelle Präsentation komplexer Softwarelösungen"
        ],
        result: "Die neue Website präsentiert CSB System SE als führenden Anbieter von Branchensoftware und die Virtual Meat Factory als innovative Lösung für die Fleischindustrie."
    },
    vespa: {
        title: "Vespa Cristian 46",
        category: "Web Development",
        description: "Entwicklung und Integration eines innovativen Website-Konfigurators für Vespa Cristian 46.",
        details: [
            "Programmierung eines interaktiven Produkt-Konfigurators",
            "Intuitive Benutzeroberfläche",
            "Echtzeit-Visualisierung der Konfiguration",
            "Nahtlose Integration in die bestehende Website",
            "Optimierung der Customer Journey",
            "Steigerung der Conversion-Rate"
        ],
        result: "Der Konfigurator ermöglicht Kunden eine individuelle Produktgestaltung und hat die User Experience sowie die Verkaufszahlen deutlich verbessert."
    },
    "jkb-hotel": {
        title: "JKB Hotelsoftware",
        category: "Software Development",
        description: "Entwicklung einer umfassenden Hotelverwaltungssoftware für JKB Software.",
        details: [
            "Programmierung einer maßgeschneiderten Hotelsoftware",
            "Buchungsverwaltung und Zimmerdisposition",
            "Gästeverwaltung und Check-in/Check-out System",
            "Rechnungsstellung und Zahlungsabwicklung",
            "Reporting und Statistiken",
            "Intuitive Benutzeroberfläche für Hotelpersonal"
        ],
        result: "Die Software optimiert sämtliche Hotelabläufe und steigert die Effizienz in der Hotelverwaltung erheblich."
    },
    "jkb-platz": {
        title: "JKB Platzbuchungssoftware",
        category: "Software Development",
        description: "Entwicklung einer intelligenten Platzbuchungssoftware für JKB Software.",
        details: [
            "Programmierung einer flexiblen Buchungslösung",
            "Übersichtliche Platz- und Ressourcenverwaltung",
            "Echtzeit-Verfügbarkeitsanzeige",
            "Automatisierte Buchungsbestätigungen",
            "Kalenderintegration und Zeitslot-Verwaltung",
            "Benutzerfreundliches Admin-Panel"
        ],
        result: "Die Platzbuchungssoftware vereinfacht die Verwaltung von Ressourcen und Buchungen und spart Zeit im täglichen Betrieb."
    },
    "restaurant-app": {
        title: "Restaurant Reservierungs-App",
        category: "App Development",
        description: "Entwicklung einer mobilen App für Tischreservierungen und Essensvorbestellungen.",
        details: [
            "Native App-Entwicklung für iOS und Android",
            "Tischreservierung mit Echtzeit-Verfügbarkeit",
            "Digitale Speisekarte mit Essensvorbestellung",
            "Push-Benachrichtigungen für Bestätigungen",
            "Integriertes Bezahlsystem",
            "Kundenprofil mit Bestellhistorie",
            "Benutzerfreundliches Interface"
        ],
        result: "Die App revolutioniert das Restauranterlebnis, reduziert Wartezeiten und steigert die Kundenzufriedenheit sowie den Umsatz."
    },
    "season-of-sounds": {
        title: "Season of Sounds",
        category: "Event Marketing",
        image: "Assets/Seasonofsounds.JPG",
        description: "Für das Season of Sounds Festival haben wir kreative Flyer zur Vermarktung gestaltet.",
        details: [
            "Gestaltung von Festival-Flyern",
            "Kreatives Design für Event-Marketing",
            "Zielgruppengerechte Gestaltung",
            "Hochwertige Druckvorlagen",
            "Effektive Vermarktungsstrategie",
            "Steigerung der Besucherzahlen"
        ],
        result: "Die Flyer-Kampagne hat erfolgreich zur Vermarktung des Season of Sounds Festivals beigetragen und die Besucherzahlen gesteigert."
    }
};

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Open Modal
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectsData[projectId];

    let imageContent = '';
    if (project.image) {
        imageContent = `<img src="${project.image}" alt="${project.title}" class="modal-image">`;
    }

    let pdfLink = '';
    if (project.pdf) {
        pdfLink = `<a href="${project.pdf}" target="_blank" class="pdf-link">📄 PDF ansehen</a>`;
    }

    const detailsList = project.details.map(detail => `<li>${detail}</li>`).join('');

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <p class="modal-category">${project.category}</p>
        </div>
        ${imageContent}
        <div class="modal-body-content">
            <p><strong>${project.description}</strong></p>
            <h3>Details:</h3>
            <ul>
                ${detailsList}
            </ul>
            <h3>Ergebnis:</h3>
            <p>${project.result}</p>
            ${pdfLink}
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });

    // Add staggered animation delay
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString('de-DE') + (element.dataset.suffix || '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString('de-DE') + (element.dataset.suffix || '');
        }
    }, 16);
}

// Animate stats when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target;
            const targetText = statNumber.textContent;
            let target = 0;
            
            if (targetText.includes('+')) {
                target = parseInt(targetText.replace(/[^0-9]/g, ''));
                statNumber.dataset.suffix = '+';
            } else if (targetText.includes('%')) {
                target = parseInt(targetText.replace(/[^0-9]/g, ''));
                statNumber.dataset.suffix = '%';
            } else {
                target = parseInt(targetText.replace(/[^0-9]/g, ''));
            }
            
            statNumber.textContent = '0';
            animateCounter(statNumber, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => statsObserver.observe(stat));
});
