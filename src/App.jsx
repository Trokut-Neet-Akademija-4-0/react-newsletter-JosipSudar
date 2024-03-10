import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PropTypes } from "prop-types";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainComponent from "./components/MainComponent";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<MainComponent title={"Home"} desc={"Home Page"} />}
          />
          <Route
            path="/about"
            element={<MainComponent title={"About"} desc={"About Page"} />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:name" element={<SingleBlog />} />
          <Route
            path="/contact"
            element={<MainComponent title={"Contact"} desc={"Contact Page"} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
