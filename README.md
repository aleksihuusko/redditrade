# ReddiTrade: WallStreetBets Stock Sentiment Analyzer

ReddiTrade is a Next.js-based web application that provides real-time stock sentiment analysis from the WallStreetBets subreddit. This project aims to help investors and traders gauge market sentiment by analyzing discussions and trends on one of the most influential retail investing communities.

Live preview: https://redditrade.vercel.app/

## Features

- Real-time stock sentiment data from WallStreetBets
- Responsive and modern UI built with Next.js and Tailwind CSS
- Dark mode support
- Interactive data visualization (to be implemented)

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Geist Font](https://vercel.com/font)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/redditrade.git
   cd redditrade
   ```

2. Install dependencies:

   ```
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:

   ```
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: Contains the main application pages and API routes
- `src/components`: Reusable React components
- `src/lib`: Utility functions and shared code
- `public`: Static assets

## API

The project includes an API route that fetches stock sentiment data:

```typescript
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const response = await fetch("https://tradestie.com/api/v1/apps/reddit");
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch stock data" },
      { status: 500 }
    );
  }
}
```

This API endpoint fetches data from the Tradestie API and returns it to the client.

## Styling

The project uses Tailwind CSS for styling, with a custom theme configuration. See `tailwind.config.ts` for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Tradestie API](https://tradestie.com/apps/reddit/api/) for providing the WallStreetBets sentiment data
- [shadcn/ui](https://ui.shadcn.com/) for the UI components
