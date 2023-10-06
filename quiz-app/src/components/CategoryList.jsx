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
                  image="/src/assets/deportes.jfif"
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
                  image="/src/assets/historia.jpg"
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
                  image="/src/assets/geografia.png"
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
