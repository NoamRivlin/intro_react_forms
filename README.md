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

### Instructions

1. Create a functional component in the `UncontrolledInput.jsx` file
2. Import `React` and `useRef` Hook
3. Add a `form` with an `input` for a user to enter their name
4. Add a `submit` input
5. Write a `handleSubmit` function with an empty body and add an `onSubmit` event to form
6. Implement a `ref` to the `input` using the `useRef` hook
7. Add a `console.log` that logs the user's `name` input upon submission of the form using the `ref`

## Controlled Components

<details>
<summary>What is an Controlled React component?</summary>
A controlled component is a React component that does not keep track of its own internal state. Typically, a parent component tracks state, then passes props to the controlled component.
</details>

### Instructions

1. Create a functional component in the `ControlledInput.jsx` file
2. Import the `useState` hook
3. Create a controlled email input
4. Import the `useEffect` hook
5. Implement email input validation that logs `Invalid email format` if there is no `@` symbol and `Valid email, great job!` if the email input is valid

## Comprehension Questions

- What is the primary difference between a controlled component vs an uncontrolled component??
- In what circumstances would you implement a controlled component vs an uncontrolled component?
