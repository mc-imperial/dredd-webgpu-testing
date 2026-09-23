FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    python3.10 \
    python3.10-venv \
    python3-pip \
    git \
    curl \
    wget \
    ca-certificates \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace

COPY . /workspace/dredd-webgpu-testing

WORKDIR /workspace/dredd-webgpu-testing

RUN python3.10 -m pip install --break-system-packages .