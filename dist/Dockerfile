FROM ubuntu

WORKDIR /usr/app

RUN apt-get update

# Timezone for rbenv
RUN DEBIAN_FRONTEND="noninteractive" apt-get -y install tzdata

# Install ruby and rbenv
RUN apt-get -y install ruby-full
RUN apt-get -y install rbenv

# Fix problem with libssl1.0-dev
RUN echo "deb http://security.ubuntu.com/ubuntu bionic-security main" >> /etc/apt/sources.list
RUN apt-get -y update && apt-cache policy libssl1.0-dev
RUN apt-get -y install libssl1.0-dev

# Rbenv install ruby version 2.3.4 and use globally
RUN rbenv install 2.3.4
RUN rbenv global 2.3.4

# Configure ruby and rbenv in PATH
RUN export PATH="$HOME/.rbenv/bin:$PATH"
RUN eval "$(rbenv init -)"
RUN /bin/bash -c "source /root/.bashrc"

# Update dependencies for opencode_theme
RUN gem install faraday -v 1.0.1
RUN gem install launchy -v 2.4.3

# Install opencode
RUN gem install opencode_theme --force
