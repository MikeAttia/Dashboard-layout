import React from'react'
import './App.css';
import Sidebar from './Sidebar'
import Reviews from './Reviews'
import AverageRating from './AverageRating'
import SentimentAnalysis from './SentimentAnalysis'
import WebsiteVisitors from './WebsiteVisitors'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Reviews count='2,512' />
      <AverageRating count='4.8' />
      <SentimentAnalysis count1='960' count2='122' count3='321'/>
      <WebsiteVisitors count='821'/>
      
    </div>
  );
}

export default App;
