# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "security-assignments-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Dave Eargle"]
  spec.email         = ["dave@daveeargle.com"]

  spec.summary       = "Jekyll theme for daveeargle.com/security-assignments and the like"
  spec.homepage      = "https://github.com/deargle/security-assignments-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency 'github-pages', '>= 167'
  spec.add_runtime_dependency 'jekyll-include-cache'

  spec.add_development_dependency 'html-proofer', '~> 3.0'
  spec.add_development_dependency 'rake', '~> 11.0'
  spec.add_development_dependency 'rubocop', '~> 0.40'
end
