import React, { Component } from 'react';

import {firebaseDB} from '../../firebase.js';

class form extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : '',
            body : '',
            errorMessage : '',
            succMessage : ''
        }
    }

    // Changer le formulaire . 
    componentWillMount(){
        if(this.props.type === 'edit'){
            firebaseDB.ref(`notes/${this.props.id}`)
            .once('value').then((snapShot) => {
                this.setState({
                    title : snapShot.val().title,
                    body : snapShot.val().body
                })
            })
        }
    }

    onTitleChanged = (event) => {
        this.setState({
            title : event.target.value,
            errorMessage : ''
        })
    }

    onBodyChanged = (event) => {
        this.setState({
            body : event.target.value,
            errorMessage : ''
        })
    }

    /*formSubmit = (event) => {
        // Pour annuler le chargement de submit (annuler submit) . 
        event.preventDefault();
        if(this.state.title && this.state.body !== '')
        {
            let note ={
                title : this.state.title,
                body : this.state.body
            }
            firebaseDB.ref('notes')
                .push(note)
                .then(() => {
                    this.setState({
                        succMessage : <span className='scc'>
                                            Bien Ajouter . 
                                      </span>,
                        errorMessage : '',
                        title : '',
                        body : ''
                    })
            }).catch((e) => {
                alert(e);
            });
        }else{
            this.setState({
                errorMessage : 'Shamps Obligatoire'
                
            });
        }
    }*/

    formSubmit = (event) => {
        // Pour annuler le chargement de submit (annuler submit) . 
        event.preventDefault();
        switch(this.props.type)
        {
            case 'add':
                    if(this.state.title && this.state.body !== '')
                    {
                        let note ={
                            title : this.state.title,
                            body : this.state.body
                        }
                        firebaseDB.ref('notes')
                            .push(note)
                            .then(() => {
                                this.setState({
                                    succMessage : <span className='scc'>
                                                        Bien Ajouter . 
                                                </span>,
                                    errorMessage : '',
                                    title : '',
                                    body : ''
                                })
                        }).catch((e) => {
                            alert(e);
                        });
                    }else{
                        this.setState({
                            errorMessage : 'Shamps Obligatoire'
                        });
                    }
                break;

            case 'edit':
                    if(this.state.title && this.state.body !== '')
                    {
                        let note ={
                            title : this.state.title,
                            body : this.state.body
                        }
                        firebaseDB.ref(`notes/${this.props.id}`)
                            .update(note)
                            .then(() => {
                                this.setState({
                                    succMessage : <span className='scc'>
                                                        Bien Ajouter . 
                                                </span>,
                                    errorMessage : '',
                                    title : '',
                                    body : ''
                                })
                        }).catch((e) => {
                            alert(e);
                        });
                    }else{
                        this.setState({
                            errorMessage : 'Shamps Obligatoire'
                        });
                    }
                break;

            case 'delete':
                break;

            default:
                alert("Logging ...");
        }
    }

  render() {
    return (
      <div>
      {this.state.succMessage}
        <div className='form'>
            <form onSubmit={this.formSubmit}>

                <div className="form_element">
                    <label htmlFor="title">Titre*</label>
                    <input type="text" value={this.state.title}
                    onChange={this.onTitleChanged}/>
                </div>
                <span className="err">{this.state.errorMessage}</span>

                <div className="form_element">
                    <label htmlFor="body">Description*</label>
                    <textarea name="" id="" cols="30" rows="10"
                    value={this.state.body}
                    onChange={this.onBodyChanged}></textarea>
                </div>
                <span className="err">{this.state.errorMessage}</span>

                <div className="button_element">
                    <button type='submit'>
                        Valider
                    </button>
                </div>

            </form>
        </div>
      </div>
    )
  }
}

export default form;
