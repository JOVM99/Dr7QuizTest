//Component for questions

import { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";

//Import stylized alerts
import Swal from "sweetalert2";

export const Questions = ({
  nameCategory,
  questionsF,
  indexQuestion,
  filteredQuestions,
  setindexQuestion,
}) => {
  //This state handles responses randomly
  const [answerRandom, setAnswerRandom] = useState([]);

  //This state handles the result
  const [score, setScore] = useState(0);

  //This state manages the index of the selected answer
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);

  //These states are used as flags for correct response and disable buttons
  const [correct, setCorrect] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setAnswerRandom(filteredQuestions.answers.sort(() => Math.random() - 0.5));
  }, [filteredQuestions]);

  //Function to go to the next question
  const nextQuestion = () => {
    setSelectAnswerIndex(null);
    setDisabled(false);
    setCorrect(false);
    setindexQuestion(indexQuestion + 1);
  };

  //Function to withdraw from the questionnaire
  const onRetire = () => {
    setScore(0);
    navigate("/");
  };

  //Function to check if the answer is correct
  const onResponse = (isCorrect, index) => {
    setSelectAnswerIndex(index);
    if (isCorrect == true && disabled == false) {
      setScore(score + 1);
      setCorrect(true);
    }
    setDisabled(true);
  };

  //Function to show the alert with the score obtained at the end of the questionnaire
  const onFinished = () => {
    Swal.fire(
      "¡Gracias por realizar la encuesta!",
      `Tu puntaje fue de: ${score} puntos`,
      "success"
    );
    navigate("/");
  };

  return (
    <>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Preguntas de {nameCategory}
      </Typography>
      <Grid
        container
        spacing={3}
        marginTop={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom variant="p" component="div">
            Pregunta {indexQuestion + 1} de {questionsF.length}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            size="large"
            color="secondary"
            style={{ width: 200 }}
            startIcon={<ExitToAppIcon />}
            onClick={onRetire}
          >
            Rendirse
          </Button>
        </Grid>
      </Grid>
      <Typography
        gutterBottom
        variant="p"
        component="div"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 50,
          fontSize: "1.2rem",
        }}
      >
        {filteredQuestions.question}
      </Typography>
      <Grid
        container
        spacing={3}
        marginTop={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/*Render response buttons */}
        {answerRandom.map((a, index) => (
          <Grid key={index} item xs={12} sm={6}>
            <Button
              variant="contained"
              style={{ width: 200 }}
              color={
                selectAnswerIndex !== null && index === selectAnswerIndex
                  ? correct === false
                    ? "error"
                    : "success"
                  : "primary"
              }
              onClick={() => onResponse(a.isCorrect, index)}
              disabled={disabled !== false && selectAnswerIndex !== index}
            >
              {a.answer}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 50,
        }}
      >
        {/* If it is before question 5, it will show the next button, otherwise the finish button */}
        {indexQuestion < 4 ? (
          <Button
            variant="outlined"
            size="large"
            color="secondary"
            onClick={nextQuestion}
            style={{ width: 200 }}
          >
            Siguiente
          </Button>
        ) : (
          <Button
            variant="outlined"
            size="large"
            color="secondary"
            style={{ width: 200 }}
            onClick={onFinished}
          >
            Finalizar
          </Button>
        )}
      </Box>
    </>
  );
};
