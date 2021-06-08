import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer.js';
import Data from './components/Data.json';
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      DataElement: Data,
      show: false,
      selectedImg: {}


    }

  }

  setShow = () => {
    this.setState({
      show: true
    })

  }

  handleClose = () => {
    this.setState({
      show: false

    })

  }

  popUpTheCard = (title) => {
    let selectedImg = Data.find(card => {
      if (card.title === title) {
        return card;
      }
    })

    this.setState({
      show: true,
      selectedImg: selectedImg
    })
  }


  render() {
    return (
      <div>
        <Header />

        <Main
          DataElement={this.state.DataElement}
          handleClose={this.handleClose}
          popUpTheCard={this.popUpTheCard}

        />

        <Footer />

        <SelectedBeast
          DataElement={this.state.DataElement}
          show={this.state.show}
          handleClose={this.handleClose}
          selectedImg={this.state.selectedImg}
        />
      </div>
    )
  }
}

export default App;
