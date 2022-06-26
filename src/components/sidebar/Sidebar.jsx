import "./sidebar.scss";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <img className='pl-logo' src="https://playwright.dev/img/playwright-logo.svg" alt="playwright-logo"/>
                <span className="logo">Learn Playwright</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                color options
            </div>

        </div>
    )
}

export default Sidebar