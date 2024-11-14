import Header from "../components/Header";
import Latest from "../components/Latest";


const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                <Latest></Latest>
                </section>
            </header>
            <nav></nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;