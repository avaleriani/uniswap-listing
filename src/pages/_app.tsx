import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { AppProvider } from "utils/context";

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider {...pageProps}>
      <main className="font-mono bg-gray-800	h-full w-full p-4 flex items-center justify-center">
        <div className="container">
          <Component {...pageProps} />
        </div>
      </main>
    </AppProvider>
  );
}
export default App;
