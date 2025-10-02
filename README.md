# SaaS Starter Kit

This project is a production-ready SaaS Starter Kit built with Next.js 14+, TypeScript, and a modern tech stack. It provides a foundation for developing applications that require file uploads, semantic search, and LLM-powered chat functionalities.

## Tech Stack

- **Framework**: Next.js 14+ (App Router, TypeScript, Server Components)
- **UI**: Tailwind CSS + shadcn/ui (Radix)
- **LLM Integration**: LangChain + OpenAI API
- **Vector Database**: Pinecone (preferred) or Weaviate
- **State Management**: React Query + LangChain memory
- **Testing**: Vitest (unit), Playwright (e2e)
- **Observability**: Logging with pino
- **Security**: File validation, server-side sanitization, rate limiting
- **DevX**: ESLint, Prettier, TypeScript strict mode, Husky pre-commit hooks
- **Deployment**: Vercel or Dockerized deployment with Railway/Rende

## Features

- **File Uploads**: Supports PDF, Markdown, and Docs ingestion with a chunking and embeddings pipeline.
- **Search & Chat**: Hybrid approach combining semantic search over documents and LLM-powered conversational Q&A.
- **Responsive Design**: Built with accessibility in mind, featuring dark mode support.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Yarn or npm

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd saas-starter-kit
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Development Server

To start the development server, run:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### Building for Production

To build the application for production, run:
```
npm run build
```

### Running Tests

To run unit tests, use:
```
npm run test
```

For end-to-end tests, use:
```
npm run test:e2e
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.