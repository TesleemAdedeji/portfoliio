# Customization Guide - Portfolio Website

Complete guide to customizing every aspect of your portfolio website.

## 📝 Table of Contents

1. [Personal Information](#personal-information)
2. [Colors & Theme](#colors--theme)
3. [Content & Text](#content--text)
4. [Images](#images)
5. [Projects](#projects)
6. [Skills & Services](#skills--services)
7. [Animations](#animations)
8. [Email Integration](#email-integration)
9. [Advanced Customization](#advanced-customization)

---

## 👤 Personal Information

### Edit Basic Info
**File**: `index.html`

Find and replace these placeholders:
```html
<!-- Hero Section -->
<h1>Hi, I'm Adedeji Tesleem</h1>
<p>Software Developer</p>

<!-- Contact Section -->
<a href="mailto:tesleemadedeji13@gmail.com">tesleemadedeji13@gmail.com</a>
<a href="tel:+2348065354734">+234 806 535 4734</a>
<p>Nigeria 🇳🇬</p>

<!-- Footer -->
<h4>Adedeji Tesleem</h4>
<p>© 2024 Adedeji Tesleem. All rights reserved.</p>
```

### Update Social Media Links
**File**: `index.html` - Hero Section and Footer

```html
<a href="https://github.com/your-username" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/your-profile" target="_blank">LinkedIn</a>
<a href="https://twitter.com/your-handle" target="_blank">Twitter</a>
```

---

## 🎨 Colors & Theme

### Change Primary Color
**File**: `css/styles.css` (Lines 1-15)

```css
:root {
    --primary-color: #00d4ff;      /* Change this to your color */
    --primary-dark: #0099cc;       /* Darker shade of primary */
    --secondary-color: #1a1a1a;    /* Dark background */
    --secondary-light: #2d2d2d;    /* Lighter dark background */
    --text-color: #e0e0e0;         /* Main text color */
    --text-light: #b0b0b0;         /* Secondary text color */
    --success-color: #00ff88;       /* Success messages */
    --warning-color: #ffaa00;       /* Warning messages */
    --error-color: #ff4444;         /* Error messages */
}
```

### Color Suggestions

**Modern Blue**:
```css
--primary-color: #3b82f6;
--primary-dark: #2563eb;
```

**Purple Gradient**:
```css
--primary-color: #a855f7;
--primary-dark: #7e22ce;
```

**Green/Teal**:
```css
--primary-color: #10b981;
--primary-dark: #059669;
```

**Neon Pink**:
```css
--primary-color: #ec4899;
--primary-dark: #db2777;
```

**Orange**:
```css
--primary-color: #f97316;
--primary-dark: #ea580c;
```

### Light Mode Customization
**File**: `css/styles.css` (Light Mode Section)

Edit `body.light-mode` styles for light theme colors:
```css
body.light-mode {
    background: linear-gradient(135deg, #f5f7fa 0%, #e8eef7 100%);
    color: #333;
    --text-color: #333;
    --text-light: #666;
    --secondary-color: #ffffff;
    --secondary-light: #f5f5f5;
}
```

---

## 📝 Content & Text

### Hero Section Text
**File**: `index.html` - Search for `hero-description`

```html
<p class="hero-description">
    I'm a passionate software developer specializing in creating beautiful, responsive web applications. 
    I love solving complex problems and turning ideas into reality through clean, efficient code.
</p>
```

### About Section
**File**: `index.html` - Search for `about-text`

Replace with your biography:
```html
<div class="about-text">
    <p>Your biography here...</p>
    <p>Your career path here...</p>
    <p>Your goals here...</p>
</div>
```

### Update Key Strengths
**File**: `index.html` - In About Section

```html
<div class="strengths">
    <h3>Key Strengths</h3>
    <ul>
        <li>Your strength 1</li>
        <li>Your strength 2</li>
        <li>Your strength 3</li>
        <!-- Add or remove as needed -->
    </ul>
</div>
```

### Update Statistics
**File**: `index.html` - About Stats Section

```html
<div class="stat-card">
    <div class="stat-number" data-target="50">0</div>
    <div class="stat-label">Your Stat Label</div>
</div>
```

---

## 🖼️ Images

### Profile Picture Setup
1. Prepare your image (recommended: 400x400px, under 100KB)
2. Save as `assets/profile.jpg`
3. Optionally update in HTML if different name:
   ```html
   <img src="assets/profile.jpg" alt="Your Name">
   ```

### Project Thumbnails
1. Prepare 6 project images (recommended: 500x300px)
2. Save as:
   - `assets/project1.jpg`
   - `assets/project2.jpg`
   - ... through `assets/project6.jpg`

### Image Optimization
Use these free tools to compress images:
- **TinyPNG**: tinypng.com
- **ImageOptim**: imageoptim.com
- **Kraken**: kraken.io

### Using WebP Format (Optional)
For modern browsers, use WebP format:
```html
<picture>
    <source srcset="assets/profile.webp" type="image/webp">
    <img src="assets/profile.jpg" alt="Your Name">
</picture>
```

---

## 🚀 Projects

### Edit Existing Projects
**File**: `index.html` - Project Cards Section

Find a project card:
```html
<div class="project-card" data-category="react">
    <div class="project-image">
        <img src="assets/project1.jpg" alt="Project Title">
    </div>
    <div class="project-content">
        <h3>Your Project Title</h3>
        <p>Your project description here</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
            <span class="tech-tag">Technology 3</span>
        </div>
        <div class="project-buttons">
            <a href="https://your-live-demo.com" class="btn btn-small">Live Demo</a>
            <a href="https://github.com/your-repo" class="btn btn-small btn-outline">GitHub</a>
        </div>
    </div>
</div>
```

### Add New Project
Copy the entire project card div and:
1. Change `data-category` to: `react`, `javascript`, or `design`
2. Update image src
3. Update title and description
4. Update technology tags
5. Update live demo and GitHub links

### Change Project Categories
Current categories: `react`, `javascript`, `design`

To add new category:
1. Add filter button in HTML
2. Add data-filter attribute to button
3. Update project card data-category

---

## 💡 Skills & Services

### Edit Skills
**File**: `index.html` - Skills Section

Find a skill card:
```html
<div class="skill-card">
    <div class="skill-icon">
        <svg viewBox="0 0 24 24" fill="currentColor">
            <!-- SVG content -->
        </svg>
    </div>
    <h3>HTML5</h3>
    <div class="skill-indicator">
        <div class="indicator-dots">
            <span class="dot filled"></span>
            <span class="dot filled"></span>
            <span class="dot filled"></span>
            <span class="dot filled"></span>
            <span class="dot"></span>
        </div>
    </div>
</div>
```

To adjust proficiency:
- Add more `<span class="dot filled"></span>` for higher proficiency
- Remove filled dots for lower proficiency
- Max 5 dots per skill

### Edit Services
**File**: `index.html` - Services Section

Update service titles and descriptions:
```html
<div class="service-card">
    <div class="service-icon"><!-- SVG --></div>
    <h3>Your Service Title</h3>
    <p>Your service description here</p>
</div>
```

### Update Timeline (Experience & Education)
**File**: `index.html` - Timeline Section

Add/edit timeline items:
```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3>Your Title</h3>
        <p class="timeline-date">YYYY - YYYY</p>
        <p class="timeline-description">Your description here</p>
    </div>
</div>
```

---

## 🎬 Animations

### Adjust Animation Duration
**File**: `css/styles.css` (Line 18)

```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                      ↑
                   Change 0.3s to desired duration
```

### Change Animation Speed Globally
1. All animations: Edit `--transition` variable
2. Individual elements: Search for `animation-duration` in CSS files

### Disable Animations
In `css/styles.css`, set transition to 0:
```css
--transition: all 0s;
```

### Faster/Slower Animations
```css
/* Faster */
--transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);

/* Slower */
--transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

/* Very Slow */
--transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
```

### Change Loading Screen Duration
**File**: `js/main.js` (Line 19)

```javascript
setTimeout(() => {
    loadingScreen.style.opacity = '0';
}, 2500);  // Change 2500ms to desired duration
```

---

## 📧 Email Integration

### Option 1: Formspree (Easiest)

1. Go to formspree.io
2. Sign up and create new form
3. Get your form ID (looks like: `f_xxxxx`)
4. In `index.html`, update form action:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 2: EmailJS (No Backend Needed)

1. Go to emailjs.com
2. Sign up and add email service
3. Get API key and service ID
4. Add to HTML head:
   ```html
   <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
   ```
5. Initialize in `js/main.js`:
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY');
   ```

### Option 3: Discord Webhook

Send form submissions to Discord channel:

```javascript
const webhookURL = 'https://discord.com/api/webhooks/YOUR_WEBHOOK_URL';

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const message = `
Name: ${formData.get('name')}
Email: ${formData.get('email')}
Subject: ${formData.get('subject')}
Message: ${formData.get('message')}
    `;
    
    await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: message })
    });
});
```

---

## 🔧 Advanced Customization

### Custom Fonts
In `css/styles.css`, update font-family:

```css
body {
    font-family: 'Your Font Name', 'Fallback Font', sans-serif;
}
```

With Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Font+Name:wght@400;700&display=swap" rel="stylesheet">
```

### Responsive Breakpoints
**File**: `css/styles.css` (Media Queries Section)

Current breakpoints:
```css
@media (max-width: 768px) { /* Tablet */ }
@media (max-width: 480px) { /* Mobile */ }
```

Change to your preferred sizes:
```css
@media (max-width: 1024px) { /* New breakpoint */ }
```

### Add New Sections
1. Add HTML section in `index.html`
2. Style in `css/styles.css`
3. Add animations in `css/animations.css`
4. Add interactivity in `js/main.js` if needed
5. Update navigation links

### Add Dark Mode Variants
For any new element, add light mode styles:
```css
.your-element {
    background: #1a1a1a;
}

body.light-mode .your-element {
    background: #ffffff;
}
```

### Performance Optimization

**Lazy Load Images**:
```html
<img loading="lazy" src="assets/image.jpg" alt="Description">
```

**Compress CSS**:
Use cssminifier.com before deployment

**Compress JavaScript**:
Use minifier.org before deployment

### SEO Optimization

1. **Meta Tags**: Edit in HTML `<head>`
2. **Schema Markup**: Add JSON-LD
3. **Sitemap**: Create sitemap.xml
4. **Robots.txt**: Create robots.txt

---

## 🎨 CSS Structure

### Where to Find Things

| What | Where |
|------|-------|
| Colors | `css/styles.css` lines 1-15 |
| Fonts | `css/styles.css` line 77 |
| Buttons | `css/styles.css` search `.btn` |
| Cards | `css/styles.css` search `.card` |
| Navbar | `css/styles.css` search `.navbar` |
| Animations | `css/animations.css` |
| Mobile Styles | `css/styles.css` @media queries |

---

## 📱 Responsive Design Tips

### Test Different Sizes
- Mobile: 375px (iPhone)
- Mobile Large: 480px (Android)
- Tablet: 768px (iPad)
- Desktop: 1024px+
- Large Desktop: 1440px+

### Adjust Spacing
```css
padding: 20px;  /* Desktop */

@media (max-width: 768px) {
    padding: 15px;  /* Tablet */
}

@media (max-width: 480px) {
    padding: 10px;  /* Mobile */
}
```

---

## ✅ Customization Checklist

- [ ] Updated all personal information
- [ ] Changed primary color to match brand
- [ ] Added profile picture
- [ ] Updated all projects
- [ ] Added project images
- [ ] Updated skills list
- [ ] Updated services
- [ ] Updated experience/education timeline
- [ ] Updated testimonials
- [ ] Configured email integration
- [ ] Tested dark/light mode
- [ ] Tested on mobile devices
- [ ] Tested all links
- [ ] Optimized images
- [ ] Checked console for errors

---

## 🆘 Need Help?

- Check README.md for full documentation
- Review QUICKSTART.md for quick setup
- Check inline code comments
- Use browser DevTools (F12) to debug
- Test with different browsers

---

**Happy customizing! 🎨**