import React, { Component } from "react";
import TopStorieCard from "./TopStoriesCard";
import { Header } from "semantic-ui-react";
import { sliceArticals } from "../utils";
import { APIKEY } from "../config";

class TopStoriesScience extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${APIKEY}`
    )
      .then(responce => responce.json())
      .then(responceData =>
        this.setState({
          data: responceData.results
        })
      )
      .catch(error => {
        console.log("Error fetching and parsing data...", error);
      });
  }
  render() {
    return (
      <div>
        <div className="section-header">
          <Header size="large" textAlign="center">
            Science
          </Header>
        </div>
        {sliceArticals(this.state.data, 3).map((obj, index) => (
          <TopStorieCard
            key={index}
            artical_url={obj.url}
            headline={obj.title}
            summary={obj.abstract}
            pub_date={obj.published_date}
            // img_url={obj.multimedia[3].url}
            divider_icon="hand spock"
          />
        ))}
      </div>
    );
  }
}

export default TopStoriesScience;
