//OLD ONE
import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

class SubmitArticle extends Component {
    constructor(){
        super();
        this.state = {
            title:'',
            author:'',
            source:'',
            year:'',
            doi:'',
            claim:'',
            evidence_level:''
        };
    }

    //responsible for updating the states.
    handleChange = (event) => {
        //const { name, value } = target;
        const target = event.target;
        const name = target.name;
        const value = target.value;

        //dynamically pass values coming from form inputs
        this.setState({
            [name]: value
        });

    };

    submit = (event) => {
        event.preventDefault();
        const payload = {
            title: this.state.title,
            author: this.state.author,
            source: this.state.source,
            year: this.state.year,
            doi: this.state.doi,
            claim: this.state.claim,
            evidence_level: this.state.evidence_level 
        };

        //send data to the server via POST request
        
            /*.post('/save', payload)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    title:'',
                    author:'',
                    source:'',
                    year:'',
                    doi:'',
                    claim:'',
                    evidence_level:''
                })
                console.log('Data has been sent to the server');
                
            })
            .catch((error) => {
                console.log('Error in Submit article!');
            })*/
        
        axios({
            url:'/save',
            method:'POST',
            data: payload
        })
             .then(() => {
                console.log('Data has been sent to the server');
            })
            .catch(() => {
                console.log('Internal server error');
            });
            

    };
    

    render(){
        
        console.log('State', this.state);
        return(
            
            <div className="form-container">
                <h2>This is the submit article page.
                        Where users can submit their article.
                </h2>
                <form onSubmit={this.submit}>
                    <div className="form-input">
                    <input 
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={this.state.title}
                    //placeholder
                    onChange={this.handleChange}
                    />
                    </div>
                    <div className="form-input">
                    <input 
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={this.state.author}
                    //placeholder
                    onChange={this.handleChange}
                    />
                    </div>
                    <div className="form-input">
                    <input 
                    type="text"
                    name="source"
                    placeholder="Source"
                    value={this.state.source}
                    //placeholder
                    onChange={this.handleChange}
                    />
                    </div>
                    <div className="form-input">
                    <input 
                    type="text"
                    name="year"
                    placeholder="Published Year"
                    value={this.state.year}
                    //placeholder
                    onChange={this.handleChange}
                    />
                    </div>
                    <div className="form-input">
                    <input 
                    type="text"
                    name="doi"
                    placeholder="DOI"
                    value={this.state.doi}
                    //placeholder
                    onChange={this.handleChange}
                    />
                    </div>
                    <div className="form-input">
                    <input 
                    type="text"
                    name="claim"
                    placeholder="What is the Claim?"
                    value={this.state.claim}
                    //placeholder
                    onChange={this.handleChange}
                    />
                    </div>
                    <div className="form-input">
                    <input 
                    type="text"
                    name="evidence_level"
                    placeholder="Evidence Level"
                    value={this.state.evidence_level}
                    //placeholder
                    onChange={this.handleChange}
                    />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
    
        );
    }


        

};

export default SubmitArticle;