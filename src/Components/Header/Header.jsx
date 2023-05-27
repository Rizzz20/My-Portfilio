import React from "react";

// Image
import Me from "../../assets/img/Rizki.png";
import CV from "../../assets/pdf/CV.pdf";

// ICON
import {
  AiFillGithub,
  AiFillYoutube,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

// CSS
import "./Header.css";

const Header = () => {
  return (
    <header className="profile container">
      <div className="profile__container grid">
        <div className="profile__data">
          <div className="profile__border">
            <div className="profile__perfil">
              {/* Image */}
              <img src={Me} alt="" />
            </div>
          </div>

          <h2 className="profile__name">Rizki Ramadhan</h2>
          <h3 className="profile__profession">Freelance</h3>

          {/* Social Media */}

          <ul className="profile__social">
            <a
              href="https://www.instagram.com/rizkir.20/"
              className="profile__social-link"
              target="_blank"
            >
              <BsInstagram />
            </a>

            <a
              href="https://github.com/Rizzz20"
              className="profile__social-link"
              target="_blank"
            >
              <AiFillGithub />
            </a>

            <a
              href="https://www.youtube.com/channel/UC-FCmQpayNB_KL3l2X3c6Ng"
              className="profile__social-link"
              target="_blank"
            >
              <AiFillYoutube />
            </a>
          </ul>
        </div>

        {/* Profile Info */}

        <div className="profile__info grid">
          <div className="profile__info-group">
            <h3 className="profile__info-number">5</h3>
            <p className="profile__info-description">
              My <br /> Template
            </p>
          </div>

          <div className="profile__info-group">
            <h3 className="profile__info-number">2</h3>
            <p className="profile__info-description">
              Completed <br /> Projects
            </p>
          </div>

          <div className="profile__info-group">
            <h3 className="profile__info-number">2</h3>
            <p className="profile__info-description">
              Happy <br /> customers
            </p>
          </div>
        </div>

        {/* Profile Buttons */}

        <div className="profile__buttons">
          <a download={CV} href="assets/pdf/CV.pdf" className="button">
            Download CV <AiOutlineCloudDownload className="icon__profile" />
          </a>

          <div className="profile__buttons-small">
            <a
              href="https://www.facebook.com/profile.php?id=100007663247764"
              target="_blank"
              className="button button__small button__gray"
            >
              <FaFacebookF className="icon__profile" />
            </a>

            <a
              href="https://www.tiktok.com/@rinneeta"
              target="_blank"
              className="button button__small button__gray"
            >
              <SiTiktok className="icon__profile" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
