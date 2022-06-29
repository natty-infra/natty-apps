FROM rust:latest as backend

RUN update-ca-certificates

ENV USER=appsbackend
ENV UID=10001

RUN adduser \
    --disabled-password \
    --gecos "" \
    --shell "/sbin/nologin" \
    --no-create-home \
    --uid "${UID}" \
    "${USER}"

WORKDIR /apps-backend

COPY ./ .

RUN cargo build --release

FROM node:lts as frontend

COPY ./frontend .

RUN npm install
RUN npm run build

FROM debian:buster-slim

COPY --from=backend /etc/passwd /etc/passwd
COPY --from=backend /etc/group /etc/group

WORKDIR /apps-backend

COPY --from=backend /apps-backend/target/release/apps_backend ./

COPY --from=frontend ./dist ./static

USER appsbackend:appsbackend

CMD ["/apps-backend/apps_backend"]
EXPOSE 8080/tcp
