import { Component } from 'react';
import './Classform.css'
class Classform extends Component{
    state = {
        Name : '',
        Dept : '',
        Rating : '' ,
        EmpData : []
    }
    changeHandle = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    clickHandle = (e) =>{
        e.preventDefault();
        let newObj = {
            name: this.state.Name,
            dept: this.state.Dept,
            rate: this.state.Rating
        }
        this.state.EmpData.push(newObj);
        this.setState({
            EmpData: this.state.EmpData,
            Name:'',
            Dept:'',
            Rating:''
        })
    }
    render(){
        return(
            <>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
                <form>
                    <div className='one'>
                    <label htmlFor='name'>Name: </label>
                    <input className='go' id='name' type='text' name='Name' value={this.state.Name} onChange={this.changeHandle} required/>
                    </div>
                    <div className='two'>
                    <label htmlFor='dept'>Department: </label>
                    <input className='go' id='dept' type='text' name='Dept' value={this.state.Dept} onChange={this.changeHandle} required/>
                    </div>
                    <div className='three'>
                    <label htmlFor='rate'>Rating: </label>
                    <input className='go' id='rate' type='number' name='Rating' value={this.state.Rating} onChange={this.changeHandle} required/>
                    </div>
                    <button onClick={this.clickHandle}>submit</button>
                </form>
                <div className='r'>
                {this.state.EmpData.map((item,index) =>{
                    return(
                        <div key={index} className='shows'>
                        <span  className="show">Name: {item.name} || Department: {item.dept} || Rating: {item.rate} </span>
                        </div>
                    )
                })}
                </div>
            </>
        )
    }
}
export default Classform;