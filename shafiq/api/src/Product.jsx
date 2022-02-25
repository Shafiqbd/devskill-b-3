import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Container, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin: 30px 0px;
`;
const ProductWrap = styled.div`
  & span {
    font-size: 22px;
    font-weight: 700;
  }
`;
const CustGrid = styled(Grid)`
  &:hover {
    cursor: pointer;
  }
`;
const Product = ({ productList }) => {
  if (productList) {
    console.log("productList", productList);
  }
  const getProductDetails = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Title>Product List</Title>
      <ProductWrap>
        <Grid container spacing={4}>
          {productList.map((data, index) => (
            <CustGrid item md={4} key={index} onClick={() => getProductDetails(data)}>
              <Card style={{ padding: "15px" }}>
                <CardMedia component="img" height="194" image={data.image} alt={data.title[0]} />
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {data.title[0]}
                    </Avatar>
                  }
                  title={data.title.substr(1, 20) + "..."}
                  subheader={data.price + " " + "BDT"}
                />
                <p>{data.description.substr(1, 100) + "..."}</p>
                {/* <CardContent>
                  <Typography variant="body2" color="text.secondary">{data.description}</Typography>
                </CardContent> */}
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </CustGrid>
          ))}
        </Grid>
      </ProductWrap>
    </Container>
  );
};

export default Product;
