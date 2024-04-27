import ReactQueryProviders from "@/hooks/useReactQuery";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryProviders>
        <Component {...pageProps} />;
      </ReactQueryProviders>
    </QueryClientProvider>
  );
}
