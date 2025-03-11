# Build stage
FROM gradle:8.12.1-jdk17 AS builder
WORKDIR /app
COPY build/libs/docker-0.0.1-SNAPSHOT.jar spring.jar
CMD ["java", "-jar", "spring.jar"]
