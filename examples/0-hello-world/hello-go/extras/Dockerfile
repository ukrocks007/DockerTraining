FROM golang:alpine
ARG GO_FILE
WORKDIR /app
COPY ./hello.go /app
RUN go build ${GO_FILE}.go
RUN ls
RUN adduser -D bob
USER bob
CMD ["/app/hello"]
