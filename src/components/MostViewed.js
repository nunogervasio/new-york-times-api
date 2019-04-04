import React, { Component } from "react";
import MostViewedCard from "./mostViewedCard";
import { Header } from "semantic-ui-react";
import { sliceArticals } from "../utils";
import { format } from "date-fns";
import { APIKEY } from "../config";

class MostViewed extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${APIKEY}`
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
            Most Viwed Articals Today
          </Header>
        </div>
        {sliceArticals(this.state.data, 3).map(obj => (
          <MostViewedCard
            key={obj.id}
            artical_url={obj.url}
            headline={obj.title}
            summary={obj.abstract}
            pub_date={format(obj.published_date, "MMM D")}
            img_url={obj.media[0]["media-metadata"][2].url}
            section={obj.section}
          />
        ))}
      </div>
    );
  }
}

export default MostViewed;
