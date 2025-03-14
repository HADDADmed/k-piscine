# WEEK 4 : Web Developement : Frontend & Devops/Agile & Orga

### **JavaScript Module Bundlers Overview**

- **Purpose**: Combine multiple JavaScript files into a single, production-ready file for efficient browser loading.
- **Benefits**:
    - Simplifies dependency management.
    - Optimizes performance (e.g., code splitting, hot module replacement).
    - Enhances developer productivity with error logging and debugging tools.

### **How Bundlers Work**

1. **Dependency Graph Generation**:
    - Starts from an entry file and maps all dependencies.
    - Assigns unique IDs to files to avoid naming conflicts.
    - Detects unused files for optimization.
2. **Bundling**:
    - Combines files into a single executable bundle.
    - Ensures proper dependency order for browser execution.

---

### **Top 5 JavaScript Module Bundlers**

1. **Webpack**:
    
    ![image.png](image.png)
    
    - **Pros**: Multi-resource support (JS, CSS, images), extensive plugin ecosystem, robust optimization features (e.g., code splitting, HMR).
    - **Cons**: Complex configuration, steep learning curve, can be slow and buggy.
2. **Browserify**:
    
    ![image.png](image%201.png)
    
    - **Pros**: Simple, integrates Node.js `require()` for browser use, easy to learn.
    - **Cons**: No multi-resource support, lacks advanced optimization features.
3. **Parcel**:
    
    ![image.png](image%202.png)
    
    - **Pros**: Zero configuration, fast, supports multiple assets (JS, CSS, HTML).
    - **Cons**: Limited advanced customization for complex apps.
4. **Fusebox**:
    
    ![image.png](image%203.png)
    
    - **Pros**: Fast, lightweight, excellent developer experience, supports TypeScript.
    - **Cons**: Limited multi-asset support, smaller ecosystem compared to Webpack.
5. **Rollup**:

![image.png](image%204.png)

- **Pros**: Tree-shaking for removing unused code, native ES6 module support, optimized for smaller bundles.
- **Cons**: Limited plugin ecosystem, less suitable for large, complex apps

### **Honorary Mention: Vite.js**

![image.png](image%205.png)

- **Pros**:
    - Extremely fast (leverages ES modules and esbuild).
    - Multi-framework support (React, Vue, TypeScript, etc.).
    - Rich plugin ecosystem.
- **Cons**:
    - Relies on modern browsers with ESM support.
    - Limited compatibility with older browsers.

## Creating our First Web App using React and Webpack ;

The project Structiur 

![image.png](image%206.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>React + Webpack</title>
    <script defer="defer" src="main.js"></script>
  </head>
  <body>
    <body>
        <div id="root"></div>
    </body>
   
  </body>
</html>

```

```jsx

const Hello = () => {
    return <div>Hello, webpack! From Keiken !</div>;
    }

export default Hello;
```

```jsx
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  },
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js|jsx)$/,         // <-- added `|jsx` here
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ["*", ".js", ".jsx"], // <-- added `|jsx` here
  },
};

```

![image.png](image%207.png)

Now to Practice the React Ill create a React app using the Vite and i ll use the Typscript : 

![image.png](image%208.png)

and instaling all the dependancies: 

![image.png](image%209.png)

![image.png](image%2010.png)

![image.png](image%2011.png)

and Now lets create our first Component : 

![image.png](image%2012.png)

![image.png](image%2013.png)

Lets Import it in the main file App.tsx 

![image.png](image%2014.png)

its quite Simple Right ?

Conditional rendreing in a component : 

![image.png](image%2015.png)

![image.png](image%2016.png)

![image.png](image%2017.png)

![image.png](image%2018.png)

Now i would love to learn about the Jsx and how converting it into 

here is some Html code 

```html
<div class="intro">
<h1>Welcome to my website!</h1>
</div>
<p class="summary">
You can find my thoughts here.
<br><br>
<b>And <i>pictures</b></i> of scientists!
</p>
```

here is how we convertit : 

![image.png](image%2019.png)

![image.png](image%2020.png)

![image.png](image%2021.png)

![image.png](image%2022.png)

![image.png](image%2023.png)

![image.png](image%2024.png)

the useState React

![image.png](image%2025.png)

### **Introduction to State**

- **Purpose**: Allows components to "remember" data between renders (e.g., form input, image carousel index).
- **Problem with Regular Variables**:
    - Changes don’t persist across re-renders.
    - Updates don’t trigger re-renders.

---

### **Using `useState` Hook**

- **Syntax**:
    
    ```jsx
    const [stateVariable, setStateFunction] = useState(initialValue);
    ```
    
- **Mechanics**:
    - **Initialization**: `useState(0)` sets initial value (e.g., `index = 0`).
    - **Returns Pair**: Current state value + setter function (`[index, setIndex]`).
    - **Updates**: Calling `setIndex(newValue)` triggers re-render with new state.
- **Example**:
    
    ```
    const [index, setIndex] = useState(0);
    const handleClick = () => setIndex(index + 1); // Updates index & re-renders
    ```
    

---

### **Rules for Hooks**

- **Naming Convention**: `const [something, setSomething]`.
- **Hook Usage**:
    - Only call Hooks (e.g., `useState`) **at the top level** of components.
    - Never inside loops, conditions, or nested functions.

---

### **Multiple State Variables**

- **Independent States**: Use separate `useState` calls for unrelated data (e.g., `index` and `showMore`).
    
    ```
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    ```
    
- **Related States**: Combine into a single object if frequently updated together (e.g., form fields).

---

### **State Isolation & Privacy**

- **Component-Specific**: State is local to each component instance.
    - Rendering `<Gallery />` twice creates two independent states.
- **Private**: Parent components can’t access or modify a child’s state.
- **Sharing State**: Lift state to a shared parent component if synchronization is needed.

---

### **Key Takeaways**

- **Why State?**: Persists data across renders and triggers UI updates.
- **`useState` Workflow**:
    1. Initialize state.
    2. Use state variable in JSX.
    3. Update state with setter function.
- **Hooks**: Enable React features like state; follow strict usage rules.
- **State Design**: Keep states minimal and organized for maintainability.

---

**Example**:

```jsx
function Gallery() {
  const [index, setIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <button onClick={() => setIndex(index + 1)}>Next</button>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide' : 'Show'} Details
      </button>
    </>);
}
```

Props in React : 

this the List component

```tsx
import { useState } from "react";

interface ListGroupProps {
  lists: string[];
  onSelected: (item: string) => void;
}

function ListGroup({ lists , onSelected }: ListGroupProps) {
  let [selectedInddex, setSelectedInddex] = useState(0); ////// useState Hook

  const listEmtpyMessage2 = lists.length === 0 && (
    <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
      No items found
    </li>
  );

  return (
    <>
      <h1 className="h1 m-3 text-lg bold ">List of items</h1>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {listEmtpyMessage2}
        {lists.map((list, index) => (
          <li
            onClick={() => {
              setSelectedInddex(index);
              onSelected(list);
            }}
            key={list}
            className={
              selectedInddex == index
                ? "block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200  m-1 cursor-pointer dark:bg-gray-800 dark:border-gray-600"
                : "w-full px-4 py-2 border-b border-gray-200 rounded-t-lg m-1 dark:border-gray-600"
            }
          >
            {list}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;

```

and this is the App.tsx

```tsx
import ListGroup from "./components/ListGroup";

function App() {
  const lists = ["Profile", "Settings", "Messages", "Download"];

  const onSelected = (item: String) => {
    console.log("Selected item: ", item);
  };

  return (
    <div>
      <ListGroup lists={lists} onSelected={onSelected} />
    </div>
  );
}

export default App;

```

![image.png](image%2026.png)

## **childrens**:

### **1. What Are Children?**

- **Prop Name**: `children` is a special prop passed to components.
- **Content**: Represents elements/components nested between a component's opening and closing tags.
    
    
    ```
    <Parent> <Child /> </Parent> // `Child` is `children` in `Parent`
    ```
    

---

### **2. Accessing Children**

- **Via Props**: Accessible via `props.children` in functional components.
    

    ```
    const Parent = (props) => <div>{props.children}</div>;
    ```
    

---

### **3. Rendering Children**

- **Direct Rendering**: Inject children into JSX.
    
    
    ```
    const Card = ({ children }) => <div className="card">{children}</div>;
    ```
    

---

### **4. Composition Patterns**

- **Layout Components**: Use children to build reusable layouts (e.g., modals, grids).
    
    
    ```
    <Modal> <Form /> </Modal>
    ```
    
- **Wrapper Components**: Wrap children with styles or logic (e.g., hover effects, themes).
    
    
    ```
    <ThemeProvider> <App /> </ThemeProvider>
    ```
    

---

### **5. Manipulating Children**

- **React.Children Utilities**:
    - `React.Children.map(children, fn)`: Safely iterate over children (handles arrays, single elements).
    - `React.Children.count(children)`: Count the number of children.
    
    
    ```
    const List = ({ children }) => (
      <ul>
        {React.Children.map(children, (child) => (
          <li>{child}</li>))}
      </ul>);
    ```
    
- **Cloning Elements**: Modify children with props using `React.cloneElement`.
    
    
    ```
    const EnhancedChild = React.cloneElement(child, { newProp: "value" });
    ```
    

---

### **6. Function as Children (Render Props)**

- **Dynamic Content**: Pass a function to `children` for dynamic rendering.
    
    
    ```
    <DataFetcher>
      {(data) => <div>{data}</div>}
    </DataFetcher>
    ```
    
    ```
    const DataFetcher = ({ children }) => {
      const data = fetchData();
      return children(data);
    };
    ```
    

---

### **7. Validating Children**

- **PropTypes**: Restrict allowed child types.
    
    
    ```
    import PropTypes from 'prop-types';
    Parent.propTypes = { children: PropTypes.element };
    ```
    

---

### **8. Key Notes**

- **Children Can Be Any Type**: Strings, elements, arrays, fragments, or functions.
- **Immutable**: Children are read-only. Use `React.cloneElement` to modify them.
- **Empty Children**: Check `children` exists before rendering.

    
    ```
    {children || <FallbackComponent />}
    ```
    

---

### **Example: Reusable Card Component**



```
const Card = ({ children, title }) => (
  <div className="card">
    <h2>{title}</h2>
    <div className="content">{children}</div>
  </div>);

// Usage:
<Card title="Profile">
  <p>Name: John Doe</p>
  <button>Edit</button>
</Card>
```

## **childrens**:

![image.png](image%2027.png)

![image.png](image%2028.png)

![image.png](image%2029.png)

the Alert component

```tsx
import React from "react";

interface AlertProps {
  children: React.ReactNode;
}

function Alert({ children }: AlertProps) {
  return (
    <div
      className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <svg
        className="shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">Danger alert!</span> Change a few things
        up and try submitting again.
        {children}
      </div>
    </div>
  );
}

export default Alert;

```
