# DevTools Clone

This project is a clone of the network tab of browser developer tools, built using React, Redux, TailwindCSS, and Vite. It simulates network requests and provides details like headers, previews, and responses.

## Features

- Display of network requests with filtering options.
- Detailed view of request headers, previews, and responses.
- Simulated network requests for testing purposes.
- Styled using TailwindCSS.

## Installation

### Live Link:
  <a href="https://devtools-clone.vercel.app/"> Live Link </a>

1. Clone the repository:
    ```bash
    git clone https://github.com/Sakil9051/devtools-clone.git
    cd devtools-clone
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. You will see a list of simulated network requests.
3. Click on a request to see its details, including headers, previews, and responses.

## Project Structure

- devtools-clone/
  - src/
    - components/
      - NetworkMonitor.jsx
      - RequestDetails.jsx
    - store/
      - index.js
      - requestSlice.js
    - App.jsx
    - index.css
    - main.jsx
  - tailwind.config.js
  - postcss.config.js
  - package.json
  - vite.config.js
  - README.md




### NetworkMonitor

Displays a table of network requests with filtering options.

### RequestDetails

Displays detailed information about the selected network request, including headers, previews, and responses.

## Redux Store

### requestSlice

Manages the state of network requests, including adding new requests, setting filters, and selecting requests for detailed view.

## Simulated Network Requests

Simulated network requests are generated in the `App.jsx` file for testing purposes. These requests include different types such as XHR, CSS, IMG, FONT, DOC, MEDIA, JS, MANIFEST, WS, WASM, and OTHER.

Example of simulated requests:

```jsx
const requests = [
  {
    url: 'https://api.example.com/data',
    type: 'xhr',
    status: 200,
    size: '1.2MB',
    time: '260ms',
    initiator: 'script.js',
    headers: {
      general: { url: 'https://api.example.com/data', method: 'GET' },
      response: { 'content-type': 'application/json', 'cache-control': 'no-cache' },
      request: { 'user-agent': 'Mozilla/5.0', accept: 'application/json' },
    },
    response: { message: 'Success', data: [1, 2, 3] },
    preview: { message: 'Success', data: [1, 2, 3] },
  },
  {
    url: 'https://api.example.com/style.css',
    type: 'css',
    status: 200,
    size: '177B',
    time: '32ms',
    initiator: 'index.html',
    headers: {
      general: { url: 'https://api.example.com/style.css', method: 'GET' },
      response: { 'content-type': 'text/css', 'cache-control': 'max-age=31536000' },
      request: { 'user-agent': 'Mozilla/5.0', accept: 'text/css' },
    },
    response: 'body { background: #fff; }',
    preview: 'body { background: #fff; }',
  },
];



## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **React-Redux**: Official React bindings for Redux.
- **React-Table**: A lightweight, fast, and extendable data grid built for React.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **Vite**: A fast build tool for modern web projects.


## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
