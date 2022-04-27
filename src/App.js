import React from "react";
import "./App.scss";
import { PageLayout } from "./components/PageLayout";
import { MainTab } from "./components/MainTab";

function App() {
  return (
      <PageLayout>
          <MainTab/>
      </PageLayout>
  );
}

export default App;