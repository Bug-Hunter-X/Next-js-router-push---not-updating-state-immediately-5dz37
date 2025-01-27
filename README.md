# Next.js router.push() async behavior

This repository demonstrates a common issue in Next.js applications where `router.push()` doesn't immediately update the application's state. This can lead to unexpected behavior if subsequent code relies on the route change to have completed.

## Problem

The `router.push()` method in Next.js is asynchronous. This means that the code following a `router.push()` call will continue to execute *before* the actual route change is complete.  This can cause problems if your component depends on the new route's data or state.

The `bug.js` file illustrates this problem. A button triggers navigation and then attempts to perform actions based on the new route.  Since the route change is asynchronous, these actions might fail or produce unexpected results.

## Solution

The solution involves using the `router.events` to detect route changes and ensuring that any code depending on the route change occurs after the event has finished.

The `bugSolution.js` demonstrates how to solve the issue by listening to the 'routeChangeComplete' event from Next.js Router.
