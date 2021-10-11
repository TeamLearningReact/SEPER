//OLD ONE
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import axios from 'axios';


class SubmitArticle extends Component {

    constructor(){
        super()
        this.state = {
            title:'',
            author:'',
            source:'',
            year:'',
            doi:'',
            SE_practice:'',
            titleError:'',
            authorError:''
        }
        this.changeTitle = this.changeTitle.bind(this);
        this.changeAuthor = this.changeAuthor.bind(this);
        this.changeSource = this.changeSource.bind(this);
        this.changeYear = this.changeYear.bind(this);
        this.changeDoi = this.changeDoi.bind(this);
        this.changeSE_Practice = this.changeSE_Practice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeTitle(event){
        this.setState({
            title:event.target.value
        })
    }
    changeAuthor(event){
        this.setState({
            author:event.target.value
        })
    }
    changeSource(event){
        this.setState({
            source:event.target.value
        })
    }
    changeYear(event){
        this.setState({
            year:event.target.value
        })
    }
    changeDoi(event){
        this.setState({
            doi:event.target.value
        })
    }
    changeSE_Practice(event){
        this.setState({
            SE_practice:event.target.value
        })
    }

    validate = () => {
        let titleError='';
        let authorError='';

        if(!this.state.title){
            titleError = "Title cannot be blank";
        }

        if(!this.state.author){
            authorError = "Author cannot be blank";
        }

        if(titleError || authorError){
            this.setState({ titleError, authorError });
            return false;
        }
        return true;
    };

    onSubmit(event){
        event.preventDefault();

        const isValid = this.validate();
        if(isValid) {
            const registered = {
                title:this.state.title,
                author:this.state.author,
                source:this.state.source,
                year:this.state.year,
                doi:this.state.doi,
                SE_practice:this.state.SE_practice
    
            }
    
            axios.post('http://localhost:3001/api/save', registered)
                .then(res => console.log(res.data))
    
            this.setState({
                title:'',
                author:'',
                source:'',
                year:'',
                doi:'',
                SE_practice:'',
                titleError:'',
                authorError:''
            })

        }

        
    }

    render(){
        
        console.log('State', this.state);
        return(

            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type = 'text'
                            placeholder='Title*'
                            onChange={this.changeTitle}
                            value={this.state.title}
                            className='form-control form-group'
                            />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.titleError}</div>

                            <input type = 'text'
                            placeholder='Author*'
                            onChange={this.changeAuthor}
                            value={this.state.author}
                            className='form-control form-group'
                            />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.authorError}</div>

                            <input type = 'text'
                            placeholder='source'
                            onChange={this.changeSource}
                            value={this.state.source}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='year'
                            onChange={this.changeYear}
                            value={this.state.year}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='doi'
                            onChange={this.changeDoi}
                            value={this.state.doi}
                            className='form-control form-group'
                            />

                            <select>
                                <option>Select SE Practice...</option>
                                <option 
                                onChange={this.changeSE_Practice}
                                value={this.state.SE_practice}>
                                    TDD
                                </option>
                                <option 
                                onChange={this.changeSE_Practice}
                                value={this.state.SE_practice}>
                                    Mob Programming
                                </option>
                            </select>

                            <p><input type='submit' className='btn btn-danger btn-block' value='Submit'/></p>

                        </form>

                    </div>

                </div>
            </div>
    
        );
    }


        

};

export default SubmitArticle;