[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
# MUI + Storybook + UXPin Merge

Integration of [MUI](https://mui.com/) and [storybook](https://storybook.js.org/) with UXPin Merge Technology.

## About MUI

MUI (formerly Material-UI) is the React UI library you always wanted. You can implement your own design system, or start with Material Design.

## About Storybook

Storybook is a frontend workshop for building UI components and pages in isolation.

## About UXPin Merge Storybook integration

[Storybook integration](https://www.uxpin.com/merge/storybook-integration) is an alternative to our other Merge technology integration – Git repository.
They both allow you to design with pre-built code components, the main difference is how you add components to UXPin.

## How to use this repository?

### Private storybook integration

1. Fork this repository and clone it to your computer.
2. Install dependencies with `yarn install`.
3. compile storybook files with `yarn run build-storybook`.
4. Log in to your UXPin account.
5. Generate new private storybook token from UXPin editor.
6. push library to UXPin with `npx uxpin-storybook-deployer -t TOKEN -s path/to/your/storybook`.

### Public storybook integration

1. Fork this repository and clone it to your computer.
2. Install dependencies with `yarn install`.
3. compile storybook files with `yarn run build-storybook`.
4. Publish storybook on a hosting platform such as [chromatic](https://www.chromatic.com/docs/) and retrieve the URL
5. Log in to your UXPin account.
6. Add new public storybook with URL provided from your chosen hosting platform.

For more information please see our documentation: [UXPin storybook integration](https://www.uxpin.com/docs/merge/storybook-integration/#before-you-start)
