import React from "react";

const NodeMulti = () => {
  return (
    <div className="pt-16 px-10">
      <div className="bg-base-300 px-6 lg:px-14 mb-10 rounded-lg pb-10 max-w-screen-xl mx-auto">
        <h2 className="text-xl font-semibold text-center my-10 pt-8">
          React vs. Angular vs. Vue?
        </h2>
        <p>
          Angular, React.js & Vue <br />
          <br />
          Angular, React and Vue are all highly popular JavaScript libraries and
          frameworks that help developers build complex, reactive and modern
          user interfaces for the web. Actually, with additional libraries like
          React Native, Ionic (with Angular or with React) or NativeScript you
          can even build native mobile apps for mobile devices with help of
          Angular, React and Vue.
          <br />
          <br />
          In this article, we'll not really look at why you would need such a
          framework. I'll also not start explaining those libraries here - for
          that, you can check out other resources, like my courses on those
          topics (Angular, React, Vue - all included in our Pro subscription of
          course).
          <br />
          <br />
          Instead, I want to share some thoughts on how those frameworks and
          libraries compare and which of the three you might want to choose for
          your next project.
          <br />
          I also want to mention that there are other, smaller, libraries or
          technologies like Svelte which do similar things. I do have a
          comparison on Svelte vs Angular etc as well.
          <br />
          <br />
          How Do You Decide Which One Is Best?
          <br />
          <br />
          One important note first: There is no best framework or library here.
          All three libraries are very popular for good reasons. They all have
          their strengths and weaknesses and you can generally use either of the
          libraries for any project.
          <br />
          In this article, we'll have a look at some strengths and weaknesses,
          we'll have a look at "what the market says" (jobs, download statistics
          etc) and I'll share my very personal opinion as well.
          <br />
          But to be clear about one thing right away: Ultimately, it's very
          important if you like a framework/ library or not. If you like its
          syntax, its way of approaching things and if you like how you write
          code with it. If you don't like a technology, you'll not be able to
          work with it successfully! On the other hand, you'll be able to get a
          lot out of each library if you simply enjoy working with it!
          <br />
          <br />
          #Framework Backgrounds
          <br />
          Some background first:
          <br />
          <br />
          Angular is a framework developed by Google: Google also uses Angular
          internally, hence we'll not see Angular disappear over night. It will
          be maintained and continuously improved
          <br />
          <br />
          React is a library built by Facebook: Facebook also uses React
          internally, hence we'll not see React disappear over night. It will be
          maintained and continuously improved
          <br />
          <br />
          Vue is a "standalone" project that is not built inside of any company.
          It used to be a one-man show (Evan You, its founder) but those days
          are long gone. Nowadays, it has a dedicated team of core contributors
          that work on Vue.
          <br />
          <br />
          Comparing Philosophies
          <br />
          <br />
          Let's start with the general philosophy of each framework (side-note:
          I'll say "framework" here even though React.js is a "library". Get
          over it ;-)).
          <br />
          <br />
          #Angular
          <br />
          <br />
          Angular definitely is the "biggest" framework of the three. It's
          sometimes even called a "platform" rather than a framework.
          <br />
          <br />
          Why?
          <br />
          <br />
          Because Angular out of the box includes support for a lot of things.
          It helps you (= the developer) with controlling the UI, reacting to
          user input, validating user input in forms, routing, state management
          sending Ajax Http requests, providing offline support & PWA
          capabilities, testing, building your application, managing multiple
          applications and connecting them and much, much more!
          <br />
          All frameworks have the goal of making it easier for you, as a
          developer, to build reactive, complex user interfaces. But Angular
          gives you the full set of tools for that. It doesn't stop after DOM
          manipulation support - it adds the above-mentioned features to help
          you with any aspect you could require in apps you're working on.
          <br />
          In addition, there's an official CLI which helps you with creating and
          managing Angular projects, with keeping them up-to-date, with adding
          dependencies and even with deployment!
          <br />
          In its core, Angular is all about building re-usable user interface
          components which you then control with Angular and which you can
          combine with other components to build an entire user interface from
          those Angular-controlled components.
          <br />
          Angular includes UI capabilities, state management, routing, form
          handling, an Http client and much more!
          <br />
          This table does not include all features Angular offers (because it
          does offer more than that) but instead I focused on the most important
          features you need in many applications.
          <br />
          <br />
          #React (or React.js)
          <br />
          React is totally different!
          <br />
          <br />
          Where Angular gives you everything, React gives you only one thing: A
          library for rendering content to the DOM and controlling it
          efficiently thereafter. It's also all about components and all about
          building user interfaces from components. It also gives you all the
          "tools" you need to define what should be rendered in which way under
          which circumstances.
          <br />
          But it does not include built-in form validation support. It does not
          include a router (for rendering different components based on URL
          changes) and it does not ship its own Http client. It has some state
          management support built-in but not for all scenarios. It also does
          not come with any other special features and it's definitely "slimmer"
          than Angular in that regard. For those features, you have to rely on
          the (arguably quite active) React community.
          <br />
          React includes UI capabilities but only limited state management and
          no routing, form handling or Http client!
          <br />
          This is not necessarily good or bad (neither is it for Angular) - I'll
          dive into the pros and cons of those approaches a little bit later.
          For now, I just want to describe the different philosophies.
          <br />
          <br />
          #Vue (or Vue.js)
          <br />
          <br />
          Vue is a framework which kind of sits between React and Angular. It's
          not as "big" as Angular but it definitely includes more features than
          React does. Vue does give you built-in state management and it also
          ships with a built-in router. It does, however, not include form
          validation or Http client functionalities.
          <br />
          Just like Angular and React, the core of Vue is all about building
          user interfaces by combining re-usable components. But beyond that, it
          gives you a bit more than React and a bit less than Angular.
        </p>
      </div>
    </div>
  );
};

export default NodeMulti;
