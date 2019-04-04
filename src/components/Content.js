import React from "react";
import MostViewed from "./MostViewed";
import TopStories from "./TopStories";
import TopStoriesTech from "./TopStoriesTech";
import TopStoriesScience from "./TopStoriesScience";
import { Grid } from "semantic-ui-react";
import TopStoriesArts from "./TopStoriesArts";

const Content = () => {
  return (
    <React.Fragment>
      <Grid centered={true}>
        <Grid.Column
          widescreen={6}
          largeScreen={8}
          computer={7}
          tablet={9}
          mobile={14}
        >
          <MostViewed />
          <TopStoriesArts />
        </Grid.Column>

        <Grid.Column
          widescreen={4}
          largeScreen={6}
          computer={7}
          tablet={5}
          mobile={14}
        >
          <Grid columns="equal">
            <Grid.Column tablet={16} computer={8}>
              <TopStories />
              <TopStoriesScience />
            </Grid.Column>
            <Grid.Column only="computer">
              <TopStoriesTech />
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
};

export default Content;
