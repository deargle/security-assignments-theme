# Generic Ruby 2.7 + Bundler + build-tools image for previewing/building
# this theme locally without a matching system Ruby install. See
# script/serve-docker and script/build-docker.
FROM ruby:2.7

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential zlib1g-dev git \
    && rm -rf /var/lib/apt/lists/*

RUN gem install bundler -v 2.1.4
RUN git config --global --add safe.directory /site

WORKDIR /site
EXPOSE 4000

CMD ["sh", "-c", "bundle check || bundle install && exec bundle exec jekyll serve --host 0.0.0.0 --port 4000 --watch --force_polling --incremental"]
