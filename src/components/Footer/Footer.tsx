function Footer() {
    return (
        <footer className="bg-[#FFF0FF] w-full min-h-15 md:min-h-24 xl:min-h-28 px-4 md:px-12 xl:px-20  border-b border-t border-black flex flex-col items-center justify-center gap-2">

            <p className="text-gray-500  font-medium text-xs md:text-sm xl:text-l">
                &copy; {new Date().getFullYear()} • React denemesi.
            </p>

            <address className="text-gray-500 font-medium text-xs md:text-sm xl:text-l">
                İletişim: <a href="mailto:m.sultanbozoglan@gmail.com">m.sultanbozoglan@gmail.com</a>
            </address>

        </footer>
    );
};

export default Footer;