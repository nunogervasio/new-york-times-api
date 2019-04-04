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
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${APIKEY}`
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
            Top Stories
          </Header>
        </div>

        {sliceArticals(this.state.data, 5).map((obj, index) => (
          <TopStorieCard
            key={index}
            artical_url={obj.url}
            headline={obj.title}
            pub_date={obj.published_date}
            // img_url={obj.multimedia[3].url}
            section={obj.section}
            sub_section={obj.subsection}
            divider_icon="newspaper outline"
            by_line={obj.byline}
          />
        ))}
      </div>
    );
  }
}

export default TopStories;
