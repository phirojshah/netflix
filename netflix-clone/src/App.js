//import logo from './logo.svg';
import './App.css';
import Row from './Row.js'
import request from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
<Nav/>

<Banner />


      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals}
       isLargeRow={true}/>
    
    <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} />
    <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
    <Row title="Documentaries" fetchUrl={request.fetchDocumantaries}/>

    <Row title="Animation" fetchUrl={request.fetchAnimation}/>
    <Row title="Mystery" fetchUrl={request.fetchMystery}/>
    <Row title="SciFi" fetchUrl={request.fetchSciFi}/>
    





    </div>
  );
}

export default App;
  