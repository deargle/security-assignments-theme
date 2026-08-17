# frozen_string_literal: true

source "https://rubygems.org"
gemspec

# Pin transitive deps that have dropped Ruby 2.7 support in newer releases,
# to match ../security-assignments.github.io/Gemfile.lock (which is what
# actually runs in production/CI, on the same Ruby version this theme repo
# previews under via script/serve-docker).
gem 'ffi', '1.13.1'
