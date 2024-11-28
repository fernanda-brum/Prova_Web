import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="header">
                <Link to="/">Home</Link>
                <Link to="/meuplano">Meu Plano</Link>
                <Link to="/historico">Histórico</Link>
            </nav>
        </header>
    );
}

export default Header;
