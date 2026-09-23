FROM ubuntu:24.04

# Avoid interactive prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# ---------------------------------------------------------------------------
# System dependencies
# ---------------------------------------------------------------------------
RUN apt-get update && apt-get install -y \
        build-essential \
        g++ \
        llvm-17 \
        clang-17 \
        clang-tidy-17 \
        clang-format-17 \
        libclang-17-dev \
        llvm-20-dev \
        libllvm20 \
        cmake \
        ninja-build \
        libstdc++-14-dev \
        git \
        ca-certificates \
        python3-pip \
        python3-venv \
        wget \
        meson \
        pkg-config \
        python3-mako \
        python3-packaging \
        bison \
        flex \
        libelf-dev \
        zlib1g-dev \
        libzstd-dev \
        libexpat1-dev \
        libdrm-dev \
        libx11-dev \
        libx11-xcb-dev \
        libxcb1-dev \
        libxcb-dri3-dev \
        libxcb-present-dev \
        libxcb-sync-dev \
        libxcb-shm0-dev \
        libxcb-xfixes0-dev \
        libxcb-randr0-dev \
        libxshmfence-dev \
        libxrandr-dev \
        libxext-dev \
        libvulkan1 \
        vulkan-tools \
        glslang-tools \
        jq \
        curl \
    && rm -rf /var/lib/apt/lists/*

# ---------------------------------------------------------------------------
# LLVM / Clang
# ---------------------------------------------------------------------------
ENV PATH="/usr/lib/llvm-17/bin:${PATH}"

# ---------------------------------------------------------------------------
# Dredd
# ---------------------------------------------------------------------------
WORKDIR /data

RUN git clone https://github.com/mc-imperial/dredd.git \
    && cd dredd \
    && git submodule update --init --recursive

WORKDIR /data/dredd

RUN cmake -S . -B build -G Ninja \
        -DCMAKE_BUILD_TYPE=Release \
        -DDREDD_CLANG_LLVM_DIR=/usr/lib/llvm-17 \
    && cmake --build build --config Release

# ---------------------------------------------------------------------------
# Project
# ---------------------------------------------------------------------------
WORKDIR /workspace

COPY . /workspace/dredd-webgpu-testing

WORKDIR /workspace/dredd-webgpu-testing

# ---------------------------------------------------------------------------
# Python virtual environment
# ---------------------------------------------------------------------------
RUN python3 -m venv /opt/venv

ENV VIRTUAL_ENV=/opt/venv
ENV PATH="${VIRTUAL_ENV}/bin:${PATH}"

WORKDIR /workspace/dredd-webgpu-testing

RUN pip install --upgrade pip \
    && pip install .

# ---------------------------------------------------------------------------
# Default command
# ---------------------------------------------------------------------------
CMD ["/bin/bash"]