import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import NavBar from "../components/Navbar";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <AnimatePresence mode="wait">
       <NavBar/>
        <motion.div
          key={router}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 1.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            exitState: {
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
