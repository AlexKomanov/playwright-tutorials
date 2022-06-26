import "./sidebar.scss";
import { InstallDesktopSharp, Keyboard, MouseOutlined, SchoolRounded, TextFieldsOutlined } from '@mui/icons-material'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <img className='pl-logo' src="https://playwright.dev/img/playwright-logo.svg" alt="playwright-logo" />
                <span className="logo">Learn Playwright</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">INSTALLATION</p>
                    <li>
                        <InstallDesktopSharp className="icon" />
                        <span>Getting Started</span>
                    </li>
                    <p className="title">BASIC ACTIONS</p>
                    <li>
                        <MouseOutlined className="icon" />
                        <span>Click Element</span>
                    </li>
                    <li>
                    <Keyboard className="icon"/>
                        <span>Type Text</span>
                    </li>
                    <li>
                    <TextFieldsOutlined className="icon"/>
                        <span>Read Text</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                    <SchoolRounded className="icon"/>
                        <span>Lorem Ipsum</span>
                    </li>
                    <li>
                    <SchoolRounded className="icon"/>
                        <span>Lorem Ipsum</span>
                    </li>
                    <li>
                    <SchoolRounded className="icon"/>
                        <span>Lorem Ipsum</span>
                    </li>
                    <p className="title">SETTINGS</p>
                    <li>
                    <SchoolRounded className="icon"/>
                        <span>Configuration</span>
                    </li>
                    <li>
                        <SchoolRounded className="icon"/>
                        <span>Lorem Ipsum</span>
                    </li>
                    <li>
                        <SchoolRounded className="icon"/>
                        <span>Lorem Ipsum</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <SchoolRounded className="icon"/>
                        <span>Lorem Ipsum</span>
                    </li>
                    <li>
                        <SchoolRounded className="icon"/>
                        <span>Lorem Ipsum</span>
                    </li>

                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>

        </div>
    )
}

export default Sidebar