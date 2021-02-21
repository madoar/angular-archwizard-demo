# Overview angular-archwizard-demo
[![Build Status](https://github.com/madoar/angular-archwizard-demo/workflows/build.yml/badge.svg?branch=develop)](https://github.com/madoar/angular-archwizard-demo/actions)

This project contains a demo application for the [angular-archwizard](https://github.com/madoar/angular-archwizard) library for Angular 9+.

## Build
Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Local development server
Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Gitpod
`angular-archwizard-demo` can be developed and tested with Gitpod, a free one-click online IDE for GitHub:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/madoar/angular-archwizard-demo)

## Project structure
The demo application consists of multiple examples for different functionality of the `angular-archwizard` library.
Each example consists of its own Angular component, which is declared and exported in a corresponding Angular module.
The examples can be found in the subfolders in the `src/app/` directory.
