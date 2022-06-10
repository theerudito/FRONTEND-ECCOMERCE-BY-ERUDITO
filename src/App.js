import { Layout } from "./Components/Layout/Layout";
import "./styles/app.scss";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Components/Router/Routers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
