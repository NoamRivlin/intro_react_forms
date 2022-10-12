# Intro to React Forms

## Project Setup

- Fork and Clone this github repo
- Run `npm i` to install dependencies
- Run `npm start` to run in the browser

## Uncontrolled Component

<details>
<summary>What is an uncontrolled React component?</summary>
An uncontrolled component is a React component that keeps track of all its own internal state and releases data only when some event occurs (e.g., Submit). 
</details>

1. Navigate to `UncontrolledInput.jsx` file
2. Import `React` and `useRef` Hook
3. Create functional component called `UncontrolledInput` and export it
4. Add a `form` with an `input` for a user to enter their name
5. Add a `submit` input
6. Write a `handleSubmit` function with an empty body and add an `onSubmit` event to form 
7. Implement a `ref` to the `input` using the `useRef` hook
8. Add a `console.log` that logs the user's `name` input upon submission of the form using the `ref`


## Controlled Components

<details>
<summary>What is an Controlled React component?</summary>
A controlled component is a React component that does not keep track of its own internal state. Typically, a parent component tracks state, then passes props to the controlled component.
</details>
