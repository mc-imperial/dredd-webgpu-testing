FROM ubuntu:24.04

ARG MESA_COMMIT
ARG DREDD_COMMIT
ARG CTS_COMMIT
ARG DAWN_COMMIT
ARG DEPOT_TOOLS_COMMIT
ARG GO_VERSION=1.23.12

# Avoid interactive prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Set up environment
ENV MESA_COMMIT="${MESA_COMMIT}"
ENV DREDD_COMMIT="${DREDD_COMMIT}"
ENV CTS_COMMIT="${CTS_COMMIT}"
ENV DAWN_COMMIT="${DAWN_COMMIT}"
ENV DEPOT_TOOLS_COMMIT="${DEPOT_TOOLS_COMMIT}"

ENV BASE=/data
ENV PROJECT_ROOT=/workspace/dredd-webgpu-testing
ENV DEPOT_TOOLS="${BASE}/depot_tools"
ENV MESA="${BASE}/mesa"
ENV DREDD="${BASE}/dredd"
ENV CTS="${BASE}/cts"
ENV DAWN="${BASE}/dawn"

ENV PATH="${DEPOT_TOOLS}:${PATH}"

RUN mkdir -p ${BASE}
RUN mkdir -p ${PROJECT_ROOT}

# ---------------------------------------------------------------------------
# System dependencies
# ---------------------------------------------------------------------------
RUN apt-get update && apt-get install -y \
    libfuse2 \
    libxrandr-dev \
    libxinerama-dev \
    libxcursor-dev \
    libxkbcommon-dev \
    libxi-dev \
    mesa-common-dev \
    libx11-xcb-dev \
    pkg-config \
    nodejs \
    npm \
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
    libxcb1-dev \
    libxcb-dri3-dev \
    libxcb-present-dev \
    libxcb-sync-dev \
    libxcb-shm0-dev \
    libxcb-xfixes0-dev \
    libxcb-randr0-dev \
    libxshmfence-dev \
    libxext-dev \
    libvulkan1 \
    vulkan-tools \
    glslang-tools \
    jq \
    curl \
    libwayland-dev \
    && rm -rf /var/lib/apt/lists/*

RUN wget -q "https://go.dev/dl/go${GO_VERSION}.linux-amd64.tar.gz" \
    && rm -rf /usr/local/go \
    && tar -C /usr/local -xzf "go${GO_VERSION}.linux-amd64.tar.gz" \
    && rm "go${GO_VERSION}.linux-amd64.tar.gz"

ENV PATH="/usr/local/go/bin:${PATH}"


ENV CC=/usr/bin/clang-17
ENV CXX=/usr/bin/clang++-17
ENV PATH="/usr/lib/llvm-17/bin:${PATH}"

# ---------------------------------------------------------------------------
# Build scripts
# ---------------------------------------------------------------------------
COPY setup ${PROJECT_ROOT}/setup

RUN chmod +x ${PROJECT_ROOT}/setup/*.sh

# ---------------------------------------------------------------------------
# Build dependencies
# ---------------------------------------------------------------------------

# Enable deb-src to get Mesa requirements
RUN sed -i 's/^Types: deb$/Types: deb deb-src/' /etc/apt/sources.list.d/ubuntu.sources \
    && apt-get update \
    && apt-get build-dep -y mesa \
    && rm -rf /var/lib/apt/lists/*

RUN ${PROJECT_ROOT}/setup/build_dawn.sh
RUN ${PROJECT_ROOT}/setup/build_mesa.sh
RUN ${PROJECT_ROOT}/setup/build_dredd.sh
RUN ${PROJECT_ROOT}/setup/build_cts.sh

# ---------------------------------------------------------------------------
# Project
# ---------------------------------------------------------------------------
COPY . ${PROJECT_ROOT}

# ---------------------------------------------------------------------------
# Python virtual environment
# ---------------------------------------------------------------------------
RUN python3 -m venv /opt/venv

ENV VIRTUAL_ENV=/opt/venv
ENV PATH="${VIRTUAL_ENV}/bin:${PATH}"

WORKDIR ${PROJECT_ROOT}

RUN pip install --upgrade pip \
    && pip install -e .

# ---------------------------------------------------------------------------
# Default command
# ---------------------------------------------------------------------------
CMD ["/bin/bash"]