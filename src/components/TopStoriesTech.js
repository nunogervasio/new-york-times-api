import React, { Component } from "react";
import TopStorieCard from "./TopStoriesCard";
import { Header } from "semantic-ui-react";
import { sliceArticals } from "../utils";
import { APIKEY } from "../config";

class TopStories extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${APIKEY}`
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
            Technology
          </Header>
        </div>
        {sliceArticals(this.state.data, 5).map((obj, index) => (
          <TopStorieCard
            key={index}
            artical_url={obj.url}
            headline={obj.title}
            summary={obj.abstract}
            pub_date={obj.published_date}
            // img_url={obj.multimedia[3].url}
            divider_icon="wifi"
          />
        ))}
      </div>
    );
  }
}

export default TopStories;
