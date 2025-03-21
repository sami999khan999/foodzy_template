import { footerData } from "@/lib/data";
import { FiPhone } from "react-icons/fi";
import { RiMailSendLine } from "react-icons/ri";
import { TiLocationOutline } from "react-icons/ti";
import Logo from "./Logo";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-foreground">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row gap-4 py-[5rem] justify-between">
          <div className="lg:w-[30%]">
            <FooterMain />
          </div>
          <div>
            <FooterLinks title={"Company"} links={footerData.company} />
          </div>
          <div>
            <FooterLinks title={"Category"} links={footerData.category} />
          </div>
          <div className="lg:w-[30%]">
            <FooterNewsLetter />
          </div>
        </div>
        <div className="border-t border-border-color py-7"></div>
      </div>
    </div>
  );
};

export default Footer;

const FooterMain = () => {
  return (
    <div className="text-muted/50 space-y-4">
      <div className="mb-7">
        <Logo />
        <p>{footerData.description}</p>
      </div>
      <div className="flex item gap-3">
        <TiLocationOutline className="text-primary shrink-0" size={25} />
        {footerData.location}
      </div>
      <div className="flex item gap-3">
        <RiMailSendLine className="text-primary" size={20} />
        {footerData.email}
      </div>
      <div className="flex item gap-3">
        <FiPhone className="text-primary" size={20} />
        {footerData.phone}
      </div>
    </div>
  );
};

type FooterLinksType = {
  title: string;
  links: Array<{ name: string; path: string }>;
};

const FooterLinks = ({ title, links }: FooterLinksType) => {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
      <p className="text-xl font-semibold">{title}</p>
      <div className="flex flex-col gap-4">
        {links.map((link, i) => (
          <Link
            key={i}
            className="text-muted/50 hover:text-primary duration-300"
            href={link.path}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

const FooterNewsLetter = () => {
  return (
    <div className="space-y-4">
      <p className="text-xl font-semibold">Subscribe Our Newsletter</p>
      <div className="bg-background border border-border-color flex justify-between items-center py-2.5 px-4 rounded-md w-full">
        <input
          type="text"
          placeholder="Search here..."
          className="border-0 outline-0"
        />
        <FaLocationArrow />
      </div>

      <div className="flex gap-3">
        {footerData.socialmedia.map((item, i) => (
          <Link
            key={i}
            href={item.path}
            className="p-2 bg-background border border-border-color text-lg hover:bg-primary rounded-md hover:text-foreground duration-100"
          >
            {item.logo}
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {footerData.images.map((img, i) => (
          <div
            key={i}
            className="relative h-[74px] aspect-square rounded-md overflow-hidden"
          >
            <Image src={img} objectFit="contain" layout="fill" alt="Img" />
          </div>
        ))}
      </div>
    </div>
  );
};
