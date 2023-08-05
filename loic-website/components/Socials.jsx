import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiCodepen } from "react-icons/si";

export default function Socials() {
    return (
        <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-28 mt-3">
            <div className="flex flex-row justify-between items-center w-28 mx-auto">
                <a href="https://github.com/Loic017">
                    <BsGithub className="socials" />
                </a>
                <a href="https://www.linkedin.com/in/lemoineloic/">
                    <BsLinkedin className="socials" />
                </a>
                <a href="https://codepen.io/loic017">
                    <SiCodepen className="socials" />
                </a>
            </div>
        </header>
    );
}
