# Trailblazers Sweatworking Club

A modern React website for Trailblazers Sweatworking Club - Manchester's premier social running and networking community that combines fitness with meaningful connections and charitable giving.

## Features

- **AI-Generated Imagery**: Dynamic hero and gallery images powered by Google Gemini
- **Event Schedule**: Monthly running events calendar
- **Email Registration**: Newsletter signup via Formspree
- **Donation Integration**: JustGiving integration for Francis House Hospice
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Animations**: Smooth transitions and hover effects

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Google Generative AI** for image generation

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- A Gemini API key from [Google AI Studio](https://aistudio.google.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Tigaryen/Trailblazers.git
   cd Trailblazers
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create your environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Add your Gemini API key to `.env.local`:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section with AI image
│   ├── Mission.tsx     # Mission statement
│   ├── Events.tsx      # Event schedule
│   ├── Impact.tsx      # Impact metrics
│   ├── FAQ.tsx         # FAQ section
│   ├── Gallery.tsx     # AI image gallery
│   ├── Registration.tsx # Email signup & donations
│   ├── InstagramSection.tsx
│   ├── Footer.tsx
│   └── Section.tsx     # Reusable section wrapper
├── constants.tsx       # Brand colors and configuration
├── types.ts            # TypeScript interfaces
├── App.tsx             # Main app component
├── index.tsx           # React entry point
└── index.html          # HTML template
```

## Connect With Us

- **Instagram**: [@trailblazersc](https://instagram.com/trailblazersc)
- **Email**: trailblazerscuk@gmail.com
- **Donate**: [JustGiving](https://www.justgiving.com/page/trailblazers-sweatworking-club-2)

## License

MIT License - feel free to use this code for your own projects.
