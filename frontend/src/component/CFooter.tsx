import React, { ReactNode } from "react";

import "../css/cfooter.less";
import { IAppInfo } from "../config/IAppInfo";
import CSeparator from "./CSeparator";

class CFooter extends React.Component<{
    appInfo: IAppInfo
}>
{
    render(): ReactNode
    {
        return (
            <>
                <CSeparator />
                <footer className={"tfc-footer-container"}>
                    <div className={"tfc-footer-container-right"}>
                        <div className={"tfc-footer-centerbox"}>
                            <img src={this.props.appInfo.logo} className={"tfc-logo tfc-dark"} alt={"Tefek's logo"} />
                        </div>
                    </div>
                    <div className={"tfc-footer-container-right"}>
                        <div className={"tfc-footer-centerbox"}>
                            Made with 💜 in <img src={this.props.appInfo.footer.flag} className={"tfc-img-inline"} alt={"the Czech Republic"} />
                        </div>
                    </div>
                    <div className={"tfc-footer-container-right"}>
                        <div className={"tfc-footer-centerbox"}>
                            {
                                this.props.appInfo.footer.socials.map((social, index) => {
                                    return (
                                        <a href={social.link} className={"tfc-colorized tfc-social"} key={index}>
                                            <img src={social.img} alt={social.type} />
                                        </a>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className={"tfc-footer-container-right"}>
                        <div className={"tfc-footer-spacebox"}>
                            {
                                this.props.appInfo.footer.links.map((link, index) => {
                                    return (
                                        <a href={link.link} key={index}>
                                            {link.name}
                                        </a>
                                    );
                                })
                            }
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default CFooter;
