import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = {videos: [], selectedVideo: null};
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q:term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
        console.log(this.state.selectedVideo)
    }
    componentDidMount() {
        this.onTermSubmit('Buildings')
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 no-pad p-0">
                        <SearchBar onTermSubmit={this.onTermSubmit} />
                    </div>
                    <div className="col-md-7 no-pad p-0 pt-2">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="col-md-5 no-pad p-0">
                        <VideoList  videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                    </div>
                </div>
            </div>
        )
    }
}
export default App