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
            journalName:'',
            year:'',
            volume:'',
            number:'',
            pages:'',
            doi:'',
            SE_practice:'',
            titleError:'',
            authorError:'',
            journalError:'',
            yearError:'',
            pagesError:''
        }
        this.changeTitle = this.changeTitle.bind(this);
        this.changeAuthor = this.changeAuthor.bind(this);
        this.changeJournalName = this.changeJournalName.bind(this);
        this.changeYear = this.changeYear.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.changeNumber = this.changeNumber.bind(this);
        this.changePages = this.changePages.bind(this);
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
    changeJournalName(event){
        this.setState({
            journalName:event.target.value
        })
    }
    changeYear(event){
        this.setState({
            year:event.target.value
        })
    }
    changeVolume(event){
        this.setState({
            volume:event.target.value
        })
    }
    changeNumber(event){
        this.setState({
            number:event.target.value
        })
    }
    changePages(event){
        this.setState({
            pages:event.target.value
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
        let journalError='';
        let yearError='';
        let pagesError='';


        if(!this.state.title){
            titleError = "Title cannot be blank";
        }

        if(!this.state.author){
            authorError = "Author cannot be blank";
        }
        if(!this.state.journalName){
            journalError = "Journal name cannot be blank";
        }
        if(!this.state.year){
            yearError = "Published year name cannot be blank";
        }
        if(!this.state.pages){
            pagesError = "Pages cannot be blank";
        }
        if(titleError || authorError || journalError || yearError || pagesError){
            this.setState({ titleError, authorError, journalError, yearError, pagesError});
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
                journalName:this.state.journalName,
                year:this.state.year,
                volume:this.state.volume,
                number:this.state.number,
                pages:this.state.pages,
                doi:this.state.doi,
                SE_practice:this.state.SE_practice
    
            }
    
            axios.post('http://localhost:3001/api/save', registered)
                .then(res => console.log(res.data))
    
            this.setState({
                title:'',
                author:'',
                journalName:'',
                year:'',
                volume:'',
                number:'',
                pages:'',
                doi:'',
                SE_practice:'',
                titleError:'',
                authorError:'',
                journalError:'',
                yearError:'',
                pagesError:''
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
                            placeholder='Journal Name*'
                            onChange={this.changeJournalName}
                            value={this.state.journalName}
                            className='form-control form-group'
                            />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.journalError}</div>

                            <input type = 'text'
                            placeholder='Published Year*'
                            onChange={this.changeYear}
                            value={this.state.year}
                            className='form-control form-group'
                            />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.yearError}</div>

                            <input type = 'text'
                            placeholder='Volume'
                            onChange={this.changeVolume}
                            value={this.state.volume}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='Number'
                            onChange={this.changeNumber}
                            value={this.state.number}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='Page(s)*'
                            onChange={this.changePages}
                            value={this.state.pages}
                            className='form-control form-group'
                            />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.pagesError}</div>

                            <input type = 'text'
                            placeholder='doi'
                            onChange={this.changeDoi}
                            value={this.state.doi}
                            className='form-control form-group'
                            />

                            <select value={this.state.SE_practice} onChange={this.changeSE_Practice}>
                                <option>Select SE Practice...</option>
                                <option value="TDD">TDD</option>
                                <option value="Mob Programming">Mob Programming</option>
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