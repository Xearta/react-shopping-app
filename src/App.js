import React from 'react';
import data from './data.json';
import Products from './components/Products';

class App extends React.Component {
  state = {
    products: data.products,
    size: '',
    sort: '',
  };

  render() {
    return (
      <div className='grid-container'>
        <header>
          <a href='/'>React Shopping App</a>
        </header>
        <main>
          <div className='content'>
            <div className='main'>
              <Products products={this.state.products} />
            </div>
            <div className='sidebar'>Cart Items</div>
          </div>
        </main>
        <footer>All rights are reserved.</footer>
      </div>
    );
  }
}

export default App;
