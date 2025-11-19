//Footer.tsx

function Footer() {
    return (
        <footer className="bg-[#FFF0FF] w-full h-1/8 fixed bottom-0 px-6 py-10 border-b border-t border-black md:px-12 flex flex-col items-center justify-center gap-2">

            <p className="text-xs text-gray-500  font-medium">
                &copy; {new Date().getFullYear()} • React denemesi.
            </p>

            <address className="text-xs text-gray-500 font-medium">
                İletişim: <a href="mailto:m.sultanbozoglan@gmail.com">m.sultanbozoglan@gmail.com</a>
            </address>

        </footer>
    );
};

export default Footer;