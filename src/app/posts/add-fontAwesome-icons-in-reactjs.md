---
title: "How to Add FontAwesome Icons in a React.js Application"
slug: "add-fontAwesome-icons-in-reactjs"
date: "August 18, 2024"
author: "DQ"
---

React.js is one of the most popular JavaScript libraries for building user interfaces (UI). In modern web development, the use of icons is crucial to enhancing the aesthetics and navigation of a website. One of the most frequently used icon libraries is FontAwesome. In this article, we will discuss how to add FontAwesome icons to a React.js application.

#### Step 1: Installing FontAwesome

To use FontAwesome icons in React.js, you need to install the required libraries via npm. Run the following command in your terminal:

```
npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
```

Explanation:

`@fortawesome/react-fontawesome`: React library for using FontAwesome icons.
`@fortawesome/free-solid-svg-icons`: The solid icons library from FontAwesome.
`@fortawesome/fontawesome-svg-core`: The core library to use FontAwesome icons.


#### Step 2: Importing and Using Icons

Once the installation is complete, you can start using icons in your React components. First, import the icons you want to use and the FontAwesome component in your React.js file:

```jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {
return (
<div>
<h1>Welcome to the React Application</h1>
<FontAwesomeIcon icon={faCoffee} /> {/* Adding an icon */}
<p>This is an example of using FontAwesome icons in React.</p>
</div>
);
}

export default App;
```

Explanation:

FontAwesomeIcon: The React component used to display icons.
faCoffee: An example icon from FontAwesome (a coffee cup icon).
With this, you can use various FontAwesome icons in your React application.

#### Step 3: Styling the Icons

You can also add custom styles to the icons, such as changing their color or size. The example below shows how to style an icon using the `style` attribute:

```
<FontAwesomeIcon icon={faCoffee} style={{ color: 'brown', fontSize: '24px' }} />
```

Here, the icon will appear in brown color with a size of 24 pixels.

Adding FontAwesome icons to a React.js application is straightforward and can help enhance the appearance and functionality of your application. With just a few simple steps, you can start using hundreds of icons from the FontAwesome library. Feel free to explore more icons and styles to create an attractive and professional UI.