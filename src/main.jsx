import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### **📄 Move `app.jsx` into `src` folder**

Move your existing `app.jsx` file into the `src` folder.

---

## **Your New File Structure Should Be:**
```
flushforce-landing/
├── src/
│   ├── main.jsx    (NEW FILE)
│   └── app.jsx     (MOVED HERE)
├── package.json
├── index.html      (UPDATED)
├── .gitignore
└── README.md
