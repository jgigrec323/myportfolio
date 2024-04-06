import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";
import "./styles/index.scss"



export const metadata = {
  title: "Jean Galant",
  description: "Portfolio of Jean Galant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <div className="mainBg">
            <div className="radialgradient">
              <Navbar></Navbar>
              {children}
              <Footer></Footer>
            </div>
          </div>
        </SmoothScroll>
      </body>

    </html>
  );
}
