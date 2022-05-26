import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div class="blog-container w-80">
      <h2 className="text-2xl font-bold text-primary text-center my-5">
        This is Blog
      </h2>
      <div class="single-blog">
        <h5>How will you improve the performance of a React Application?</h5>
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
          <span class="answare-keyword">Answare:</span> We can use state in two primary places where the state will reside: in components, or in a central store. There are many ways to deal with the state, including render props, the Context API, and Redux. Note that I labeled this section “Local state.” These approaches are useful when the state is used by a few components. The local state can be passed down to child components via props. If you need to declare data that are used by your entire app, or a large portion of your app, consider the global state. React offers built-in support for global states and functions via context. When we declare a state in context changes, child components re-render.
        </p>
      </div>
      <div class="single-blog">
        <h5 className="font-bold">How does prototypical inheritance work?</h5>
        <p>
          <span class="answare-keyword">Answare:</span> Prototypical Inheritance is a feature of programming language.  JavaScript is a prototype-based language. It means that objects inherit directly from other objects. The language is designed such that objects are linked together in a chain, with the topmost object in the chain being the root object. JavaScript objects have a link to a prototype object. When we try to access a property of an object, the property will not only be sought on the object but on the prototype of the object. javascript functions are able to have properties. All functions have a special property named prototype


        </p>
      </div>
      <div class="single-blog">
        <h5 className="font-bold">
          Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts
        </h5>
        <p>
          <span class="answare-keyword">Answare:</span> We do not change data or state directly. So we use useState to change and keep tracking the change automatically. So we use UseState instead of direct change   like [...].
        </p>
      </div>
      <div class="single-blog">
        <h5 className="font-bold">
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h5>
        <p>
          <span class="answare-keyword">Answare:</span> We can find a product by name in a array. We cang use find method to find this product. We use find(). we should use like this Array.find(name)
        </p>
      </div>
      <div class="single-blog">
        <h5 className="font-bold">
          What is a unit test? Why should write unit tests?
        </h5>
        <p>
          <span class="answare-keyword">Answare:</span>The unit testing is a software testing process. Unit means one small pieces of  components of software. In unit testing the whole software is tested by small unit by unit. Developers use this unit test process to test the software work properly or not.

        </p>
      </div>
    </div>
  );
};

export default Blogs;
