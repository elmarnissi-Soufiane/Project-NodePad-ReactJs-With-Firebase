import React, { Component } from 'react'

import Navbar from './includes/navbar.js';

import './includes/navbar.css';

import {firebaseDB} from '../firebase.js';

import {Link} from 'react-router-dom';

import './includes/navbar.css';
class Home extends Component {
  constructor(props){
    super(props);
    this.state ={
      notes : [],
      succesMessage : ''
    }
  }

  componentWillMount(){
    firebaseDB.ref('notes')
      .once('value').then((snapShot) => {
        const data = [];
        snapShot.forEach((items) => {
          data.push({
            id : items.key,
            ...items.val()
          });
        });
                
        this.setState({
          notes : data
        });
      });
  }

  showData = () => {
    let temp = '';
    temp = this.state.notes.map((note, i) => {
      return (
        <tbody>
          <tr key={i}>
            <td>{note.title}</td>
            <td>
              <p>{note.body}</p>
            </td>
            <td>
              <Link to={`/edit/${note.id}`} className='link'>
                Modifier
              </Link>
              <Link to={`/delete/${note.id}`} className='link'>
                Supprimer
              </Link>
            </td>
          </tr>
        </tbody>
      )
    });
    return temp;
  }
  render() {
    //console.log(this.state.notes);
    return (
      <div>
        <Navbar />
        <div className="container">
        {this.state.succesMessage}
        <table>
          <thead>
            <tr>
              <th className='th'>Titre</th>
              <th className='th'>Description</th>
              <th className='th'>Action</th>
            </tr>
          </thead>
          {this.showData()}
        </table>
        </div>
      </div>
    )
  }
}

export default Home;
