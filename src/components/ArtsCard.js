import React from "react";
import { Grid, Header, Divider } from "semantic-ui-react";

const MainCard = ({ headline, summary, img_url, section }) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid.Column width={6}>
          <Header as={"h3"}>
            <Header.Subheader>{section}</Header.Subheader>
            {headline}
          </Header>
        </Grid.Column>
        <Grid.Column width={10}>
          <p>{summary}</p>
          <p>{img_url}</p>
        </Grid.Column>
      </Grid>
      <Divider />
    </React.Fragment>
  );
};

export default MainCard;
