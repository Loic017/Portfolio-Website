import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiCodepen } from "react-icons/si";

export default function AboutInfo() {
    return (
        <section className="w-full justify-center items-center mx-auto gap-6 bg-gradient-to-b from-primary/30 to-transparent p-5 rounded-lg">
            <div className="">
                <div className=""></div>
                <p className="mt-5">
                    A 3rd year undergraduate at Cardiff University with a
                    passion for Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Cupiditate sint quasi sed rem dolore
                    soluta, nulla culpa repellendus placeat quia ex corrupti.
                    Molestias, saepe quae quis minus a numquam iste.
                </p>
            </div>
        </section>
    );
}

// Original
// export default function AboutInfo() {
//     return (
//         <section className="mt-14 flex flex-col items-center w-[900px] mb-5 m-auto bg-gradient-to-b from-primary/40 to-transparent p-5 rounded-lg shadow-lg">
//             <h1 className="text-3xl font-bold mb-5">About Me</h1>
//             <div className="flex gap-7">
//                 <div className="skills"></div>
//                 <p>
//                     A 3rd year undergraduate at Cardiff University with a
//                     passion for Lorem ipsum dolor sit amet, consectetur
//                     adipisicing elit. Cupiditate sint quasi sed rem dolore
//                     soluta, nulla culpa repellendus placeat quia ex corrupti.
//                     Molestias, saepe quae quis minus a numquam iste.
//                 </p>
//             </div>
//         </section>
//     );
// }
