function Footer() {
    return (
        <footer className="bg-black w-full py-3">
            <p className="w-full text-white text-center">
                Copyright &copy; {new Date().getFullYear()} Andrés Rincón. All Rights reserved.
            </p>
        </footer>
    );
}

export default Footer;