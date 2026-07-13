# SOSPRO-S5 Development Guide

## Prerequisites

Install Python (preferably version 3.12 or higher) on your system.

## Installation

### Windows

Simply install the required dependencies using pip:

```bash
pip install -r requirements.txt
```

### Linux/Mac

Create and use a virtual environment for better dependency management:

1. Create a virtual environment:
   ```bash
   python3 -m venv .venv
   ```

2. Activate the virtual environment:
   ```bash
   source .venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Deactivate the virtual environment (when done):
   ```bash
   deactivate
   ```

## VS Code Setup

If you're using VS Code with a virtual environment, make sure to:
- Open the entire project folder in VS Code
- This ensures VS Code automatically detects and uses the virtual environment interpreter

## Running the Application

### Without Virtual Environment (Windows)

```bash
python3 ./main.py
```

### With Virtual Environment (Linux/Mac)

1. Activate the virtual environment:
   ```bash
   source .venv/bin/activate
   ```

2. Run the main file:
   ```bash
   python3 ./main.py
   ```

## Accessing the Application

Once the application is running, visit:
```
http://localhost:7004
```

The application will be available at this local address.

## Project Structure

This project is designed with modularity in mind to support collaborative development where multiple team members can work simultaneously without conflicts.

### Pages

The project consists of 4 main pages:
- **main** - Homepage
- **about_us** - About us page
- **event** - Events page
- **pacil** - Pacil page

### Modular HTML Structure

Each page's content is broken down into modular HTML sections for easy maintenance and collaboration:

```
/templates/sections/
├── main_sections/          # Homepage sections
├── about_us_sections/      # About us page sections
├── event_sections/         # Events page sections
└── pacil_sections/         # Pacil page sections
```

To modify a page, simply navigate to `/templates/sections` and open the corresponding folder. You'll find all the HTML sections that make up that page arranged in order.

### Styling

Add CSS styles by placing `.css` files in:
```
/templates/styles/
```

**Important:** CSS files placed here will automatically apply globally across all pages. Make sure to use unique class names to avoid conflicts with your teammates.

### Scripts

Add JavaScript functionality by placing `.js` files in:
```
/templates/scripts/
```

JavaScript files placed here will automatically apply across all pages.

### Header and Footer

Common page elements (header and footer) are located in:
```
/templates/crumbs/
```

This modular structure allows team members to work on different sections, styles, and scripts simultaneously without stepping on each other's work.

## Git Workflow

### Collaboration Process

This project uses a fork-based collaboration workflow:

1. **Fork the repository** from the main branch
2. **Make your changes** in your forked repository
3. **Submit a pull request** to the main branch when ready

### Branch Structure

The project maintains two primary branches:

- **main** - Development branch where all pull requests are merged
- **production** - Live server branch containing filtered, production-ready code

The production branch is kept separate from main to allow for code review and filtering before changes go live on the server. Only approved and tested changes from the main branch are merged into production for deployment.

## Docker (Optional)

Docker provides an optional way to run the project without installing dependencies directly on your host system.

### Getting Started

Clone the repository:

```bash
git clone <repository-url>
cd <repository-directory>
```

Build the image and start the application:

```bash
docker compose up -d --build
```

This command builds the Docker image (if necessary) and starts the application in the background.

### Stopping the Application

To stop and remove the containers, run:

```bash
docker compose down
```

This stops the application and removes the containers created by Docker Compose. Any named volumes will be preserved unless explicitly removed.