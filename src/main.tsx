import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";
import { DescriptionProvider } from "./context/description.tsx";
import { ToastProvider } from "./context/toast.tsx";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ToastProvider>
        <DescriptionProvider>
          <App />
        </DescriptionProvider>
    </ToastProvider>
    </QueryClientProvider>
    ,
  </React.StrictMode>
);
