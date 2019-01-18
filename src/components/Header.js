import React,{Component} from 'react';

// import jQuery from 'jquery';
// import 'bootstrap';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import { Route,Router,Link} from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    componentDidMount(){
        var _this = this,
        progwidth = 0;
        var time = setInterval(()=>{
            if(progwidth<100){
                progwidth += 10;
                _this.refs.progress_bar.style.width = progwidth+'%';
                _this.refs.progress_bar.textContent = progwidth + '%';
            }else{
                _this.refs.progress_bar.parentElement.style.display = 'none';
                clearInterval(time);
            }
        },1000)
    }
    render() {
        return (
            <div>
                <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="/#">BLOGGER</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1} href="#">
                        Link
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                        Link
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                <div className="progress">
                    <div ref='progress_bar' className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{'width':'0%'}}>
                    0%
                </div>
                </div>
            </div>
        );
    }
}

export default Header;