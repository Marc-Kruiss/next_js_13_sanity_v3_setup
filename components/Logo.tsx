import Image from "next/image";
import "../styles/globals.css";
import studioLogo from "../public/images/logo.png";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        src={studioLogo}
        alt="logo"
        className="rounded-full object-cover"
        width={50}
        height={50}
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
