import Header from "./ToDo/Header";
import { Outlet } from "react-router-dom";
import { SocialMediaContextProvider } from "./ToDo/store/SocialMediaContext";

function App() {
  return (
    <SocialMediaContextProvider>
      <Header />
      <Outlet />
    </SocialMediaContextProvider>
  );
}

export default App;
