Blossom-Stack
=============

Blossom-Stack is a modern, fast, and efficient development stack designed for building scalable and maintainable web applications. It combines the power of Vite, React, SWC, TailwindCSS, DaisyUI, and Supabase to offer a seamless development experience right from the start. This stack is perfect for developers looking to leverage the latest technologies in the JavaScript ecosystem.

Features
--------
[![My Skills](https://skillicons.dev/icons?i=react,vite,postgres,tailwind,npm)](https://skillicons.dev) 

-   Vite: Utilizes Vite for an ultra-fast development server and build tool, significantly improving the development experience with hot module replacement (HMR) and optimized build times.
-   React: Builds user interfaces with React, enabling developers to create complex UIs from isolated pieces of code called components.
-   SWC: Employs SWC as a super-fast compiler that allows quick transpilation of modern JavaScript/TypeScript features for compatibility with older browsers.
-   TailwindCSS: Integrates TailwindCSS for utility-first CSS, facilitating rapid UI development without leaving your HTML.
-   DaisyUI: Incorporates DaisyUI, a TailwindCSS plugin that provides beautiful UI components, making the application visually appealing with minimal effort.
-   Supabase: Includes a Supabase starter to set up a scalable backend with authentication, database, and real-time subscriptions out of the box.

Getting Started
---------------

### Quick Start with CLI

To quickly start a new project with Blossom-Stack, you can use the `blossom-stack-jsx` CLI tool:

1. Install the CLI tool:

`npm install -g @blossomdevs/blossom-stack-jsx`

2. Create a new project:

`blossom-stack-jsx create my-blossom-project.`

This command clones the Blossom-Stack repository, sets up a new project named `my-new-project`, and installs all dependencies.

### Prerequisites

-   Node.js (v14.0.0 or higher)
-   npm (v6.0.0 or higher)

### Manual Installation

If you prefer not to use the CLI tool, follow these manual setup steps:

1.  Clone the repository:

 ```
 git clone https://github.com/alexeiddg/Blossom-Stack.git
 ```

2.  Navigate into the project directory:

 ```
 cd Blossom-Stack
 ```

3.  Install dependencies:

 ```
 npm install
 ```

4.  Start the development server:

 ```
 npm run dev
 ```

Your application will be available at `http://localhost:5173/`.

### Database Setup

1.  Navigate to the `local-db-env` directory:

 ```
 cd local-db-env
 ```

2.  Start the local database environment (ensure Docker is installed):

 ```
 ./start-database.sh
 ```

Your database Dashboard will be available at `http://localhost:54323`.

3.  Apply the schema to your database:

 ```
 psql -U postgres -d your_db_name -a -f schema.sql
 ```
or use the Supabase dashboard to create the schema.

### Building for Production

To create a production build, run:

`npm run build`

This command generates a `dist/` folder with your optimized application assets, ready to be deployed.

Folder Structure
----------------

```
Blossom-Stack/
├── public/                      # Static assets like images and icons
│   └── favicon.ico              # Favicon
├── src/                         # Source files
│   ├── assets/                  # Module assets like images and fonts
│   ├── components/              # UI components
│   │   ├── card.jsx             # Example component
│   │   └── ...
│   ├── pages/                   # Page components
│   ├── app.jsx                  # Main React component
│   └── main.jsx                 # Entry point for React app
├── local-db-env/                # Local database environment setup
│   ├── schema.sql               # Database schema
│   └── start-database.sh        # Script to start the local database
├── .gitignore                   # Specifies intentionally untracked files to ignore
├── index.html                   # Entry point for the application
├── package.json                 # Project manifest
├── README.md                    # Project documentation
└── vite.config.js               # Configuration for Vite
```

License
-------

This project is open-source and available under the MIT License. See the LICENSE file for more information.
