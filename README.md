# Mobifone Data Map System

A modern web application for Mobifone's data mapping system, built with React, TypeScript, and modern web technologies.

## Features

- User authentication with OTP verification
- Modern and responsive UI using TailwindCSS and Shadcn UI
- Form validation using React Hook Form and Zod
- State management with Zustand
- Accessibility-first design
- Error handling and boundary protection
- Unit and integration testing

## Tech Stack

- React 19
- TypeScript
- TailwindCSS
- Shadcn UI
- React Query
- Zustand
- Zod
- React Router Dom
- React Hook Form
- Axios
- Vitest for testing

## Getting Started

### Prerequisites

- Node.js 18 or higher
- Yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=http://your-api-url
   ```

4. Start the development server:
   ```bash
   yarn dev
   ```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build:

```bash
yarn build
```

The build output will be in the `dist` directory.

### Running Tests

To run the test suite:

```bash
yarn test
```

For test coverage:

```bash
yarn test:coverage
```

## Project Structure

```
/my-app
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/          # Page components
│   ├── routes/         # Route configurations
│   ├── services/       # API services
│   ├── store/          # Global state management
│   ├── tests/          # Test utilities and setup
│   └── utils/          # Utility functions
├── .env                # Environment variables
└── README.md           # Project documentation
```

## Development Guidelines

- Follow the component-driven development approach
- Write tests for all new features
- Ensure accessibility compliance
- Use TypeScript for type safety
- Follow the established project structure
- Keep components small and focused
- Use proper error handling
- Document new features and changes

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Write or update tests
4. Submit a pull request

## License

This project is proprietary and confidential.

## Support

For support, please contact the development team.