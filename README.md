# AtomLimbs Project

This is a [Next.js](https://nextjs.org) project focused on developing advanced prosthetic technologies.

## Getting Started

Follow these steps to clone and set up the project on your local machine.

### Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 14 or later)
- [Git](https://git-scm.com/)

### Clone the Repository

Open your terminal and run the following command to clone the repository:

```bash
git clone https://github.com/axshatInd/atomlimbs-main.git
```

Navigate into the project directory:

```bash
cd atomlimbs-main
 ```

### Install Dependencies
Run the following command to install the necessary dependencies:

```bash
npm install
 ```

This will install both the dependencies and devDependencies listed in the package.json file, including:

- animejs
- cors
- express
- gsap
- next
- react
- react-dom
- @tailwindcss/postcss
- tailwindcss
### Running the Project
To start the development server, run:

```bash
npm run dev
 ```

Open http://localhost:3000 in your browser to view the application.

### Running the Node.js Server
To run the Node.js server that launches Unity Hub, open a new terminal window and navigate to the project directory. Then, run:

```bash
node server.js
 ```

This will start the server on http://localhost:3001 .

### Additional Information
- The project uses Tailwind CSS for styling.
- The FloatingDrone component provides animations using GSAP.
- The Node.js server uses Express and CORS to handle requests.