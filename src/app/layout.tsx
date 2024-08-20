import React from "react";
import "./styles/global.scss";
import { Poppins,  Noto_Sans } from "next/font/google";

import Providers from "./redux/Providers"  // This is the Providers coming from Redux store...
import TopBar from "@/components/common/top_bar/TopBar"; 
import SideBar from "@/components/common/side_bar/SideBar";
import Footer from "@/components/common/footer/Footer";
const poppins = Poppins(
  {
    weight: "400",
    subsets: ["latin"],
  }
);
const noto_Sans = Noto_Sans(
  {
    weight: "400",
    subsets: ["latin"],
  }
);
export const metadata = {
  title: "Orbit Minds - Blogs & Information",
  description:
    "This is the blogging app for the Galaxy Blog, which includes all the information related to the Real time news Stories and News",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto_Sans.className}>
        {/* Here in Providers we're using Redux for the whole Application... */}
        <Providers>   
          <div className="app-container">
            <TopBar />
            <div className="main-content-container">
              <div className="content-wrapper">
                {children}

                {/* Make research why are we using React.Fragment here... */}
                <React.Fragment>
                  <Footer />
                </React.Fragment>
              <SideBar />
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
};
