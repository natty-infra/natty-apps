import React from "react";

import "core-js";
import "normalize.css";
import "./css/main.less";

import CHeader from "./component/CHeader";

import AppInfo from "./config/AppInfo";
import CFooter from "./component/CFooter";
import { createRoot } from "react-dom/client";
import axios from "axios";
import CModelView from "./component/CViewport";
import ReactMarkdown from "react-markdown";

import { APIConfig } from "./config/APIConfig";

axios.defaults.baseURL = APIConfig.apiBaseURL;

type ProjectGraphic = {
    type: "GLTF_MODEL" | "GLB_MODEL" | "IMAGE",
    path: string,
    zoom: number | null
};

type Project = {
    name: string,
    description: string,
    icon: string | null,
    graphic: ProjectGraphic | null
};

class ProjectGraphicComponent extends React.Component<ProjectGraphic>
{
    render()
    {
        const path = APIConfig.apiBaseURL + "/assets/" + this.props.path;

        console.log(path);

        switch (this.props.type)
        {
            case "GLB_MODEL":
            case "GLTF_MODEL":
                return (
                    <div className={"ta-graphic-view"}>
                        <CModelView path={path} zoom={this.props.zoom} />
                    </div>
                );
            case "IMAGE":
                return (
                    <div className={"ta-graphic-view"}>
                        <img src={path} alt={"Project logo"}/>
                    </div>
                );
        }
    }
}

class ProjectComponent extends React.Component<Project>
{
    render()
    {
        return (
            <div className={"ta-project"}>
                <div className={"ta-project-name"}>
                    {this.props.name}
                </div>
                {this.props.graphic ? <ProjectGraphicComponent {...this.props.graphic} /> : undefined}
                <div className={"ta-project-description"}>
                    <ReactMarkdown linkTarget={"_blank"}  children={this.props.description} />
                </div>
            </div>
        );
    }
}

class Application extends React.Component<{
    projects: Array<Project>
}>
{
    render()
    {
        return (
            <>
                <div className={"tfc-app-fsview"}>
                    <CHeader appInfo={AppInfo} />
                    <div className={"tfc-app-container"}>
                        <div className={"ta-project-container"}>
                            {
                                this.props.projects.map((project, idx) => <ProjectComponent key={idx} {...project} />)
                            }
                        </div>
                    </div>
                </div>
                <CFooter appInfo={AppInfo} />
            </>
        );
    }
}

function App(props: {
    projects: Array<Project>
}) {
    React.useEffect(() => {
        const preloadStylesheet = document.getElementById("preload-style");
        if (preloadStylesheet)
            preloadStylesheet.remove();
    });

    return <Application projects={props.projects} />;
}

const container = document.getElementById("appContainer");
if (container === null)
    throw new Error("Main application container not found!");
const root = createRoot(container);

axios.get("/projects").then(r => {
    root.render(<App projects={r.data} />);
});
