

class App extends Component {
    constructor(props){
        super(props);
        this.someFunc = this.someFunc.bind(this);
    }
    someFunc(){
        console.log('someFuncy func');
    }
    render(){
        return(
            <div className='app'> </div>
        );
    }
}

class ChildComponent extends App {
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.someFunc());
        return(
            <div className='app'> </div>
        );
    }
}