import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { AppProvider } from "utils/context";

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider {...pageProps}>
      <div className="font-mono bg-gray-800	h-screen p-4">
        <Component {...pageProps} />
      </div>
    </AppProvider>
  );
}
export default App;
