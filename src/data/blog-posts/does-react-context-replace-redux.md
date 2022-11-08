---
title: Does React Context Replace Redux?
publishDate: 2022-11-07
description: An exploration into React Context and Redux
---

In React, it's very common to share properties between components and their descendents. It can become a hassle to have to add these properties for each of these components: a problem commonly known as "prop drilling." See below for an example (copied from [here](https://blog.logrocket.com/solving-prop-drilling-react-apps/)):

```jsx

import { useState } from 'react';

function App() {
  const [user, setUser] = useState({ name: 'Steve' });
  return (
    <div>
      <Navbar />
      <MainPage user={user} />
    </div>
  );
}
export default App;

// Navbar Component
function Navbar() {
  return <nav>Demo App</nav>;
}

// MainPage Component
function MainPage({ user }) {
  return (
    <div>
      <h3>Main Page</h3>
      <Content user={user} />
    </div>
  );
}

// Content Component
function Content({ user }) {
  return (
    <div>
      <Message user={user} />
    </div>
  );
}

// Message Component
function Message({ user }) {
  return <p>Welcome {user.name}</p>;
}

```

Prop drilling was often solved by using Redux, but a lot of developers are now arguing that React Context (along with `useReducer`) now [replaces the need for Redux](https://kentcdodds.com/blog/application-state-management-with-react) to solve prop drilling. Developers have also argued the opposite, and that [using React Context triggers unnecessary renders](https://github.com/facebook/react/issues/15156), which can cause major performance issues.

# Real Example

I created a base example to better understand the Redux store, and how it differs from React Context. The example is adapted from Kent C. Dodds' example on [performance optimization via colocation](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster). In each of the examples, try changing the "Dog Name." You will notice that the examples marked as "slow" will lag.

<iframe
  src="https://codesandbox.io/embed/react-state-performance-u0z0z1?fontsize=14&hidenavigation=1&theme=dark"
  style="width: 100%; height: 500px; border: 0; borderRadius: 4px; overflow: hidden;"
  title="React State Performance"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Explanation

This is because these implementations are forcing a rerender of portions of the code that are unrelated to the `dog` state variable (for more details, I suggest studying [the original post](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster)). Kent suggests fixing this problem by moving the `dog` variable down to the child component where it's actually used (a.k.a. colocation), but we are more focused on doing an apples to apples comparison of Redux and React Context.

Pay close attention to "Redux - Single Store" (`WithRedux.tsx`) and "React Context (slow)" (`WithReactContext.tsx`). They're written to be as similar as possible. The only difference between them is Redux and React Context, but the React Context version is significantly slower!

At the time of writing, it does not seem like React Context will change their implementation any time soon.

## Does React Context replace Redux?

So it looks like the answer to our question is a resounding "**no**," at least not by itself. In order to fully reproduce the functionality of Redux, we will not only need React Context and `useReducer`, but we will also need to wrap the affected code with `memo`, `useMemo`, or in some cases, `useEffect`.

In the end, that's a lot of work to implement something that Redux can do out of the box. It's up to you to determine if that's the kind of tradeoff you want.

While this may seem like a big letdown, I'd also like to point out that Redux has changed a lot over the years, especially with the inclusion of Redux Toolkit. If you haven't looked at the docs since 2020, I highly suggest going through the [newest tutorial](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) and [style guide](https://redux.js.org/style-guide/).
