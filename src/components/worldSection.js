import React, { Component } from "react";
import SectionCard from "./sectionCard";
import { Grid } from "semantic-ui-react";
import PaginationComponent from "../common/pagination";
import { paginate } from "../utils/paginate";
import { APIKEY } from "../config";

class WorldSection extends Component {
  state = {
    articals: [],
    currentPage: 1,
    pageSize: 4
  };
  componentDidMount() {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${APIKEY}`
    )
      .then(responce => responce.json())
      .then(responceData =>
        this.setState({
          articals: responceData.results
        })
      )
      .catch(error => {
        console.log("Error fetching and parsing data...", error);
      });
  }
  handlePageChange = (page, pagesCount) => {
    if (page < 1) page = 1;
    if (page > pagesCount) page = pagesCount;
    this.setState({ currentPage: page });
  };
  render() {
    const filteredArticals = paginate(
      this.state.articals,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <Grid centered={true}>
        <Grid.Column
          mobile={14}
          tablet={12}
          computer={10}
          largeScreen={8}
          widescreen={6}
        >
          {filteredArticals.map((obj, index) => (
            <SectionCard
              key={index}
              artical_url={obj.url}
              headline={obj.title}
              summary={obj.abstract}
              pub_date={obj.published_date}
              // img_url={obj.multimedia[3].url}
              sub_section={obj.subsection}
              byline={obj.byline}
              divider_icon="world"
            />
          ))}
          <PaginationComponent
            itemsCount={this.state.articals.length}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default WorldSection;
