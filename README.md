# Academic Portfolio Website

A modern, responsive academic portfolio website built with Next.js 15, showcasing research, publications, teaching, and professional experience.

## Features

- 🎨 Modern and responsive design
- 🌙 Dark mode support
- 📱 Mobile-first approach
- ⚡ Fast page loads with Next.js
- 🔍 Advanced search and filtering for publications
- 📊 Google Scholar integration
- 📝 Dynamic content management
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Deployment:** Vercel
- **Content Management:** JSON/BIB files
- **API Integration:** Google Scholar API

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About page and components
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   ├── publications/      # Publications page
│   ├── research/          # Research page
│   ├── teaching/          # Teaching page
│   └── tools/             # Tools and utilities
├── components/            # Reusable React components
├── styles/               # Global styles
└── utils/                # Utility functions
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add:
   ```
   NEXT_PUBLIC_GOOGLE_SCHOLAR_ID=your_scholar_id
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Content Management

### Publications
- Research publications are managed through `mypub.bib`
- Google Scholar publications are fetched via API
- Supports DOI links, PDF downloads, and citations

### Research Areas
- Edit `src/components/ResearchAreas.jsx` to update research focus areas
- Add images to the `public/images/research` directory

### Teaching
- Update teaching information in `src/components/TeachingSection.jsx`
- Add course materials to the `public/teaching` directory

## Deployment

The site is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Configure environment variables
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out through the contact form on the website or open an issue in the repository.

---

Built with ❤️ using Next.js and Tailwind CSS
