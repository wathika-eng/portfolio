<!-- # 🚀 Joseph Wathika - Professional Portfolio

A modern, responsive portfolio website showcasing my expertise as a Backend Developer and API Specialist. Built with Next.js, Tailwind CSS, and featuring a clean, professional design optimized for performance and accessibility.

![Portfolio Preview](https://via.placeholder.com/800x400/f3f4f6/374151?text=Portfolio+Preview)

## 🌟 Features

### 🎨 Design & UX
- **Modern, Clean Design** - Professional aesthetic with classic styling
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode** - Automatic theme switching with user preference
- **Smooth Animations** - Framer Motion powered micro-interactions
- **Accessible** - WCAG compliant with proper focus states and alt texts

### 🛠️ Technical Features
- **Next.js 12** - React framework with SSR and optimized performance
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **TypeScript Ready** - Type-safe development environment
- **SEO Optimized** - Meta tags, structured data, and performance optimized
- **Fast Loading** - Optimized images and minimal bundle size

### 📱 Sections
- **Hero Section** - Professional introduction with call-to-action
- **Projects Portfolio** - Showcase of development work with technology stacks
- **Services Offered** - Professional services with detailed descriptions
- **About Me** - Personal background and technical expertise
- **Contact** - Multiple ways to get in touch

## 🚀 Tech Stack

### Frontend
- **Next.js 12** - React framework
- **React 18** - JavaScript library for user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library with technology logos

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Deployment
- **Vercel** - Optimized for Next.js deployment
- **GitHub Pages** - Alternative deployment option

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/wathika-eng/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Edit `/data/portfolio.json` to update:
- Personal details and bio
- Project information
- Services offered
- Social media links
- Resume/CV details

```json
{
  "name": "Your Name",
  "headerTaglineOne": "Hello 👋",
  "headerTaglineTwo": "I'm Your Name,",
  "headerTaglineThree": "Your Professional Title",
  "headerTaglineFour": "Your Location",
  "aboutpara": "Your professional summary...",
  "projects": [...],
  "services": [...],
  "socials": [...]
}
```

### Styling
- **Colors**: Update `tailwind.config.js` for custom color schemes
- **Fonts**: Modify font imports in `styles/globals.css`
- **Components**: Customize individual components in `/components`

### Adding New Projects
Add new projects to the `projects` array in `portfolio.json`:

```json
{
  "id": "unique-id",
  "title": "Project Name",
  "description": "Project description",
  "imageSrc": "https://your-image-url.com/image.png",
  "url": "https://live-project-url.com",
  "githublink": "https://github.com/username/repo",
  "technologies": ["React", "Node.js", "MongoDB"]
}
```

## 📁 Project Structure

```
portfolio/
├── components/          # Reusable React components
│   ├── Header/         # Navigation header
│   ├── Footer/         # Contact footer
│   ├── WorkCard/       # Project showcase cards
│   ├── ServiceCard/    # Service offering cards
│   └── ...
├── pages/              # Next.js pages
│   ├── index.js        # Homepage
│   ├── _app.js         # App configuration
│   └── api/            # API routes
├── data/               # Content data
│   └── portfolio.json  # Personal and project data
├── styles/             # CSS styles
│   ├── globals.css     # Global styles
│   └── markdown.css    # Markdown styles
├── public/             # Static assets
│   └── images/         # Image assets
└── utils/              # Utility functions
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Manual Deployment
```bash
# Build the project
npm run build

# Start production server
npm start
```

### Static Export
```bash
# Generate static files
npm run build
npm run export
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js automatic image optimization
- **Bundle Size**: Minimized with tree shaking and code splitting

## 🛡️ Security

- **Content Security Policy** - Protection against XSS attacks
- **HTTPS Only** - Secure data transmission
- **No Sensitive Data** - Client-side only, no server secrets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Developer

**Joseph Wathika** - Backend Developer & API Specialist
- 🌍 Based in Nairobi, Kenya
- 💼 Specializing in Go, Python, Django, and API development
- 🎯 Focused on building scalable, robust backend systems
- 📧 Contact: joseph_wathika@yahoo.com

## 🔗 Links

- **Live Site**: [Your Portfolio URL](https://your-portfolio-url.com)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/wathikaww/)
- **GitHub**: [Your GitHub](https://github.com/wathika-eng)

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **React Icons** - For the comprehensive icon library
- **Vercel** - For seamless deployment platform

---

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Joseph Wathika](https://github.com/wathika-eng) -->
