import { Footer } from "flowbite-react";
import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'
import '../../Styles/HomePage/HomePage.scss'
import logo from "../../Static/Logo.png"
import { Typography, Avatar } from "@mui/material";

const FooterV2 = () => {


  return (
    <Footer container={true} className="footer-container">
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="grid items-center  sm:grid-cols-1 justify-betweenn grid-rows-1 grid-flow-col gap-1">
            <Avatar
              src={logo}
              sx={{display: {lg:"flex" , xs:"none"}, width: 100, height: 100 }}
            ></Avatar>
            <Typography
              sx={{
                mr: 2,
                display: {lg:"flex" , xs:"none"},
                fontFamily: "Roboto",
                fontWeight: "bolder",
                letterSpacing: ".1rem",
                color: "#BAE8DBff",
                textDecoration: "'none',",
                fontSize: "3rem",
                marginLeft: "2rem",
              }}
            >
              Troy
            </Typography>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:mb-auto sm:mt-4 sm:grid-cols-1 sm:gap-6 ">
            <div>
              <Typography
                sx={{
                  mr: 2,
                  display: "flex",
                  fontFamily: "Roboto",
                  fontWeight: "bolder",
                  letterSpacing: ".1rem",
                  color: "#BAE8DBff",
                  textDecoration: "'none',",
                  fontSize: "1rem",
                  // marginLeft: "0",
                }}
              >Address:</Typography>
              <Typography
                sx={{
                  mr: 2,
                  display: "flex",
                  fontFamily: "Roboto",
                  fontWeight: "bolder",
                  letterSpacing: ".1rem",
                  color: "#BAE8DBff",
                  textDecoration: "'none',",
                  fontSize: "1rem",
                  // marginLeft: "2rem",
                }}
              >1234 Random Street, New York, NY 10001</Typography>
            </div>
            <div>
            <Typography
                sx={{
                  mr: 2,
                  display: "flex",
                  fontFamily: "Roboto",
                  fontWeight: "bolder",
                  letterSpacing: ".1rem",
                  color: "#BAE8DBff",
                  textDecoration: "'none',",
                  fontSize: "1rem",
                  // marginLeft: "0",
                }}
              >Phone:</Typography>
              <Typography
                sx={{
                  mr: 2,
                  display: "flex",
                  fontFamily: "Roboto",
                  fontWeight: "bolder",
                  letterSpacing: ".1rem",
                  color: "#BAE8DBff",
                  textDecoration: "'none',",
                  fontSize: "1rem",
                  // marginLeft: "2rem",
                }}
              >(123)456-7890</Typography>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-2 sm:grid-cols-3 sm:gap-6 ">
            <div>
              <Footer.Title className="text-pallate-celeste text-lg" title="about" />
              <Footer.LinkGroup className="text-pallate-celeste text-lg" col={true}>
                <Footer.Link href="https://en.wikipedia.org/wiki/Trojan_War">
                  Troy
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-pallate-celeste" title="Follow us" />
              <Footer.LinkGroup className="text-pallate-celeste" col={true}>
                <Footer.Link href="https://github.com/IUST-Troy/Front-end">
                  Github
                </Footer.Link>
                <Footer.Link href="https://discord.com">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-pallate-celeste" title="Legal" />
              <Footer.LinkGroup col={true}>
                <Footer.Link className="text-pallate-celeste" href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link className="text-pallate-celeste" href="#">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="text-pallate-celeste" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright className="text-pallate-celeste"
            href="#"
            by="Troy™"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon className="text-pallate-celeste hover:text-pallate-celeste_light"
              href="https://facebook.com"
              icon={BsFacebook}
            />
            <Footer.Icon className="text-pallate-celeste hover:text-pallate-celeste_light"
              href="https://Instagram.com"
              icon={BsInstagram}
            />
            <Footer.Icon className="text-pallate-celeste hover:text-pallate-celeste_light"
              href="https://Github.com"
              icon={BsGithub}
            />
            <Footer.Icon className="text-pallate-celeste hover:text-pallate-celeste_light"
              href="https://Twitter.com"
              icon={BsTwitter}
            />
          </div>
        </div>
      </div>
    </Footer>)
}


export default FooterV2