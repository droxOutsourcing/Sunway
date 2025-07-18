# SUNWAY Website

베트남 대사관 업무 대행 전문 업체 SUNWAY의 공식 웹사이트입니다.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0.0 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd sunway-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Linting**: ESLint
- **Formatting**: Prettier

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   ├── Header.tsx     # Navigation header
│   ├── Services.tsx   # Services page
│   └── ...
├── assets/            # Static assets
│   └── imports/       # SVG and image imports
├── lib/               # Utility functions
├── types/             # TypeScript type definitions
└── utils/             # Helper functions
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 📝 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use Tailwind CSS for styling
- Keep components small and focused

### Component Structure
```tsx
// Use this pattern for new components
interface ComponentProps {
  // Define props here
}

export default function Component({ ...props }: ComponentProps) {
  // Component logic
  return (
    // JSX here
  );
}
```

### File Naming
- Components: PascalCase (e.g., `Header.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Types: camelCase (e.g., `navigationProps.ts`)

## 🌐 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://sunway.co.kr
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm run start
```

## 📄 License

This project is proprietary software owned by SUNWAY.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## 📞 Support

For questions or support, contact the development team or refer to the documentation in the `docs/` directory.

## 🔄 Migration Notes

This project has been migrated from a React SPA to Next.js App Router. Key changes:
- Client-side routing replaced with Next.js routing
- Components restructured for better maintainability
- TypeScript types added for better development experience
- Build configuration optimized for production deployment