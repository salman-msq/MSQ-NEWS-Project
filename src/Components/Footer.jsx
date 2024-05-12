//Component to display footer
const Footer = ({ setCategory }) => {
    return (
        <div className='bg-dark'>
            <footer className="container py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <div className="nav-link text-success" onClick={() => setCategory('general')} style={{ cursor: "pointer" }}>Home</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" onClick={() => setCategory('technology')} style={{ cursor: "pointer" }}>Technology</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" onClick={() => setCategory('business')} style={{ cursor: "pointer" }}>Business</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" onClick={() => setCategory('health')} style={{ cursor: "pointer" }}>Health</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" onClick={() => setCategory('sports')} style={{ cursor: "pointer" }}>Sports</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" onClick={() => setCategory('science')} style={{ cursor: "pointer" }}>Science</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" onClick={() => setCategory("entertainment")} style={{ cursor: "pointer" }}>Entertainment</div>
                    </li>
                </ul>
                <p className="text-center text-light fs-4 mb-0">© 2024 <span className="badge bg-light text-dark fs-4">MSQ-NEWS</span></p>
            </footer>
        </div>
    )
}

export default Footer
