import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="relative bg-cover bg-center text-white"
                style={{ backgroundImage: "url('/bg-dark.jpg')" }} // ✅ background image
            >
                {/* Top Section */}
                <div className="relative py-30 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20">
                    {/* About Us */}
                    <div>
                        <h4 className="text-xl tracking-wide font-medium mb-3">About Us</h4>
                        <p className="text-[15px] tracking-wide leading-6 text-gray-300">
                            TotalMax Homes is a unique company dedicated to providing the best Luxury
                            Vacation Rental Mansions in Las Vegas with our innovative TVS (Total Vegas Solution).
                        </p>
                    </div>

                    {/* Contacts */}
                    <div>
                        <h4 className="text-xl tracking-wide font-medium mb-3">All Contacts</h4>
                        <div className="flex mb-2 gap-3">
                            <div className="mt-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 18 18"
                                    width="18"
                                    height="18"
                                    fill="white"
                                >
                                    <g transform="matrix(0.03515632,0,0,0.03515632,0.14196544,0)">
                                        <path d="M 378.651,42.006 C 342.8,14.527 300.01,0 254.916,0 
      216.14,0 178.143,11.133 144.912,32.283 
      66.68,83.478 44.462,190.366 95.39,270.559 
      L 245.722,506.95 c 2.037,3.203 5.539,5.049 9.194,5.049 
      1.013,0 2.037,-0.136 3.045,-0.436 
      4.652,-1.351 7.849,-5.61 7.849,-10.458 
      l 0,-245.105 c 0,-6.013 -4.88,-10.894 -10.894,-10.894 
      -19.265,0 -37.273,-7.658 -50.71,-21.569 
      -13.661,-14.145 -20.801,-32.855 -20.12,-52.491 
      1.868,-35.993 31.559,-65.678 67.519,-67.568 
      19.5,-0.904 37.992,6.019 52.11,19.494 
      14.189,13.541 22.005,31.771 22.005,51.325 
      0,6.013 4.88,10.894 10.894,10.894 
      6.013,0 10.894,-4.88 10.894,-10.894 
      0,-25.567 -10.207,-49.392 -28.748,-67.088 
      -18.465,-17.626 -42.676,-26.678 -68.227,-25.491 
      -47.011,2.473 -85.755,41.216 -88.206,88.385 
      -0.899,25.785 8.41,50.138 26.216,68.57 
      15.017,15.551 34.413,25.132 55.481,27.588 
      l 0,197.42 L 113.778,258.876 
      C 69.207,188.688 88.527,95.221 156.726,50.59 
      c 29.609,-18.846 63.559,-28.803 98.19,-28.803 
      40.257,0 78.467,12.969 110.407,37.458 
      59.37,46.298 74.387,131.056 34.958,197.109 
      l -45.753,75.716 c -3.11,5.147 -1.454,11.847 3.693,14.957 
      5.142,3.105 11.841,1.46 14.957,-3.693 
      l 45.786,-75.76 C 464.046,192.049 446.747,95.101 378.651,42.006 Z"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <p className="text-[15px] tracking-wide leading-6 text-gray-300">6425 Darby Avenue Las Vegas, Nevada 89146 United States</p>
                            </div>
                        </div>
                        <div className="flex mb-2 gap-3">
                            <div className="mt-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="-9 0 18 18.02449"
                                    width="18"
                                    height="18"
                                    fill="white"
                                >
                                    <path d="m -0.00812368,0.03557413 c -0.1000824,0 -0.20017191,0.03826686 -0.27652856,0.11470633 
    -0.15271271,0.15271151 -0.15271271,0.40013997 0,0.55285148 l 0.11865616,0.11865498 
    C -4.8371058,0.90666302 -8.6117008,4.7302512 -8.6117008,9.4211984 
    c 0,4.7439106 3.85962,8.6032916 8.60357762,8.6032916 
    4.74395688,0 8.60337728,-3.859381 8.60337728,-8.6032916 
    0,-0.2162028 -0.1747641,-0.3910993 -0.3909681,-0.3910993 
    -0.216204,0 -0.3911698,0.1748965 -0.3911698,0.3910993 
    0,4.3126756 -3.5085198,7.8212286 -7.82123938,7.8212286 
    -4.31288592,0 -7.82144032,-3.508553 -7.82144032,-7.8212286 
    0,-4.2552019 3.4173296,-7.7207702 7.65085202,-7.812664 
    l -0.10594029,0.1059391 c -0.1527127,0.1527114 -0.1527127,0.4001735 0,0.5530522 
    0.0763571,0.076355 0.17644619,0.1144378 0.27652859,0.1144378 
    0.1000824,0 0.2001723,-0.038083 0.2765287,-0.1144378 
    L 1.0504755,1.485395 c 0.152713,-0.1528787 0.152713,-0.4003405 0,-0.55305229 
    L 0.26840512,0.15027998 C 0.19204912,0.07384052 0.09195842,0.03557365 -0.00812368,0.03557365 Z 
    m -5.09048482,4.69284467 0.016865,0.4070261 c 0.066164,1.6124921 0.5354708,3.1957514 1.3576813,4.5793433 
    0.8746738,1.3454968 2.0245311,2.4773018 3.41799433,3.4199688 
    1.38360577,0.823038 2.96859077,1.293546 4.58360437,1.359876 
    l 0.4071637,0.01686 0,-2.53578 c 0,-0.361229 -0.2162159,-0.683202 -0.5503804,-0.819206 
    L 2.3435753,10.425176 c -0.346361,-0.141349 -0.743889,-0.04928 -0.9886637,0.223389 
    l -1.52057348,1.639213 C -1.252363,11.588213 -2.1807166,10.66509 -2.8806229,9.5787336 
    L -1.240189,8.0623242 C -0.963,7.8130404 -0.8716309,7.4135715 -1.0126483,7.0687177 
    L -1.7435889,5.2782587 C -1.8805965,4.9440981 -2.2022398,4.7284188 -2.5631366,4.7284188 
    l -2.5354719,0 z m 0.8242326,0.7821296 1.7112393,0 c 0.042105,0 0.079861,0.025182 0.095567,0.063777 
    l 0.7309406,1.7903253 0,3.349e-4 c 0.016373,0.0401 0.00574,0.086342 -0.030517,0.1192564 
    L -3.2885899,8.8907641 C -3.8351152,7.8434975 -4.1716209,6.6903025 -4.2743759,5.5105484 Z 
    m 6.2756366,5.6317086 c 0.015565,-0.0011 0.03155,0.0012 0.046713,0.007 
    l 1.7911456,0.731269 c 0.037756,0.01554 0.063317,0.05383 0.063317,0.09509 
    l 0,1.711222 C 2.7209926,13.584186 1.5664383,13.247012 0.51916822,12.699825 
    L 1.932664,11.176055 c 0.017857,-0.02036 0.042655,-0.03187 0.068597,-0.03379 z"
                                    />
                                </svg>

                            </div>
                            <div>
                                <p className="mb-2">
                                    <a href="tel:7025926888" className="text-[15px] tracking-wide leading-6 text-gray-300">(702) 592-6888</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h4 className="text-xl tracking-wide font-medium mb-3">Subscribe</h4>
                        <p className="text-[15px] tracking-wide leading-6 text-gray-300 mb-4">
                            Keep informed with all of our News. Just send us your email address. Thank you!
                        </p>
                        <form className="gap-3">
                            <div>
                                <input
                                    type="email"
                                    placeholder="Insert Your email"
                                    className="w-full bg-white px-2 py-3 text-sm text-black focus:outline-none"
                                />
                            </div>
                            <div className="flex gap-2 py-3">
                                <p className="text-sm text-gray-50 font-medium"><input className="pt-1" type="checkbox" /> I consent to TotalMax Homes Privacy Policy. <Link className="underline" href="/privacy-policy">Please read first.</Link>*</p>
                            </div>
                            <button
                                type="submit"
                                className="px-10 text-sm font-semibold tracking-widest py-3 bg-[#C19B77]"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-xl tracking-wide font-medium mb-3">Social Media</h4>
                        <div className="flex gap-3">
                            <div className="border p-2 bg-[#C19B77] border-[#C19B77]">
                                <a href="https://www.facebook.com/totalmaxhomesvegas" target="_blank" className="hover:text-blue-500">
                                    <Facebook size={22} />
                                </a>
                            </div>
                            <div className="border p-2 bg-[#C19B77] border-[#C19B77]">
                                <a href="https://twitter.com/totalmaxhomes" target="_blank" className="hover:text-sky-400">
                                    <Twitter size={22} />
                                </a>
                            </div>
                            <div className="border p-2 bg-[#C19B77] border-[#C19B77]">
                                <a href="https://www.instagram.com/totalmaxhomes/" target="_blank" className="hover:text-pink-500">
                                    <Instagram size={22} />
                                </a>
                            </div>
                            <div className="border p-2 bg-[#C19B77] border-[#C19B77]">
                                <a href="https://www.linkedin.com/company/104027744/admin/feed/posts/" target="_blank" className="hover:text-blue-400">
                                    <Linkedin size={22} />
                                </a>
                            </div>
                            <div className="border p-2 bg-[#C19B77] border-[#C19B77]">
                                <a href="https://youtube.com/@TotalMaxHomes" target="_blank" className="hover:text-blue-400">
                                    <Youtube size={22} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="relative bg-[#2D2D2D] border-t border-gray-700">
                    <div className="max-w-6xl mx-auto px-6 pt-4 pb-14 grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-sm">

                        {/* Left: Copyright */}
                        <div className="flex items-center gap-2">
                            <span className="text-[15px] tracking-wide leading-6 text-gray-300">© {new Date().getFullYear()}, TotalMax Homes</span>
                        </div>

                        {/* Center: Login */}
                        <div className="flex justify-center">
                            <a
                                href="https://totalmaxhome.com/crm/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-blue-400"
                            >
                                <span><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    width="10"
                                    height="10"
                                    fill="white"
                                >
                                    <path d="M336.226 209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712L300.028 221.657 107.294 414.391c-6.663 6.664-6.663 17.468 0 24.132 6.665 6.663 17.468 6.663 24.132 0l204.8-204.8c6.663-6.665 6.663-17.468 0-24.132z" />
                                </svg>
                                </span>
                                <span className="text-[15px] tracking-wide leading-6 text-gray-300">Login</span>
                            </a>
                        </div>

                        {/* Right: Proudly Built By */}
                        {/* <div className="flex md:justify-end justify-center items-center gap-2">
                            <span className="text-sm tracking-wide leading-6 text-gray-300">Proudly Built By:</span>
                            <a
                                href="https://www.mamdaniinc.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-6 flex items-center text-white font-medium text-lg md:text-xl hover:underline"
                                style={{ minWidth: '100px', textAlign: 'center' }}
                            >
                                Mamdani Inc
                            </a>
                        </div> */}


                    </div>
                </div>
            </footer>
        </>
    );
}
