// ========================================
// PORTFOLIO CONFIGURATION FILE
// ========================================
// Edit this file to customize your portfolio
// All changes will automatically reflect in the website

const PORTFOLIO_CONFIG = {
    // ========================================
    // PERSONAL INFORMATION
    // ========================================
    personal: {
        fullName: "Adedeji Tesleem",
        title: "Software Developer",
        email: "tesleemadedeji13@gmail.com",
        phone1: "+234 806 535 4734",
        phone2: "+234 815 026 7152",
        location: "Nigeria 🇳🇬",
        bio: "I'm a passionate software developer specializing in creating beautiful, responsive web applications. I love solving complex problems and turning ideas into reality through clean, efficient code.",
        
        // Social Media Links
        social: {
            github: "https://github.com/adedejitesleem1",
            linkedin: "https://linkedin.com/in/adedejitesleem1",
            twitter: "https://twitter.com/adedejitesleem1",
            portfolio: "https://adedejitesleem.com" // Your portfolio URL
        }
    },

    // ========================================
    // HERO SECTION
    // ========================================
    hero: {
        subtitle: "Software Developer",
        description: "I'm a passionate software developer specializing in creating beautiful, responsive web applications. I love solving complex problems and turning ideas into reality through clean, efficient code.",
        backgroundGradient: "linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)",
    },

    // ========================================
    // COLORS & THEME
    // ========================================
    theme: {
        primary: "#00d4ff",
        primaryDark: "#0099cc",
        secondary: "#1a1a1a",
        secondaryLight: "#2d2d2d",
        textColor: "#e0e0e0",
        textLight: "#b0b0b0",
        success: "#00ff88",
        warning: "#ffaa00",
        error: "#ff4444",
        borderRadius: "12px",
    },

    // ========================================
    // SKILLS
    // ========================================
    skills: [
        {
            name: "HTML5",
            proficiency: 4.5, // Out of 5
            icon: "code"
        },
        {
            name: "CSS3",
            proficiency: 4.5,
            icon: "palette"
        },
        {
            name: "JavaScript",
            proficiency: 5,
            icon: "code"
        },
        {
            name: "React",
            proficiency: 4,
            icon: "check"
        },
        {
            name: "Node.js",
            proficiency: 3.5,
            icon: "circle"
        },
        {
            name: "Git & GitHub",
            proficiency: 5,
            icon: "refresh"
        },
        {
            name: "Responsive Design",
            proficiency: 4.5,
            icon: "add"
        },
        {
            name: "Problem Solving",
            proficiency: 5,
            icon: "info"
        }
    ],

    // ========================================
    // PROJECTS
    // ========================================
    projects: [
        {
            id: 1,
            title: "E-commerce Application",
            description: "A fully functional e-commerce platform built with React, featuring shopping cart, payment integration, and admin dashboard.",
            image: "assets/project1.jpg",
            technologies: ["React", "Node.js", "MongoDB"],
            category: "react",
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 2,
            title: "Weather Application",
            description: "Real-time weather application with beautiful UI, location-based forecasting, and weather alerts using OpenWeather API.",
            image: "assets/project2.jpg",
            technologies: ["JavaScript", "API", "HTML/CSS"],
            category: "javascript",
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 3,
            title: "Corporate Website",
            description: "Modern, responsive corporate website with smooth animations, contact forms, and SEO optimization.",
            image: "assets/project3.jpg",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            category: "design",
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 4,
            title: "Task Manager Application",
            description: "Productivity app with task creation, categorization, reminders, and local storage. Built with React and modern best practices.",
            image: "assets/project4.jpg",
            technologies: ["React", "JavaScript", "LocalStorage"],
            category: "react",
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 5,
            title: "Music Player",
            description: "Interactive music player with playlist management, volume control, and beautiful UI. Features seek bar and duration display.",
            image: "assets/project5.jpg",
            technologies: ["JavaScript", "Web Audio", "CSS3"],
            category: "javascript",
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 6,
            title: "Blog Platform",
            description: "Full-featured blogging platform with markdown support, search functionality, and responsive design for all devices.",
            image: "assets/project6.jpg",
            technologies: ["React", "Firebase", "Markdown"],
            category: "design",
            liveLink: "#",
            githubLink: "#"
        }
    ],

    // ========================================
    // SERVICES
    // ========================================
    services: [
        {
            id: 1,
            title: "Frontend Development",
            description: "Create responsive, interactive user interfaces using HTML5, CSS3, and JavaScript. Specializing in modern frameworks like React for building dynamic web applications."
        },
        {
            id: 2,
            title: "Website Design",
            description: "Beautiful, modern website designs that combine aesthetics with functionality. Focus on user experience and converting visitors into customers."
        },
        {
            id: 3,
            title: "Responsive Web Development",
            description: "Develop websites that work seamlessly across all devices - desktop, tablet, and mobile. Mobile-first approach ensuring optimal user experience everywhere."
        },
        {
            id: 4,
            title: "Website Maintenance",
            description: "Ongoing support and maintenance for your website. Updates, bug fixes, performance optimization, and security patches to keep your site running smoothly."
        }
    ],

    // ========================================
    // EXPERIENCE & EDUCATION
    // ========================================
    timeline: [
        {
            id: 1,
            type: "experience",
            title: "Junior Software Developer",
            date: "2023 - Present",
            description: "Working at Tech Solutions Inc. on various web development projects. Responsibilities include frontend development, code review, and bug fixing. Collaborated with cross-functional teams to deliver quality solutions."
        },
        {
            id: 2,
            type: "education",
            title: "Web Development Bootcamp",
            date: "2022 - 2023",
            description: "Completed an intensive 12-week coding bootcamp focused on full-stack web development. Learned modern technologies including React, Node.js, and MongoDB. Built multiple projects from concept to deployment."
        },
        {
            id: 3,
            type: "education",
            title: "Bachelor of Science in Computer Science",
            date: "2018 - 2022",
            description: "Graduated from University of Lagos with a degree in Computer Science. Focused on software development, algorithms, and data structures. Completed capstone project on web application development."
        },
        {
            id: 4,
            type: "certification",
            title: "React Developer Certification",
            date: "2023",
            description: "Professional certification in React development from Meta. Demonstrated proficiency in component design, state management, and modern React patterns including hooks and context API."
        },
        {
            id: 5,
            type: "certification",
            title: "JavaScript Fundamentals Course",
            date: "2021",
            description: "Completed comprehensive JavaScript course covering ES6+, async programming, DOM manipulation, and best practices. Built strong foundation for modern web development."
        }
    ],

    // ========================================
    // TESTIMONIALS
    // ========================================
    testimonials: [
        {
            id: 1,
            text: "Adedeji is an exceptional developer. He delivered our e-commerce project on time and exceeded all expectations. His attention to detail and problem-solving skills are outstanding.",
            rating: 5,
            author: "John Smith",
            title: "CEO, Tech StartUp"
        },
        {
            id: 2,
            text: "Working with Adedeji was a pleasure. He's very professional, communicative, and always ready to help. The website he built for us is modern, fast, and beautiful.",
            rating: 5,
            author: "Sarah Johnson",
            title: "Founder, Digital Agency"
        },
        {
            id: 3,
            text: "Great developer with deep knowledge of modern web technologies. He helped us optimize our website performance and the results were incredible. Highly recommended!",
            rating: 5,
            author: "Michael Chen",
            title: "Marketing Director, E-commerce Co."
        },
        {
            id: 4,
            text: "Adedeji has strong technical skills and excellent communication. He took the time to understand our business needs and delivered solutions that actually made a difference.",
            rating: 5,
            author: "Emily Rodriguez",
            title: "Product Manager, SaaS Company"
        }
    ],

    // ========================================
    // STATISTICS
    // ========================================
    stats: [
        {
            label: "Projects Completed",
            value: 50
        },
        {
            label: "Happy Clients",
            value: 100
        },
        {
            label: "Years Experience",
            value: 3
        },
        {
            label: "Technologies",
            value: 8
        }
    ],

    // ========================================
    // ANIMATIONS
    // ========================================
    animations: {
        enabled: true,
        duration: 0.3, // seconds
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        scrollAnimationDelay: 0.1 // seconds between cascade items
    },

    // ========================================
    // PERFORMANCE
    // ========================================
    performance: {
        enableLazyLoading: true,
        enableCompressionAnimation: true,
        preloadImages: true,
        cacheStaticAssets: true
    },

    // ========================================
    // CONTACT & FORM
    // ========================================
    contact: {
        formAction: "https://formspree.io/f/YOUR_FORM_ID", // Update with your Formspree ID
        notificationTimeout: 4000, // milliseconds
        enableFormValidation: true
    },

    // ========================================
    // FOOTER
    // ========================================
    footer: {
        copyright: "© 2024 Adedeji Tesleem. All rights reserved.",
        tagline: "Software Developer | Web Developer | Problem Solver"
    },

    // ========================================
    // NAVIGATION
    // ========================================
    navigation: [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Services", href: "#services" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Contact", href: "#contact" }
    ]
};

// ========================================
// EXPORT CONFIGURATION
// ========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
}