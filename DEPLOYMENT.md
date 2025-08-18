# Deployment Guide - Ocean Treasures Website

This guide will walk you through deploying your seashell souvenir website to Firebase Hosting and setting up a custom domain.

## 🚀 Firebase Hosting Setup

### Step 1: Install Firebase CLI
```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase
```bash
firebase login
```

### Step 3: Initialize Firebase Project
```bash
firebase init hosting
```

**Configuration Options:**
- Select "Use an existing project" or create a new one
- Public directory: `.` (current directory)
- Configure as single-page app: `Yes`
- Set up automatic builds and deploys: `No`
- File index.html already exists. Overwrite? `No`

### Step 4: Deploy to Firebase
```bash
firebase deploy
```

Your site will be available at: `https://your-project-id.web.app`

## 🌐 Custom Domain Setup

### Option 1: Firebase Custom Domain (Recommended)

1. **Go to Firebase Console**
   - Navigate to your project
   - Click on "Hosting" in the left sidebar

2. **Add Custom Domain**
   - Click "Add custom domain"
   - Enter your domain name
   - Follow the DNS configuration instructions

3. **DNS Configuration**
   - Add the provided A records to your domain registrar
   - Wait for DNS propagation (can take up to 48 hours)

### Option 2: Free Domain Services

#### Freenom (Free Domains)
1. Visit [freenom.com](https://www.freenom.com)
2. Search for available domains (.tk, .ml, .ga, .cf, .gq)
3. Register your free domain
4. Update DNS settings to point to Firebase

#### GitHub Pages (Alternative Hosting)
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Add custom domain in repository settings
4. Update DNS records

## 📱 Domain Name Suggestions

### Free Domain Ideas
- `oceantreasures.tk`
- `seashellart.ml`
- `coastalcrafts.ga`
- `beachdecor.cf`
- `shellgallery.gq`

### Paid Domain Ideas
- `oceantreasures.com`
- `seashellart.com`
- `coastalcrafts.com`
- `beachdecor.com`
- `shellgallery.com`

## 🔧 Configuration Files

### firebase.json
```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**",
      "**/README.md",
      "**/LICENSE",
      "**/.git/**",
      "**/.gitignore"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

### .firebaserc
```json
{
  "projects": {
    "default": "your-project-id"
  }
}
```

## 📊 Performance Optimization

### Image Optimization
1. **Compress Images**
   - Use tools like TinyPNG or ImageOptim
   - Aim for file sizes under 500KB for full images
   - Use WebP format when possible

2. **Responsive Images**
   - Provide multiple sizes for different screen sizes
   - Use `srcset` attribute for responsive images

### Caching Strategy
- Static assets cached for 1 year
- HTML files cached for 1 hour
- Images cached for 1 year

## 🔍 SEO Setup

### Meta Tags
Update the following in `index.html`:
```html
<meta name="description" content="Beautiful handcrafted seashell decorations, wall art, and home decor. Water-resistant resin creations perfect for any space.">
<meta name="keywords" content="seashell decorations, wall art, handcrafted, ocean decor, resin art">
<meta name="author" content="Ocean Treasures">
```

### Social Media Tags
```html
<meta property="og:title" content="Ocean Treasures - Handcrafted Seashell Decorations">
<meta property="og:description" content="Beautiful handcrafted seashell decorations and wall art">
<meta property="og:image" content="https://yourdomain.com/assets/images/hero-image.jpg">
<meta property="og:url" content="https://yourdomain.com">
```

## 📧 Contact Form Setup

### Option 1: Firebase Functions (Recommended)
1. Enable Firebase Functions
2. Create a function to handle form submissions
3. Send emails using a service like SendGrid

### Option 2: Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form action in `index.html`

### Option 3: Netlify Forms
1. Deploy to Netlify instead of Firebase
2. Add `netlify` attribute to form
3. Forms are automatically handled

## 🔒 Security Considerations

### HTTPS
- Firebase Hosting automatically provides HTTPS
- Custom domains also get SSL certificates

### Content Security Policy
Add to your HTML head:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com;">
```

## 📈 Analytics Setup

### Google Analytics
1. Create a Google Analytics account
2. Get your tracking ID
3. Add the tracking code to `index.html`

### Firebase Analytics
1. Enable Firebase Analytics in your project
2. Add the Firebase SDK to your site
3. Track custom events

## 🚀 Deployment Commands

### Quick Deploy
```bash
npm run deploy
```

### Deploy Only Hosting
```bash
npm run deploy:hosting
```

### Local Development
```bash
npm start
```

## 🔄 Continuous Deployment

### GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Firebase
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '16'
    - run: npm install -g firebase-tools
    - run: firebase deploy --token "${{ secrets.FIREBASE_TOKEN }}"
```

## 📞 Support

If you encounter any issues:
1. Check Firebase Console for error messages
2. Verify DNS settings are correct
3. Ensure all files are properly committed
4. Check Firebase CLI version is up to date

## 🎯 Next Steps

After deployment:
1. Test all functionality on live site
2. Set up Google Analytics
3. Configure contact form
4. Add your product images
5. Update content with your information
6. Set up social media links
7. Test on different devices and browsers

---

**Your beautiful seashell souvenir website is now ready to showcase your handcrafted creations! 🌊** 