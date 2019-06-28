// Page Definitions
// –––
// page1 and page2 define the page structure in 
// a serialized format and could be part of an 
// API response to a page or component 
// endpoint.

const page1 = {
  title: 'Page 1',
  sections: [{
    id: 'wzyQEG',
    component: 'Twitter',
    props: {
      head: 'Welcome oon Page 1',
      byline: 'Just one of these pages'
    }
  }, {
    id: 'anRAB',
    component: 'Copy',
    props: {
      content: 'Lorem ipsum dolor sit amet.'
    }
  }]
};

const page2 = {
  title: 'Page 2',
  sections: [{
    id: 'anRAB',
    component: 'Copy',
    props: {
      content: 'This page renders a different set of components.'
    }
  }, {
    id: 'naSUP',
    component: 'Channels',
    props: {
      children: [{
        id: 'zuDAS',
        component: 'Twitter',
        props: {
          handle: 'example.com',
          key: 'twitter'
        }
      }, {
        id: 'tuERA',
        component: 'Link',
        props: {
          subscribeUrl: 'https://google.com',
          key: 'link'
        }
      }]
    }
  }]
};


// Stock Components
// –––
// This is a set of comoponents that we support 
// to render in our <DynamicPage /> component. 
// 
// This pen only experiments with the business 
// logic of traversing the JSON and rendering 
// components accordingly. A big concern in a 
// real-world use case is how to dynamically 
// load components when they are required (and
// SSR them initially on the server).

const CompLabel = (props) => (
  <div className="complabel-component">
    Component: <b>{props.label}</b>
  </div>
);

const Cover = (props) => (
  <div className="cover-component">
    <CompLabel label="Cover" />
    <h1 className="cover-head">
      {props.head}
    </h1>
    <p className="cover-byline">
      {props.byline}
    </p>
  </div>
);

const Copy = (props) => (
  <div className="copy-component">
    <CompLabel label="Copy" />
    <div>{props.content}</div>
  </div>
);

const Channels = (props) => (
  <div className="channels-component">
    <CompLabel label="Channels" />
    <div>{props.children}</div>
  </div>
);

const Twitter = (props) => (
  <div className="twitter-component">
    <CompLabel label="Twitter" />
    <div>
      Twitter:&nbsp;
      <a href={`https://twitter.com/${props.handle}`} target ="_blank" rel="noopener noreferrer">
        @{props.handle}
      </a>
    </div>
  </div>
);

const Link = (props) => (
  <div className="newsletter-component">
    <CompLabel label="Link" />
    <div>
      Google:&nbsp;
      <a href={props.subscribeUrl} target="_blank" rel="noopener noreferrer">
        {props.subscribeUrl}
      </a>
    </div>
  </div>
);
  

const stock = { 
  Channels,
  Copy,
  Cover,
  Link,
  Twitter
};


// Generic Components

/**
 * Renders components based on data in the
 * {@code root} prop.
 */
class Section extends React.Component {
  
  get root() {
    return this.props.root;
  }
  
  get rSection() {
    return this.createElement(this.root);
  }
  
  /**
   * Returns React elements for each item in a 
   * definition tree.
   *
   * This method is the essence of the PEN. 
   * React's {@code render} method always 
   * returns a React element, which is what 
   * happens when we use JSX. 
   *
   * Since our requirement is to render 
   * components based on a serialized format we 
   * can't use JSX, as we don't know the 
   * order, arrangement, and combination of 
   * components at compile time. React's public 
   * {@code React.createElement()} method 
   * allows us to create these elements 
   * programmatically. 
   *
   * What makes it suitable is that it can also 
   * account for children, which enables 
   * handling a nested set of components (we do 
   * that with the {@code Channels}) component 
   * on page2).
   */
  createElement = (def) => {
    return React.createElement(
      stock[def.component], 
      def.props,
      ((def.props || {}).children || [])
        .map(c => this.createElement(c))
    );
  };
  
  render() {
    return (
      <section className="section-component">
        {this.rSection}
      </section>
    );
  }
}


/**
 * Renders a page defined by its JSON 
 * structure.
 *
 * See {@code page1} and {@code page2} const at 
 * the top.
 */
class DynamicPage extends React.Component {
  
  get sections() {
    return this.props.page.sections;
  }
  
  get rSections() {
    return this.sections.map(
      s => <Section key={s.id} root={s} />
    );
  }
  
  render() {
    return (
      <div className="dynamicpage-component">
        {this.rSections}
      </div>
    );
  }
}
  
  
// Utility component to highlight JSON of 
// current page using:
// https://github.com/isagalaev/highlight.js
  
class HighlightJs extends React.Component {
  
  componentDidMount() {
    this.highlight();
  }

  componentDidUpdate() {
    this.highlight();
  }
  
  highlight = () => {
    try {
      hljs.highlightBlock(this.refs.code);
    } catch (e) {
      console.log(hljs, window.hljs);
    }
  };
  
  render() {
    return (
      <div className="highlightjs-component">
        <p><b>JSON for currently rendered page</b></p>
        <pre>
          <code className="json" ref="code">
            {JSON.stringify(this.props.code, null, 2)}
          </code>
        </pre>
      </div>
    );
  }
  
}
  
// App Component
// –––
// Orchestartes the state in our example, which 
// in real world would probably be handled by 
// some state container.
  
class App extends React.Component {
  
  constructor(...args) {
    super(...args);
    
    this.state = {
      curPage: page1
    };
  }
  
  gotoPage = (nextPage) => {
    this.setState({ curPage: nextPage });
  };
  
  render() {
    return (
      <div className="app-component">
        <nav className="app-nav">
          <button onClick={ev => this.gotoPage(page1)}>Page 1</button>
          <button onClick={ev => this.gotoPage(page2)}>Page 2</button>
        </nav>
        <p>Current Page: <b>{this.state.curPage.title}</b></p>
        <DynamicPage page={this.state.curPage} />
        <HighlightJs code={this.state.curPage} />
      </div>
    );
    
  }
}


// Rendering to DOM

ReactDOM.render(
  <App />, 
  document.getElementById('slot')
);
