import React from "react";
import { Parallax } from "react-parallax";

import Header from "../NavigationBar/Header";
import Navbar from "../NavigationBar/Navbar";
// import Footer from "./Footer";
import FooterV2 from "./FooterV2";
import "../../Styles/HomePage/HomePage.scss";
import Wallpapet1 from "../../Static/Wallpaper1.jpg";
import Wallpapet2 from "../../Static/Wallpaper2.jpg";
import Wallpapet3 from "../../Static/Wallpaper3.jpg";

const Wallpaper = ({ bgImage, content }) => {
    return (
        <Parallax className="image"
            bgImage={bgImage}
            strength={800}
            blur={4.5}
            // bgImageStyle={{ minHeight: "100vh" }}
        >
            <div className="content">
                <span className="img-txt">{content}</span>
            </div>
        </Parallax>
    );
};

const TextBox = () => {
    return (
        <div className="text-box">
            <h3>Lorem</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores doloribus accusantium, quam odio repudiandae mollitia
                eos sapiente quo labore magnam, dignissimos praesentium
                blanditiis ratione error expedita, incidunt rerum corrupti modi
                enim commodi maxime veniam! Eius repellendus voluptates ducimus
                perspiciatis officiis adipisci quibusdam amet, officia omnis
                quas id minus ipsam, aliquam qui voluptas quo veritatis dolores
                vero magnam inventore sed numquam dignissimos a nisi. Tempore
                dolorem provident illo natus velit temporibus fugiat odio
                aperiam a sunt et harum autem sequi officiis quos distinctio
                quis nihil, modi eveniet commodi animi non accusantium! Nesciunt
                ut voluptatibus cumque et doloribus nihil impedit odio sed.
            </p>
        </div>
    );
};

const HomePage = ({accessToken , RefreshToken}) => {
    return (
        <>
            <Header />
            <Navbar />
            <div>
                <Wallpaper bgImage={Wallpapet1} content="Hello 1" />
                <TextBox />
                <Wallpaper bgImage={Wallpapet2} content="Hello 2" />
                <TextBox />
                <Wallpaper bgImage={Wallpapet3} content="Hello 3" />
            </div>
            <FooterV2/>
            
        </>
    );
};

export default HomePage;
