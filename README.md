### Overview

1. **State Management**:
   - `cities` state holds the fetched city data.
   - `isLoading` state indicates whether the data is currently being loaded.

2. **Data Fetching**:
   - `useEffect` hook fetches city data from `http://localhost:9000/cities` when the component mounts.
   - If the data fetch is successful, it updates the `cities` state. If there is an error, an alert is displayed.

3. **Routing**:
   - **Main Routes**:
     - `/` (HomePage)
     - `/product` (Product)
     - `/pricing` (Pricing)
     - `/login` (Login)
   - **Nested Routes** within the `AppLayout`:
     - Default nested route redirects to `/app/cities`.
     - `/app/cities` (CityList) - Displays a list of cities.
     - `/app/cities/:id` (City) - Displays details for a specific city.
     - `/app/countries` (CountryList) - Displays a list of countries derived from the cities data.
     - `/app/form` (Form) - A form component for additional user input.
   - **Fallback Route**:
     - Any undefined route redirects to the `PageNotFound` component.

### Key Components

- **AppLayout**: Serves as the parent layout for the nested routes under `/app`.
- **CityList**: Displays the list of cities, with `cities` and `isLoading` passed as props.
- **CountryList**: Displays the list of countries, also using `cities` and `isLoading` as props.
- **City**: Displays details of a specific city, accessed via a dynamic route parameter.
- **Form**: A form component for user interaction.
- **PageNotFound**: A fallback component displayed for any undefined routes.

### Example Usage

To run this application, ensure you have the necessary components (HomePage, Product, Pricing, etc.) and a backend server running at `http://localhost:9000` serving the city data.

This setup provides a robust structure for a multi-page React application with nested and dynamic routes, ensuring a smooth navigation experience for the user.
------------------------------------------------------------------


# Package.json

Here's a description for your `README.md` based on the provided `package.json` configuration:

---

# Worldwise

Worldwise is a React application that provides an interactive map experience using Leaflet and React-Leaflet. This project leverages modern web development tools such as Vite for fast builds and development, ESLint for code quality, and React Router for navigation. The project also uses JSON Server to simulate a backend API, making it easy to work with mock data.

## Features

- **Interactive Maps**: Integrate maps with Leaflet and React-Leaflet for a dynamic user experience.
- **Date Selection**: Use React-Datepicker for easy date selection.
- **Routing**: Navigate through the application seamlessly with React Router.
- **Mock API**: Utilize JSON Server to simulate backend responses for development and testing.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 7.x)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd worldwise
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

- Start the development server:
  ```bash
  npm run dev
  ```

- Run the JSON Server:
  ```bash
  npm run server
  ```

### Building for Production

To create a production build, run:

```bash
npm run build
```

### Linting

Ensure your code meets the project's standards:

```bash
npm run lint
```

## Scripts

- **`npm run dev`**: Starts the Vite development server.
- **`npm run build`**: Builds the application for production.
- **`npm run preview`**: Previews the production build.
- **`npm run server`**: Starts the JSON Server with a delay for simulating network latency.
- **`npm run lint`**: Runs ESLint to check for code quality issues.

## Dependencies

- **React**: ^18.3.1
- **Leaflet**: ^1.9.4
- **React-Leaflet**: ^4.2.1
- **React-Router-Dom**: ^6.25.1
- **React-Datepicker**: ^7.3.0
- **JSON Server**: 0.17.0

## Dev Dependencies

- **Vite**: ^4.0.0
- **ESLint**: ^8.57.0
- **ESLint Plugins for React**: Various plugins for linting React code.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

