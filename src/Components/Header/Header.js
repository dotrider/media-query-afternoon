import React,{Component} from 'react';


export default class Header extends Component {
    constructor(){
        super();
        this.state = {
            viewMenu: false
        }
    }

    toggleMenuView = () => {
        this.setState({
            viewMenu: !this.state.viewMenu
        })
    }

render(){
    return(
        <div className='main-header'>
            <header>
                <h2>Start Bootstrap</h2>
                <button className='btn' onClick={this.toggleMenuView}>Menu</button>

               
            </header>
            <section className='cont'>
                <nav className='mobilenav' className={this.state.viewMenu ? 'viewmenu' : 'hidemenu'}> 
                    <a href='#'>Services</a>
                    <a href='#'>Portfolio</a>
                    <a href='#'>About</a>
                    <a href='#'>Team</a>
                    <a href='#'>Contact</a>
                </nav>
            <section className='sub-header'>
                <h3>Welcome To Our Studio!</h3>
                <h1>It's Nice To Meet You</h1>
                <button className='btn btn2'>Tell Me More</button>
            </section>    
            </section>  
            
        </div>
    )
}

}