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
          <span class="answare-keyword">Answare:</span> ....
        </p>
      </div>
      <div class="single-blog">
        <h5 className="font-bold">How does prototypical inheritance work?</h5>
        <p>
          <span class="answare-keyword">Answare:</span>....
        </p>
      </div>
      <div class="single-blog">
        <h5 className="font-bold">
          Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts
        </h5>
        <p>
          <span class="answare-keyword">Answare:</span>....
        </p>
      </div>
      <div class="single-blog">
        <h5 className="font-bold">
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h5>
        <p>
          <span class="answare-keyword">Answare:</span>....
        </p>
      </div>
      <div class="single-blog">
        <h5 className="font-bold">
          What is a unit test? Why should write unit tests?
        </h5>
        <p>
          <span class="answare-keyword">Answare:</span>....
        </p>
      </div>
    </div>
  );
};

export default Blogs;
