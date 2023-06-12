---
# Project and Title
Project: CO225 Software Construction Project
Title: Sproutopia
---
# React Page Setup Instructions

Follow these steps to set up a React page:

## Prerequisites
- Ensure that you have Node.js and npm (Node Package Manager) installed on your system. You can check the installation by running the following commands:
    ```
    node -v
    npm -v
    ```

## Project Setup
1. Create a new React project by running the following command in your terminal:
    ```
    npm create vite
    ```
    - Then provide a name for the project (eg: my-react-page)
    - Then choose react from next step
    - Choose the language that you prefer (Javascript/ Typescript)


2. Navigate to the project directory:
    ```
    cd my-react-page
    ```
### After Creating Project or Cloning the existing Project    
3. Install project dependencies by running the following command:
    ```
    npm install
    ```

4. Start the development server:
    ```
    npm run dev
    ```

5. Open your web browser and visit `http://localhost:5173/` to see the React page.

## Customization
- Modify the `src/App.jsx` file to edit the content of the React page.
- Customize the styles in the `src/App.css` file or add additional CSS files as needed.

## Deployment
- To deploy the React page, build the optimized production-ready bundle by running the following command:
    ```
    npm run build
    ```
  The bundled files will be generated in the `build` directory, which can be deployed to a web server.

## Additional Resources
- Official React documentation: [https://reactjs.org/docs](https://reactjs.org/docs)
- React Router documentation: [https://reactrouter.com](https://reactrouter.com)
- Material-UI documentation: [https://mui.com](https://mui.com)

That's it! You are now ready to start building your React page

