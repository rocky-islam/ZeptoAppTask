import NavBar from "../NavBar/NavBar";


const ErrorPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h1 className="flex justify-center items-center h-screen lg:text-3xl lg:font-bold text-red-300">Opsss.... Page Not Found</h1>
        </div>
    );
};

export default ErrorPage;