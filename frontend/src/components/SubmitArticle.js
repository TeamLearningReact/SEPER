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

    render(){
        return(
            
            <div className="form-container">
                <h2>This is the submit article page.
                        Where users can submit their article.
                </h2>
                <form>
                    <div className="form-input">
                    <input 
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={this.state.title}
                    //placeholder
                    onChange={2}
                    />
                    </div>
                    <div className="form-input">
                    <input 
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={this.state.author}
                    //placeholder
                    onChange={2}
                    />
                    </div>
                    <div className="form-input">
                    <input 
                    type="text"
                    name="source"
                    placeholder="Source"
                    value={this.state.source}
                    //placeholder
                    onChange={2}
                    />
                    </div>
                    <div className="form-input">
                    <input 
                    type="text"
                    name="year"
                    placeholder="Published Year"
                    value={this.state.year}
                    //placeholder
                    onChange={2}
                    />
                    </div>
                    <div className="form-input">
                    <input 
                    type="text"
                    name="doi"
                    placeholder="DOI"
                    value={this.state.doi}
                    //placeholder
                    onChange={2}
                    />
                    </div>
                    <div className="form-input">
                    <input 
                    type="text"
                    name="claim"
                    placeholder="What is the Claim?"
                    value={this.state.claim}
                    //placeholder
                    onChange={2}
                    />
                    </div>
                    <div className="form-input">
                    <input 
                    type="text"
                    name="evidence_level"
                    placeholder="Evidence Level"
                    value={this.state.evidence_level}
                    //placeholder
                    onChange={2}
                    />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
            
        );
    }


        

};

export default SubmitArticle;