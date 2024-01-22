# pwa-e2e

## installation

```
yarn install
```

## for CI

```
yarn test
```

## run locally

```
yarn debug
```

#### rename .env.example to .env

## Name convention for selectors

Selector name should end with `Button, Text, Input, Radio, Checkbox, etc.` depending on what you're using.

For example

```
accountButton: partialClassSelector('accountTrigger-trigger')
it's clear now it's a button

emailInput: `${partialClassSelector('signIn-form')} input[name="email"]`
it's an input

contactInformationText: 'Contact Information'
it's a text
```
