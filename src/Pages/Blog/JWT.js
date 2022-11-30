import React from "react";

const JWT = () => {
  return (
    <div className="pt-16 px-10">
      <div className="bg-base-300 lg:px-14 mb-10 rounded-lg pb-10 max-w-screen-xl px-8 mx-auto ">
        <h2 className="text-xl font-semibold text-center my-10 pt-8">
          How does prototypical inheritance work?
        </h2>
        <p>
          I'll have to respectfully disagree with Ryan about what "prototypal
          inheritance" means. While it's true that JavaScript is just objects
          and not classes, I take issue with the word "inheritance" itself, as
          that name implies (from classical languages) a copy-operation where
          behavior from the "parent" is duplicated into the "child". This is not
          at all how JavaScript works.
          <br />
          <br />
          In JavaScript, two objects end up linked to each other (via the
          technique Ryan showed), and this linkage is through the internal
          [[Prototype]] chain. As Tim Lind correctly explained in his answer,
          this linkage via [[Prototype]] is how when you ask for a property or
          method on an object, if it's not there, the internal [[Get]] lookup
          operation will traverse the [[Prototype]] chain and try to instead
          resolve the property/method on the linked object. If not found there,
          it will keep going up the [[Prototype]] chain until it either
          satisfies the lookup, or runs out of objects to traverse.
          <br />
          <br />
          When you analyze the mechanism in this way, it's clear that, by
          default, JavaScript isn't "inheriting" by copying DOWN the chain, but
          rather delegating UP the chain. It's a completely different mechanism.
          <br />
          <br />
          Many JavaScripters seem to think that adding "prototypal" to
          "inheritance" somehow means that they can fundamentally reverse the
          long-standing meaning of "inheritance", but I totally disagree. I
          think trying to do so is like comparing an apple to an orange, and
          saying 'No, no, that's not an apple, it's just a red orange'.
          <br />
          <br />
          I say we should call an apple an apple and an orange an orange.
          Class-oriented languages have inheritance. Object-languages like JS
          have behavior delegation. They're two separate mechanisms, inherently
          opposite in their effect. They lead to, I think, very different
          patterns for how to model tasks.
          <br />
          <br />
          And, in particular, I think the most confusion comes when trying to
          use deliberately conflated terms like "prototypal inheritance" and
          pretending that the reversal of the accepted meaning of the word is
          OK.
          <br />
          <br />
          So, inheritance vs. behavior delegation is the proper contrast, IMO.
          To put it another way, "OO" means "object oriented" (which really
          means class oriented), so to contrast that, I came up with "OLOO",
          which means "objects linked to other objects". At the end of the day,
          no matter what syntax hoops you jump through in JS to try to convince
          yourself you're doing classes, what you end up with is just a bunch of
          objects that are each linked to another object: behavior delegation.
          <br />
          <br />
          If you'd like to read more about my thoughts on the subject, I wrote
          JS Objects: Inherited a Mess
          (http://davidwalsh.name/javascript-objects) awhile back that's an in
          depth exploration of this topic. I am also writing a series of books
          called You-Dont-Know-JS, where the title I'm currently writing ("this
          & Object Prototypes") is actually heavily about this exact topic.
        </p>
      </div>
    </div>
  );
};

export default JWT;
