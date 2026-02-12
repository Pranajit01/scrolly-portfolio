# Scrolly Portfolio

A modern, interactive portfolio website built with Next.js and Tailwind CSS, featuring smooth scrolling animations and a beautiful visual design.

## Features

- 🎨 **Smooth Animations**: Beautiful scroll-based canvas animations
- 📱 **Responsive Design**: Works seamlessly on all devices
- ⚡ **Fast Performance**: Built with Next.js for optimal speed
- 🎯 **Modern Stack**: TypeScript, React, Tailwind CSS
- 🎪 **Interactive Components**: Engaging UI with ScrollyCanvas and Projects showcase
- 🌙 **Dark Mode**: Sleek dark theme design

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS + PostCSS
- **Animations**: Framer Motion
- **Linting**: ESLint

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ScrollyCanvas.tsx  # Scroll animation canvas
│   ├── ProfileDetails.tsx # Profile information
│   └── Projects.tsx       # Projects showcase
├── public/                # Static files
└── configuration files
```

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Pranajit01/scrolly-portfolio.git
cd scrolly-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production bundle
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## Deployment

This project is optimized for deployment on Vercel. Simply connect your GitHub repository to Vercel, and it will automatically deploy your changes.

### Deploy on Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect your GitHub repository
4. Click "Deploy"
5. Your site will be live in seconds!

[Live Demo](https://scrolly-portfolio.vercel.app) (when deployed)

## Development Tips

- Modify components in `/components` to customize your portfolio
- Edit `/app/page.tsx` to change the layout structure
- Update styles in `/app/globals.css` and Tailwind classes
- Components use Tailwind CSS for styling with dark mode support

## License

MIT License - feel free to use this project for your own portfolio!

## Author

**Pranajit Das**
- GitHub: [@Pranajit01](https://github.com/Pranajit01)
- Portfolio: [scrolly-portfolio.vercel.app](https://scrolly-portfolio.vercel.app)

---

**Made with ❤️ using Next.js and Tailwind CSS**
