extern crate core;

use std::fs;
use actix_cors::Cors;
use actix_web::{HttpServer, middleware, web, get, Responder, HttpRequest, App};

#[derive(Clone, serde::Serialize, serde::Deserialize)]
#[serde(tag = "type")]
#[serde(rename_all = "SCREAMING_SNAKE_CASE")]
enum Graphic {
    GltfModel {
        path: String,
        #[serde(default = "default_zoom")]
        zoom: f32
    },
    GlbModel {
        path: String,
        #[serde(default = "default_zoom")]
        zoom: f32
    },
    Image {
        path: String
    }
}

const fn default_zoom() -> f32 {
    1.0
}

#[derive(Clone, serde::Serialize, serde::Deserialize)]
struct Project {
    pub name: String,
    pub description: String,
    pub icon: Option<String>,
    pub graphic: Option<Graphic>
}

#[get("/projects")]
async fn projects_handler(_req: HttpRequest, data_projects: web::Data<Vec<Project>>) -> impl Responder {
    web::Json(data_projects)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let projects_yaml = fs::read_to_string("config/projects.yaml").unwrap();
    let projects: Vec<Project> = serde_yaml::from_str(projects_yaml.as_str()).unwrap();

    let projects_data = web::Data::new(projects);

    HttpServer::new(move || {
        let cors = Cors::default()
            .allow_any_header()
            .allow_any_method()
            .allow_any_origin();

        App::new()
            .wrap(cors)
            .wrap(middleware::Logger::default())
            .app_data(projects_data.clone())
            .service(projects_handler)
            .service(actix_files::Files::new("/assets", "./assets"))
            .service(actix_files::Files::new("/", "./static").index_file("index.html"))
    })
        .bind(("0.0.0.0", 8080))?
        .run()
        .await
}