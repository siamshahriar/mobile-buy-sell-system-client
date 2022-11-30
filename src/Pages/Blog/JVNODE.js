import React from "react";

const JVNODE = () => {
  return (
    <div className="pt-24 px-10">
      <div className="bg-base-300 px-8 lg:px-14 mb-10 rounded-lg pb-10 max-w-screen-xl mx-auto">
        <h2 className="text-xl font-semibold text-center py-10 pt-8">
          What is a unit test? Why should we write unit tests?
        </h2>
        <p>
          Unit testing is a software development process in which the smallest
          testable parts of an application, called units, are individually and
          independently scrutinized for proper operation. This testing
          methodology is done during the development process by the software
          developers and sometimes QA staff. The main objective of unit testing
          is to isolate written code to test and determine if it works as
          intended. <br />
          <br />
          Unit testing is an important step in the development process, because
          if done correctly, it can help detect early flaws in code which may be
          more difficult to find in later testing stages.
          <br />
          <br />
          Unit testing is a component of test-driven development (TDD), a
          pragmatic methodology that takes a meticulous approach to building a
          product by means of continual testing and revision. This testing
          method is also the first level of software testing, which is performed
          before other testing methods such as integration testing. Unit tests
          are typically isolated to ensure a unit does not rely on any external
          code or functions. Testing can be done manually but is often
          automated.
          <br />
          <br />
          How unit tests work
          <br />
          A unit test typically comprises of three stages: plan, cases and
          scripting and the unit test itself. In the first step, the unit test
          is prepared and reviewed. The next step is for the test cases and
          scripts to be made, then the code is tested.
          <br />
          <br />
          Test-driven development requires that developers first write failing
          unit tests. Then they write code and refactor the application until
          the test passes. TDD typically results in an explicit and predictable
          code base.
          <br />
          <br />
          Each test case is tested independently in an isolated environment, as
          to ensure a lack of dependencies in the code. The software developer
          should code criteria to verify each test case, and a testing framework
          can be used to report any failed tests. Developers should not make a
          test for every line of code, as this may take up too much time.
          Developers should then create tests focusing on code which could
          affect the behavior of the software being developed.
          <br />
          <br />
          Unit testing involves only those characteristics that are vital to the
          performance of the unit under test. This encourages developers to
          modify the source code without immediate concerns about how such
          changes might affect the functioning of other units or the program as
          a whole. Once all of the units in a program have been found to be
          working in the most efficient and error-free manner possible, larger
          components of the program can be evaluated by means of integration
          testing. Unit tests should be performed frequently, and can be done
          manually or can be automated.
          <br />
          <br />
          Types of unit testing
          <br />
          Unit tests can be performed manually or automated. Those employing a
          manual method may have an instinctual document made detailing each
          step in the process; however, automated testing is the more common
          method to unit tests. Automated approaches commonly use a testing
          framework to develop test cases. These frameworks are also set to flag
          and report any failed test cases while also providing a summary of
          test cases.
          <br />
          Advantages and disadvantages of unit testing
          <br />
          Advantages to unit testing include: <br />
          <br />
          The earlier a problem is identified, the fewer compound errors occur.
          <br />
          Costs of fixing a problem early can quickly outweigh the cost of
          fixing it later.
          <br />
          Debugging processes are made easier.
          <br />
          Developers can quickly make changes to the code base.
          <br />
          Developers can also re-use code, migrating it to new projects.
          <br />
          <br />
          Disadvantages include:
          <br />
          Tests will not uncover every bug.
          <br />
          Unit tests only test sets of data and its functionality—it will not
          catch errors in integration.
          <br />
          More lines of test code may need to be written to test one line of
          code—creating a potential time investment.
          <br />
          Unit testing may have a steep learning curve, for example, having to
          learn how to use specific automated software tools.
          <br />
        </p>
      </div>
    </div>
  );
};

export default JVNODE;
