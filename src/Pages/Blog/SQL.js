import React from "react";

const SQL = () => {
  return (
    <div className="pt-24 px-10">
      <div className="bg-base-300 lg:px-14 mb-10 rounded-lg pb-10 max-w-screen-xl px-8 mx-auto">
        <h2 className="text-xl font-semibold text-center py-10 pt-8">
          What are the different ways to manage a state in a React application?
        </h2>
        <p>
          There are four main types of state you need to properly manage in your
          React apps:
          <br />
          <br />
          Local state
          <br />
          Global state
          <br />
          Server state
          <br />
          URL state
          <br />
          <br />
          Let's cover each of these in detail:
          <br />
          <br />
          Local (UI) state – Local state is data we manage in one or another
          component. <br />
          Local state is most often managed in React using the useState hook.
          <br />
          For example, local state would be needed to show or hide a modal
          component or to track values for a form component, such as form
          submission, when the form is disabled and the values of a form’s
          inputs.
          <br />
          <br />
          Global (UI) state – Global state is data we manage across multiple
          components.
          <br />
          Global state is necessary when we want to get and update data anywhere
          in our app, or in multiple components at least.
          <br />
          A common example of global state is authenticated user state. If a
          user is logged into our app, it is necessary to get and change their
          data throughout our application.
          <br />
          Sometimes state we think should be local might become global.
          <br />
          <br />
          Server state – Data that comes from an external server that must be
          integrated with our UI state.
          <br />
          Server state is a simple concept, but can be hard to manage alongside
          all of our local and global UI state.
          <br />
          There are several pieces of state that must be managed every time you
          fetch or update data from an external server, including loading and
          error state.
          <br />
          Fortunately there are tools such as SWR and React Query that make
          managing server state much easier.
          <br />
          <br />
          URL state – Data that exists on our URLs, including the pathname and
          query parameters.
          <br />
          URL state is often missing as a category of state, but it is an
          important one. In many cases, a lot of major parts of our application
          rely upon accessing URL state. Try to imagine building a blog without
          being able to fetch a post based off of its slug or id that is located
          in the URL!
          <br />
          There are undoubtedly more pieces of state that we could identify, but
          these are the major categories worth focusing on for most applications
          you build.
        </p>
      </div>
    </div>
  );
};

export default SQL;
