/**
 * MachineMatchAI - Project Summary
 * 
 * Vision:
 * A groundbreaking platform that dramatically simplifies machinery buying/selling
 * through AI-powered matching (Note: AI is marketing angle, actual matching done by staff)
 * 
 * Core Features:
 * 1. Ultra-Simple Listing Process
 *    - Just Year/Make/Model + Email
 *    - No login required initially (anti-friction)
 *    - No complex forms or extra steps
 * 
 * 2. Smart Search System
 *    - Year/Make/Model search
 *    - Timeline options:
 *      • Less than 1 month
 *      • 1-2 Months
 *      • Greater than 2 months
 *    - Budget/specs details field
 *    - Email for inquiries
 * 
 * Design & UX:
 * - Modern, clean design inspired by rustdesk.com
 * - Deep blues and electric accents
 * - Mobile-first responsive design
 * - Two clear CTAs on landing: "Find" and "Sell"
 * 
 * Technical Stack:
 * - Next.js + TypeScript
 * - Firebase (Firestore + Hosting)
 * - Tailwind CSS for styling
 * 
 * Technical Constraints:
 * - Components kept under 400 lines for AI assistance
 * - Clean folder structure for AI parsing
 * - Minimal dependencies for easier maintenance
 * 
 * Future Enhancements:
 * 1. Image Support
 *    - Firebase Storage integration
 *    - Multiple image upload
 *    - Image optimization
 *    - Gallery view
 * 
 * 2. Authentication (if needed)
 *    - Only if spam becomes issue
 *    - Firebase Auth integration
 *    - User profiles/dashboard
 * 
 * 3. Mobile Apps
 *    - iOS and Android versions
 *    - Consider React Native integration
 * 
 * Current Project Structure:
 * machine-match-ai/
 * ├── .env.local                 # Firebase config vars
 * ├── .github/
 * │   └── workflows/
 * │       └── firebase-deploy.yml
 * ├── firebase.json              # Firebase hosting config
 * ├── firestore.indexes.json     # Firestore indexes
 * ├── firestore.rules           # Firestore security rules
 * ├── next-env.d.ts            # Next.js type declarations
 * ├── next.config.js           # Next.js config
 * ├── node_modules/            [collapsed]
 * ├── package-lock.json
 * ├── package.json             # Project dependencies
 * ├── postcss.config.js        # PostCSS config
 * ├── src/
 * │   ├── components/
 * │   │   ├── forms/
 * │   │   │   ├── ListingForm.tsx
 * │   │   │   └── SearchForm.tsx
 * │   │   ├── layout/
 * │   │   │   └── Layout.tsx
 * │   │   ├── sections/
 * │   │   │   ├── CTAButtons.tsx
 * │   │   │   └── HeroSection.tsx
 * │   │   └── ui/
 * │   │       └── Button.tsx
 * │   ├── lib/
 * │   │   ├── docs/
 * │   │   │   └── project-summary.ts
 * │   │   ├── firebase/
 * │   │   │   ├── config.ts
 * │   │   │   ├── schema.ts
 * │   │   │   └── services.ts
 * │   │   ├── types/
 * │   │   │   └── index.ts
 * │   │   └── utils/
 * │   │       └── index.ts
 * │   ├── pages/
 * │   │   ├── index.tsx
 * │   │   ├── list/
 * │   │   │   └── index.tsx
 * │   │   └── search/
 * │   │       └── index.tsx
 * │   └── styles/
 * │       └── globals.css
 * ├── tailwind.config.js       # Tailwind config
 * └── tsconfig.json           # TypeScript config
 * 
 * Deployment:
 * - Simple 'npm run deploy' command
 * - Firebase hosting
 * - No complex CI/CD initially
 * 
 * Marketing Angle:
 * - "AI-Powered Machinery Matching"
 * - "List in Seconds, Let AI Do the Rest"
 * - "World's Largest Selection" (via staff AI tools)
 * - Focus on simplicity and speed
 * 
 * Development Notes:
 * - Keep components small for AI assistance
 * - Maintain clear type definitions
 * - Follow atomic design principles
 * - Prioritize performance and simplicity
 * 
 * Security Notes:
 * - Start without auth for frictionless UX
 * - Monitor for abuse
 * - Can add Firebase Auth later if needed
 * 
 * Performance Goals:
 * - Fast initial load
 * - Responsive forms
 * - Smooth transitions
 * - Mobile-optimized
 */ 