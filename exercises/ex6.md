# Exercise 6

In this exercise we are going to look at adding a continious integration
pipeline that runs a docker build stage when data is pushed.

Here is an example of a .github/workflows/docker-image.yml

```
name: Devops CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:

  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Test build
      working-directory: src
      run: # Add docker build script here
```
