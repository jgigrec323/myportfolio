import Navbar from "./components/Navbar";
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
        <div className="mainBg">
          <div className="radialgradient">


            <Navbar></Navbar>
            {children}
          </div>

        </div>

      </body>
    </html>
  );
}
