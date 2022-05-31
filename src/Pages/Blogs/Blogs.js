import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div class="blog-container w-80">
      <h2 className="text-2xl font-bold text-primary text-center my-5">
        This is Blog
      </h2>
      <div class="single-blog">
        <h5 className="font-bold">How will you improve the performance of a React Application?</h5>
        <p>
          <span class="answare-keyword">Answare:</span> We can improve the
          performance of a React Application by many ways. Some of them are
          discribed here. We can use Immutable Data Structures, this make our
          react app faster. Also Function or Stateless Components make smooth to
          work react app and useing React.PureComponent make it fast. We always
          should Avoid Reconciliation because it kills time to run app. Useing
          React.Fragment is best option to Avoid Adding Extra Nodes to the DOM.
          by using React.Fragment make app fast. We cal also use Use React.memo
          for Component Memoization to make it fast. We should always Avoid
          Anonymous Functions, because Anonymous Functions make app very slow.
          We should Use React.lazy and React.Suspense to get good performances.
          We always Use Production Build components to make our react app faster
          and get good performances.
        </p>
      </div>
      <div class="single-blog">
        <h5 className="font-bold">
          What are the different ways to manage a state in a React application?
        </h5>
        <p>
          <span class="answare-keyword">Answare:</span> We know that there are
          four kinds of state: Local state, Global state, Server state, URL
          state. The local state can be passed down to child components via
          props. We can use the global state If we need to declare data that is
          used by our entire app or a large part of our app. React offers
          built-in support for global states and functions via context. When we
          declare a state in context changes, child components re-render. We can
          use state in two primary places where the state will reside: in
          components or in a central store. There are many ways to deal with the
          state, including render props, the Context API, and Redux. By using
          local state we can manage data in one or another component. To manage
          a state, we can use a state management library named Redux. It
          provides a JavaScript object named the store. When we set up this, it
          manages all of our states in your application and updates the states
          when necessary.
        </p>
      </div>
      <div class="single-blog">
        <h5 className="font-bold">How does prototypical inheritance work?</h5>
        <p>
          <span class="answare-keyword">Answare:</span> The Prototypal
          Inheritance is method which is used javaScript. As JavaScript is a
          prototype-based, Object Oriented programming language, the objects and
          methods can be shared, extended, and copied. In JavaScript, objects
          have a special hidden property named Prototypal Inheritance. So, we
          use it to add methods and properties in objects in javaScript. By
          using the Prototypal Inheritance, an object can inherit the properties
          and methods of another object. As javaScript is one of the most common
          of the prototype-capable languages whih capabilities are relatively
          unique. In a word, we can say that, prototypical inheritance specail
          feature which refers to the ability to access object properties from
          another object. Some Inherit properties and methods from a prototype
          in javaScript like: Date.prototype inherit data and Array.prototype
          which inherit Array.
        </p>
      </div>
      <div class="single-blog">
        <h5 className="font-bold">
          Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts
        </h5>
        <p>
          <span class="answare-keyword">Answare:</span> We should never update
          the state directly because there are some reason. If we update the
          state directly after using the setState(), the change just replace the
          update we have made before. As we know that, the state is immutable.
          So we should not modify it directly. For that reasion we create a new
          object to set the state using setState. React need to compare with the
          previous state with the updated state to decide if the component needs
          to be re-rendered or not. To re-rander the component, react Call the
          updater functions one after another to re-rendering both the parent
          and child components. If we Modify the state directly, then this will
          disturb the whole process. As a result the react component will behave
          unexpectedly. So, we do not set the state directly in React. Instead,
          we use the setProducts.
        </p>
      </div>
      <div class="single-blog">
        <h5 className="font-bold">
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h5>
        <p>
          <span class="answare-keyword">Answare:</span> There are some different
          methods to search for an item in an array in JavaScript. We can use
          any of them base on our specific use case. If we want to find the
          first element that match the product name, we can use find method. We
          can use products.find(product => product.name == ''productName" ).
          This will return only the first product which name is match with the
          search name. On the other hand, If we want to find all the elements
          that match the product name, we can use filter() method. We can use
          products.filter(product => product.name == ''productName" ). This will
          return all of the products which name are match with the search name.
        </p>
      </div>
      <div class="single-blog">
        <h5 className="font-bold">
          What is a unit test? Why should write unit tests?
        </h5>
        <p>
          <span class="answare-keyword">Answare:</span> The Unit tests are some
          codes which is automated tests thesmall parts of an software. The unit
          tests code are written and run by software developers. The unit tests
          are used ensure behavour of the software of an application whether it
          meets its design and behaves as planed. There are two kind of unit
          tests: Manual and Automat tasting. We can use unit testing in anywhere
          our project where we want. We ca use it in a line of code, a method,
          or a class. We should use unit testing to save time rather doing it
          manually. It also finds problems early in the development cycle. So
          that, we can fix bugs early in the development cycle and save costs.
          By unit testsing, we can re-use the code. We cab migrate the code and
          unit tests in our new project.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
