FROM ubuntu:24.04

ARG MESA_COMMIT
ARG DREDD_COMMIT
ARG CTS_COMMIT
ARG DAWN_COMMIT

# Avoid interactive prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Set up environment
ENV MESA_COMMIT="${MESA_COMMIT}"
ENV DREDD_COMMIT="${DREDD_COMMIT}"
ENV CTS_COMMIT="${CTS_COMMIT}"
ENV DAWN_COMMIT="${DAWN_COMMIT}"

ENV BASE=/data
ENV PROJECT_ROOT=/workspace/dredd-webgpu-testing

RUN mkdir -p ${BASE}
RUN mkdir -p ${PROJECT_ROOT}

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
        meson-1.7 \
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
# Project
# ---------------------------------------------------------------------------
WORKDIR ${PROJECT_ROOT}

COPY . ${PROJECT_ROOT}

RUN chmod +x ${PROJECT_ROOT}/setup/*.sh

# ---------------------------------------------------------------------------
# Dredd
# ---------------------------------------------------------------------------

RUN ${PROJECT_ROOT}/setup/build_dredd.sh ${BASE}/dredd

# ---------------------------------------------------------------------------
# Mesa
# ---------------------------------------------------------------------------

# Enable deb-src to get Mesa requirements
RUN sed -i 's/^Types: deb$/Types: deb deb-src/' /etc/apt/sources.list.d/ubuntu.sources \
    && apt-get update \
    && apt-get build-dep -y mesa \
    && rm -rf /var/lib/apt/lists/*

RUN ${PROJECT_ROOT}/setup/build_mesa.sh ${BASE}/mesa

# ---------------------------------------------------------------------------
# Project python virtual environment
# ---------------------------------------------------------------------------
#RUN python3 -m venv /opt/venv

ENV VIRTUAL_ENV=/opt/venv
ENV PATH="${VIRTUAL_ENV}/bin:${PATH}"

WORKDIR /workspace/dredd-webgpu-testing

RUN pip install --upgrade pip \
    && pip install .

# ---------------------------------------------------------------------------
# Default command
# ---------------------------------------------------------------------------
CMD ["/bin/bash"]