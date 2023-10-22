import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./Page/App";
import Blog from "./Page/BlogList";
import BlogPage from "./Page/BlogPage";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPage />} />
    </Routes>
  </BrowserRouter>
);

