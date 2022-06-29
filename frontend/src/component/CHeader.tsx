import React, { ReactNode } from "react";

import "../css/cheader.less";
import { IAppInfo } from "../config/IAppInfo";

class CHeader extends React.Component<{
    appInfo: IAppInfo
}>
{
    render(): ReactNode
    {
        return (
            <div className={"tfc-header-container"}>
                <div className={"tfc-header-upper"}>
                    <div className={"tfc-header-pipe"}>
                        <img src={this.props.appInfo.icons.icon64} alt={"Logo"} />
                    </div>
                    <header className={"tfc-header-text"}>
                        { this.props.appInfo.appName }
                    </header>
                    <svg className={"tfc-header-end"} viewBox={"0 0 100 100"}>
                        <polygon points="0,0 100,100 0,100" />
                    </svg>
                </div>
                <div className={"tfc-header-lower"} />
            </div>
        );
    }
}

export default CHeader;
