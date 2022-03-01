Initial Release 2013
  By Facebook 

Tools
  node 
  yarn / npm 

  HTML JS CSS, WEBPACK, BABEL 
  JSX 
  
  create-react-app
    Boiler plate

    npx create-react-app my-app
    npm init react-app my-app
    yarn create react-app my-app

  Google Chrome

  React Dev Tools




ReactJS is a library, NPM package
  "Just JavaScript" 



React provides a declarative API complete with 
  state control and 
  lifecycle methods to control the render flow.



What about other solutions:
  Angular
  Ember
  Vue
  etc...
  




Key Principles 
  Declarative.  
  Composability
  1 Way data flow (props)
  Virtual DOM - in memory cache, computes differences and render on a copy of the DOM 
    - reconciliation 
    - selective rendering for components 
  State - Storage 
  Props - Properties passed down from parent child 
  JSX - JavaScript XML, JS and HTML  
    onClick
    className
    {}
    <>

    </>
    <div>
      <h1 className='header'>{text}</h1>
      <h1></h1>
      <h1></h1>
    </div>

    // <h1></h1>
    // <h1></h1>
    // React.createelement.ComponentReact.createelement.Component
    // React.createelement.Component(div h1 h1 div)
  Components - block of the front end for us to use, and maybe reuse









Logical Component ( Stateful component, class ) old
  do logic - function
  state 
  lifecycle Methods
  class 

  class Com extends Component {

    this.props
    render() {
      return(

      )
    }
  }
  

Presentational Component ( stateless component, functional ) new
  displaying onto the screen  
  const
  function

  const Com = ({ color }) => (

  )

  // const Com = (props) => (
  //     props.color
  // )
  const Com = ({}) => {
    const [valu, setVal] = useState(0) 
    return (

    )
  }


HOC 
  Higher ordered component

State - storage { users: [], firstName: '' }
  JS Object we can store properties in
  Component Storage
  When a value changes in state, render is called


Props 
  Properties passed down parent to child
  One way 
  Read only 

  // render component: "Index", props: { user: @user, contacts: @contact }

          //         App color
          //        /   \
          //               Counter
          //    Counter color



  /*                 Todo List Structure

                          Index
                            |
                          App (todos)(addTodo) (updateComplete)    
                           /  \                   \
           (addTodo)TodoForm   List (todos) (updateComplete)      Footer
                                  |       |     |
                                Todo(updateComplete)    Todo(updateComplete)    Todo(updateComplete) 

  */

//  Index
//  |
// App      
//     /  \         \
// Home   List    Footer
//   |
//   Logo  info

any time you are creating a folder it is lowercase 
Component files are uppercase