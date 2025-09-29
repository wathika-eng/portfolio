import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "tween",
            ease: "anticipate",
            duration: 0.5
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;
