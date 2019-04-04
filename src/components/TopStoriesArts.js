import React, { Component } from "react";
import ArtsCard from "./ArtsCard";
import { Header } from "semantic-ui-react";
import { sliceArticals, formatSection } from "../utils";
import { timeDifference } from "../utils/dateAndTime";
import { APIKEY } from "../config";

class TopStoriesArts extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${APIKEY}`
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
            Arts
          </Header>
        </div>
        {sliceArticals(this.state.data, 4).map((obj, index) => (
          <ArtsCard
            key={index}
            artical_url={obj.url}
            headline={obj.title}
            summary={obj.abstract}
            pub_date={timeDifference(obj.published_date)}
            // img_url={obj.multimedia[0]["url"]}
            divider_icon="paint brush"
            section={formatSection(obj.section, obj.subsection)}
          />
        ))}
      </div>
    );
  }
}

export default TopStoriesArts;
