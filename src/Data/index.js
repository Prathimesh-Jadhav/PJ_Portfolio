import tracksy from '../assets/tracksy.avif'
import thali from '../assets/thali.avif'
import health from '../assets/health-policies.avif'
import cnc from '../assets/cnc.avif'
import nike from '../assets/nike.avif'

export const projects = [
    {
        id:1,
        title: "Tracksy",
        smallDescription: "A fullstack inventory management Platform for local shopkeepers.",
        github: "https://github.com/Prathimesh-Jadhav/Tracksy",
        projectLink: "https://tracksy-theta.vercel.app/",
        challenge: "Keeping track of available product quantities manually is inefficient and error-prone. Without real-time alerts, shopkeepers risk running out of stock and losing sales. Additionally, replenishment becomes reactive rather than proactive when there's no reliable prediction of product performance and demand trends.",
        solution: "Developed a smart inventory management system that provides real-time stock level updates, low-stock alerts, and predictive analytics based on past sales data. The system helps shopkeepers restock on time and make data-driven purchasing decisions, reducing both overstock and stockouts.",
        features: [
            "Automatic Generation of Replenishment list for each product",
            "Real Time alerts of finishing Products",
            "Sales and Revenue Analytics",
            "Responsive UI"
        ],
        techstack: ["React", "Node.js", "Express", "Tailwind CSS", "MongoDB"],
        image: tracksy
    },
    {
        id:2,
        title: "Buddy's Kitchen (FreeLance)",
        smallDescription: "A system for mess owners to track meals served and payments pending.",
        github: "https://github.com/username/meal-monitoring-app",
        projectLink: "https://buddyskitchen.vercel.app/",
        challenge: "Manual tracking of daily meals and calculating monthly payments was inefficient and error-prone.",
        solution: "Built a QR-based digital system that automates lunch count tracking, billing, and member management.",
        features: [
            "QR Code-based meal scanning",
            "Member-wise monthly lunch count",
            "Automated bill calculation",
            "Admin dashboard to know overview of meals and revenue",
        ],
        techstack: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS", "qrcode.react"],
        image: thali
    },
    {
        id:3,
        title: "Health Bridge",
        smallDescription: "A platform connecting hospitals and government officials to assist in real-time health policy decisions.",
        github: "https://github.com/Prathimesh-Jadhav/Health-Bridge",
        projectLink: "https://health-bridge-seven.vercel.app/",
        challenge: "Lack of real-time communication and structured data sharing between hospitals and health authorities.",
        solution: "Built a platform where hospitals upload patient data and officials use AI tools to generate data-driven health policies.",
        features: [
            "Role-based login (Doctor & Govt. Official)",
            "Hospital dashboard for uploading patient data",
            "Admin dashboard with policy assistant",
            "AI-powered insights for policy recommendations",
            "Secure and structured data visualization"
        ],
        techstack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Chart.js", "OpenAI API"],
        image: health
    },
    {
        id:4,
        title: "Powercon Electronics (Freelance)",
        smallDescription: "A company advertisement website.",
        github: "https://github.com/Prathimesh-Jadhav/Powercon",
        projectLink: "https://powercon.vercel.app/",
        challenge: "The company lacked an engaging online presence to effectively communicate its services, projects, and values. Traditional methods like brochures and social media posts were inconsistent and not scalable.",
        solution: "Developed a clean, modern, and responsive website to highlight the company's services, past projects, client testimonials, and contact information. Integrated smooth navigation.",
        features: [
            "Home, About, Services, and Contact sections",
            "Interactive project showcase/portfolio section",
            "Client testimonials and achievements section",
            "Contact form with email notifications",
            "Mobile-responsive"
        ],
        techstack: ["React", "Tailwind CSS", "EmailJS", "GSAP"],
        image: cnc
    },
    {
        id:5,
        title: "Nike Frontend Website Clone",
        smallDescription: "A visually appealing and fully responsive frontend clone of the official Nike website.",
        github: "https://github.com/username/nike-clone",
        projectLink: "https://nike-clone.vercel.app",
        challenge: "Recreating a high-end, pixel-perfect UI like Nike's required deep attention to responsive design, layout precision, and interactive animations across various screen sizes.",
        solution: "Used React and Tailwind CSS to build a clean, responsive UI inspired by Nike’s website, with hover animations, hero sliders, and reusable components to simulate a real-world e-commerce experience.",
        features: [
            "Fully responsive layout with mobile-first design",
            "Dynamic product cards with hover effects",
            "Sticky navbar and smooth scroll navigation",
            "Hero section with promotional banners",
            "Reusable UI components for scalability"
        ],
        techstack: ["React", "Tailwind CSS", "Vite"],
        image: nike
    }
];
