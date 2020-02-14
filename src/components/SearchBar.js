import React from 'react';

class SearchBar extends React.Component {
    state= {term: ''}

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onFormSubmit}>
                    <div className="mt-2 border p-2">
                        <label>Video search</label>
                        <br></br>
                        <input type="text" value={this.state.term} onChange={this.onInputChange} style={{width: '100%'}} placeholder="search"/>
                    </div>
                </form>
            </div>
        ) 
    }
} 
export default SearchBar