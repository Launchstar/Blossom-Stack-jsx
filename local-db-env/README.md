`# Local Development Setup with Supabase

This guide provides detailed instructions on how to set up Supabase for local development. It covers the use of a custom bash script for initializing your Supabase project and a `schema.sql` file to define your database schema.

## Why Develop Locally with Supabase?

While the Supabase Dashboard is great for quick setups and small projects, local development offers several advantages:

- **Faster Development**: Local development eliminates network latency, offering a smoother development experience.
- **Easier Collaboration**: Teams can work on the same project simultaneously without interfering with each other's work.
- **Cost-Effective**: The Supabase free tier has limits, but local development allows for unlimited project setups.
- **Configuration in Code**: Changes made via the Dashboard are not reflected in your codebase. Local development ensures your project's configuration is codified.
- **Work Offline**: Develop anywhere, even without an internet connection, by setting up your project locally.

## Prerequisites

- [Docker](https://docs.docker.com/engine/install/) installed and running.
- [Node.js and npm](https://nodejs.org/) installed.
- [Supabase CLI](https://supabase.com/docs/reference/cli/installing-and-updating) installed globally.

## Getting Started

1. **Clone this Repository**: Start by cloning this repository to your local machine. It includes essential files for setting up your local Supabase environment.

2. **Run the Setup Script**: Inside the repository, you'll find a bash script named `setup-supabase.sh`. This script automates the installation of necessary packages, initializes your Supabase project, and starts the Supabase services. Execute the script by running:

   ```bash
   ./start-database.sh `

The script performs the following actions:

-   Ensures Docker, Node.js, npm, and the Supabase CLI are installed.
-   Installs the Supabase npm package in your project.
-   Initializes a new Supabase project and starts the local Supabase services.
-   Optionally logs you into the Supabase CLI (useful if you plan to deploy to the Supabase Platform).

1.  Load Custom Schema: After setting up the Supabase instance, you can load your custom database schema. A `schema.sql` file is included in the repository for this purpose. You can modify this file to define your database schema. To load the schema into your local Supabase database, run:

    bashCopy code

    `supabase db restore schema.sql`

2.  Accessing Your Local Supabase Instance: Once the setup is complete, you can access your local Supabase Dashboard at `http://localhost:54323`. Use the credentials output by the script to log in and manage your project.

3.  Database Migrations: Managing database changes through migrations ensures a reliable and trackable way to modify your database schema over time. Watch this video for a comprehensive guide on handling database migrations with Supabase: [Database Migrations with Supabase](https://youtu.be/Kx5nHBmIxyQ).

Accessing the Database
----------------------

Your local Postgres instance is accessible at `postgresql://postgres:postgres@localhost:54322/postgres`. Use `psql` or any Postgres client to interact with your database:

bashCopy code

`psql 'postgresql://postgres:postgres@localhost:54322/postgres'`

For edge functions in your local Supabase setup, replace `localhost` with `host.docker.internal` to access the database.