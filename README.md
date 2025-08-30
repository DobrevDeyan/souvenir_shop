# Ocean Treasures - Handcrafted Seashell Souvenirs

A beautiful, modern website showcasing handcrafted seashell decorations and wall art. Built with HTML5, CSS3, JavaScript, and GSAP animations, featuring a responsive design and lightbox gallery.

## 🌊 Features

- **Modern Design**: Clean, elegant design with ocean-inspired color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **GSAP Animations**: Smooth scroll-triggered animations and interactive effects
- **Lightbox Gallery**: Beautiful image gallery with lightbox functionality
- **Filter System**: Filter gallery items by category (Wall Art, Table Decor, Centerpieces)
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🚀 Quick Start

### Prerequisites
- Node.js (for Firebase CLI)
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd souvenir_shop
   ```

2. **Install Firebase CLI** (if not already installed)
   ```bash
   npm install -g firebase-tools
   ```

3. **Login to Firebase**
   ```bash
   firebase login
   ```

4. **Initialize Firebase project**
   ```bash
   firebase init hosting
   ```
   - Select "Use an existing project" or create a new one
   - Set public directory to "." (current directory)
   - Configure as single-page app: Yes
   - Don't overwrite index.html: No

5. **Add your images**
   - Place your product images in `assets/images/`
   - Follow the naming convention: `product-name.jpg` and `product-name-thumb.jpg`
   - Update the gallery section in `index.html` with your image paths

6. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

## 📁 Project Structure

```
souvenir_shop/
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # Main stylesheet
├── scripts/
│   └── main.js            # JavaScript functionality
├── assets/
│   └── images/            # Product images directory
├── firebase.json          # Firebase configuration
├── .firebaserc           # Firebase project settings
└── README.md             # This file
```

## 🎨 Customization

### Colors
The website uses a coastal color scheme. You can customize colors in `styles/main.css`:

```css
:root {
  --primary-color: #38b2ac;      /* Teal */
  --secondary-color: #1a365d;    /* Dark blue */
  --accent-color: #667eea;       /* Purple gradient */
  --text-color: #333;            /* Dark gray */
  --light-bg: #f8fafc;          /* Light gray */
}
```

### Content
- Update the hero section text in `index.html`
- Modify the about section content
- Add your contact information
- Update social media links

### Images
- Add your product images to `assets/images/`
- Update the gallery section with your image paths
- Ensure both full-size and thumbnail versions are available

## 🔧 Configuration

### Firebase Hosting
The website is configured for Firebase Hosting with:
- Single-page app routing
- Optimized caching for static assets
- Compression enabled

### Domain Setup
1. Deploy to Firebase Hosting
2. Go to Firebase Console > Hosting
3. Add your custom domain
4. Follow the DNS configuration instructions

### Free Domain Options
- **Freenom**: Offers free domains (.tk, .ml, .ga, .cf, .gq)
- **GitHub Pages**: Free hosting with custom domain support
- **Netlify**: Free hosting with custom domain

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎭 Animations

### GSAP Animations
- Hero section entrance animations
- Scroll-triggered section animations
- Gallery item hover effects
- Floating shell animations

### CSS Animations
- Smooth transitions
- Hover effects
- Loading animations

## 📧 Contact Form

The contact form includes:
- Form validation
- Success/error notifications
- Responsive design
- Email format validation

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Optimized images with alt text
- Fast loading times
- Mobile-friendly design

## 🚀 Performance

- Optimized images
- Minified CSS and JavaScript
- Efficient animations
- Fast loading times
- Caching strategies

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions:
- Email: info@oceantreasures.com
- Phone: +1 (555) 123-4567

## 🎯 Future Enhancements

- E-commerce integration
- Product catalog
- Shopping cart functionality
- Customer reviews
- Blog section
- Newsletter signup
- Advanced filtering options
- Image lazy loading
- Progressive Web App features

---

**Built with ❤️ for showcasing beautiful handcrafted seashell creations**








Notes: 



















































