import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { categories } from "../data";

export const CategoryList = () => {
  const { geografia, historia, deportes } = categories;
  return (
    <Box marginTop={3}>
      <Container maxWidth="lg">
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Bienvenido(a) realiza el cuestonario de tú preferencia
        </Typography>
        <Grid container spacing={5} marginTop={5}>
          <Grid item xs={12} sm={4}>
            {/* Category deportes */}
            <Link
              to={`/category/${deportes}`}
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image="https://quizizz.com/media/resource/gs/quizizz-media/quizzes/f31c0ac0-8bbc-4c26-9df1-573196c664dd"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    Deportes
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            {/* Category Historia */}
            <Link
              to={`/category/${historia}`}
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image="https://buen-saber.com/wp-content/uploads/2020/06/15-preguntas-de-historia-universal.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    Historia
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            {/* Category Geografía */}
            <Link
              to={`/category/${geografia}`}
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image="https://play-lh.googleusercontent.com/EbXvue6qWBOpR5PBdtWjj6rwh5ftcN192bQ8CUaKj35FfJHaLAgdMpQMkQas6H1MF5eY"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    Geografía
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
