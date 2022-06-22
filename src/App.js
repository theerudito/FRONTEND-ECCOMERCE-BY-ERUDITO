import { Layout } from "./Components/Layout/Layout";
import "./styles/app.scss";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Components/Router/Routers";
import { ProviderComputer } from "./Components/Providers/ProviderComputer";

function App() {
  return (
    <>
      <ProviderComputer>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </ProviderComputer>
    </>
  );
}

export default App;
