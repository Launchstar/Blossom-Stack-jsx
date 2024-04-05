D#!/usr/bin/env bash
# Use this script to start a docker container for a local development database

# TO RUN ON WINDOWS:
# 1. Install WSL (Windows Subsystem for Linux) - https://learn.microsoft.com/en-us/windows/wsl/install
# 2. Install Docker Desktop for Windows - https://docs.docker.com/docker-for-windows/install/
# 3. Open WSL - `wsl`
# 4. Run this script - `./start-database.sh`

# On Linux and macOS you can run this script directly - `./start-database.sh`

# This script sets up a local Supabase instance using Docker and ensures all necessary packages are installed

 # Ensure Node.js and npm are installed
 if ! [ -x "$(command -v node)" ] || ! [ -x "$(command -v npm)" ]; then
   echo "Node.js or npm is not installed. Please install them and try again."
   exit 1
 fi

 # Install Supabase CLI globally if it's not already installed
 if ! [ -x "$(command -v supabase)" ]; then
   echo "Supabase CLI not found. Installing Supabase CLI globally..."
   npm install -g supabase
 fi

 # Check if Docker is installed and running
 if ! [ -x "$(command -v docker)" ]; then
   echo "Docker is not installed. Please install Docker and try again."
   exit 1
 fi

 if ! docker info > /dev/null 2>&1; then
   echo "Docker is not running. Please start Docker and try again."
   exit 1
 fi

 # Change directory to the root folder of your project
 cd "$(pwd)" || exit

 # Install Supabase npm package in your project if it's not already installed
 # This presumes you're in the root directory of your Node.js project
 if [ ! -f package.json ]; then
   echo "package.json not found. Initializing npm project..."
   npm init -y
 fi

 if ! npm list supabase > /dev/null 2>&1; then
   echo "Adding Supabase to your project..."
   npm add @supabase/supabase-js
 fi

 # Optional: Log in to Supabase CLI - only needed if you plan to deploy to Supabase Platform
 read -p "Do you plan to deploy your project to the Supabase Platform and need to login? (y/N): " -r loginReply
 if [[ $loginReply =~ ^[Yy]$ ]]; then
     supabase login
 else
     echo "Skipping Supabase login."
 fi

 # Create a new directory for the Supabase project at the root folder of the current project
 SUPABASE_DIR="./supabase-project"
 mkdir -p "$SUPABASE_DIR"

 # Change directory to the Supabase project directory
 cd "$SUPABASE_DIR" || exit

 # Initialize a new Supabase project
 supabase init

 # Start Supabase services using Docker
 supabase start

 echo "Supabase instance is up and running. Services can be accessed at the URLs provided above."

 # Automatically open http://localhost:54323 in the default browser after setup
 if which xdg-open > /dev/null; then
   xdg-open http://localhost:54323
 elif which gnome-open > /dev/null; then
   gnome-open http://localhost:54323
 elif which open > /dev/null; then
   open http://localhost:54323
 else
   echo "Please open http://localhost:54323 in your browser."
 fi
